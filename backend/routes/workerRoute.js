const express = require('express')
const router = express.Router()

const {getWorker, getWorkerById, createWorker, updateWorker, deleteWorker} = require('../controllers/workerController')
const authAdmin = require('../middleware/auth/authAdmin')

// router.post('/', authAdmin, createCategory) -- after authentication

router.get('/', getWorker)
router.get('/:id', getWorkerById)
router.post('/', createWorker)
router.patch('/:id',authAdmin, updateWorker)
router.delete('/:id',authAdmin, deleteWorker)

module.exports = router