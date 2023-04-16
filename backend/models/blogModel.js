const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: Object,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Blog', blogSchema)