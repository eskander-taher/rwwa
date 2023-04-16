const asyncHandler = require('express-async-handler')
const Category = require('../models/categoryModel')
const mongoose = require('mongoose')

// get all categories
const getCategory = asyncHandler(async (req, res) => {
    const categories = await Category.find()
    res.status(200).json(categories)
})

// create a category
const createCategory = asyncHandler(async (req, res) => {
    // console.log(req.);
    const category = new Category({
        name: req.body.name,
        subCategories: req.body.subCategories
    })

    const savedCategory = await category.save()
    res.status(201).json(savedCategory)
})

// get one category
const getCategoryById = asyncHandler(async(req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such category!"})
    }

    const category = await Category.findById(id)
    if (!category){
        return res.status(404).json({error: "No such category!"})
    }

    res.status(200).json(category)
})

// update category
const updateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such category!"})
    }
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {new: true})
    if (!updatedCategory){
        return res.status(404).json({error: "No such category!"})
    }
    res.status(200).json(updatedCategory)
})

// delete category
const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such category!"})
    }
    const deletedCategory = await Category.findOneAndDelete({_id: id})
    if (!deletedCategory){
        return res.status(400).json({error: "No such category!"})
    }
    res.status(200).json(deletedCategory)
})

module.exports = {
    getCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}