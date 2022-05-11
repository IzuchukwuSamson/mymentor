const express = require('express')
const requestController = require('../controllers/requestController')

const requestRouter = express.Router()

requestRouter.route('/').get(requestController.getAllRequests).post(requestController.createRequest)
requestRouter.route('/:id').get(requestController.getRequest).patch(requestController.updateRequest).delete(requestController.deleteRequest)

module.exports = requestRouter