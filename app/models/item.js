const mongoose = require('mongoose')

const itemsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        zipcode: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
        },
        category: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Item', itemsSchema)