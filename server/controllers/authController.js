const jwt= require('jsonwebtoken')
const User = require('../models/userModel')
const AppError = require('../utils/appError')
// const catchAsync = require('../utils/catchAsync')

exports.signup = async (req, res, next) => {
    const newUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
    })

    const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })

    res.status(201).json({
        status: 'Success',
        token,
        data: {
            newUser
        }
    })
}




exports.login = async (req, res, next) => {
    const {email, password} = req.body
    if(!email || !password) {
        return next(new AppError('Please provide email and password', 400))
    }
    
    const user = await User.findOne({email}).select('+password')
    if(!user || !(await user.comparePassword(password, user.password))) {
        return next(new AppError('Incorrect Login Credentials', 401))
    }
    
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN    
    })

    
    res.status(200).json({
        status: 'Success',
        token,
        data: {
            user
        }
    })

}




exports.forgotPassword = (req, res, next) => {}
exports.resetPassword = (req, res, next) => {}