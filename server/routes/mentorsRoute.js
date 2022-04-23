const express = require('express')
const mentorsController = require('../controllers/mentorsController')

const mentorRouter = express.Router()

mentorRouter.route('/').get(mentorsController.getAllMentors).post(mentorsController.createMentor)
mentorRouter.route('/:id').get(mentorsController.getMentor).put(mentorsController.updateMentor)

module.exports = mentorRouter