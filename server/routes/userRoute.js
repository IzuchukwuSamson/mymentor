const express = require('express')
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')

const userRouter = express.Router()

userRouter.post('/signup', authController.signup )
userRouter.post('/login', authController.login )
userRouter.post('/forgotpassword', authController.forgotPassword )

userRouter.patch('/resetpassword', authController.resetPassword )


userRouter.route('/').get(userController.getAllUsers).post(userController.createUser)
userRouter.route('/:id').get(userController.getUser).put(userController.updateUser).delete(userController.deleteUser)

module.exports = userRouter