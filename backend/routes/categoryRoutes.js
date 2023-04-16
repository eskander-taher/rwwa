const express = require('express')
const router = express.Router()

const {getCategory, getCategoryById, deleteCategory, updateCategory, createCategory} = require('../controllers/categoryController')
const authAdmin = require('../middleware/auth/authAdmin')

// router.post('/', authAdmin, createCategory) -- after authentication

router.get('/', getCategory)
router.get('/:id', getCategoryById)
router.post('/', createCategory)
router.patch('/:id', updateCategory)
router.delete('/:id', deleteCategory)

module.exports = router