const mongoose = require('mongoose')

const mentorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        // required: [true, 'Firstname is required']
    },
    lastName: {
        type: String,
        // required: [true, 'Lastname is required']
    },
    areas: {
        type: Array,
        // required: [true, 'Provide your areas of expertise']

    },
    hourlyRate: {
        type: Number,
        // required: [true, 'Provide your rate']
    },
    description: {
        type: String,
        // required: [true, 'Provide a short description']
    }


})

const Mentor = mongoose.model('Mentor', mentorSchema)

module.exports = Mentor

