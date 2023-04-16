const asyncHandler = require('express-async-handler')
const Worker = require('../models/workerModel')
const mongoose = require('mongoose')


// get all workers
const getWorker = asyncHandler(async (req, res) => {
    const workers = await Worker.find()
    res.status(200).json(workers)
})


// create a worker
const createWorker = asyncHandler(async (req, res) => {

    const worker = new Worker({
        name: req.body.name,
        job: req.body.job,
        type: req.body.type,
    })

    const savedWorker = await worker.save()
    res.status(201).json(savedWorker)
})


// get one worker
const getWorkerById = asyncHandler(async(req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such worker!"})
    }

    const worker = await Worker.findById(id)
    if (!worker){
        return res.status(404).json({error: "No such worker!"})
    }

    res.status(200).json(worker)
})


// update worker
const updateWorker = asyncHandler(async (req, res) => {
    const { id } = req.params


    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such worker!"})
    }
    const updatedWorker = await Worker.findByIdAndUpdate(id, req.body, {new: true})
    if (!updatedWorker){
        return res.status(404).json({error: "No such worker!"})
    }
    res.status(200).json(updatedWorker)
})

// delete worker
const deleteWorker = asyncHandler(async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such worker!"})
    }
    const deletedWorker = await Worker.findOneAndDelete({_id: id})
    if (!deletedWorker){
        return res.status(400).json({error: "No such worker!"})
    }
    res.status(200).json(deletedWorker)
})

module.exports = {
    getWorker,
    getWorkerById,
    createWorker,
    updateWorker,
    deleteWorker
}