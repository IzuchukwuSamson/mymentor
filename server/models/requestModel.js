const mongoose = require('mongoose')

const requestSchema = new mongoose.Schema({
    userEmail: {
        type: String
    },
    message: {
        type: String
    }


})

const Request = mongoose.model('Request', requestSchema)

module.exports = Request

