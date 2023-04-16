const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Worker', workerSchema)