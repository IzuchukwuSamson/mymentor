const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide your firstname']
    },
    lastName: {
        type: String,
        required: [true, 'Please provide your lastname']
    },
    userName: {
        type: String,
        required: [true, 'Please provide a username'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        enum: ['user', 'admin' ],
        default: 'user'
    },
    password: {
        type: String,
        required: [true, 'Please provide your password'],
        minlength: 8,
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            validator: function(el) {
                return el === this.password
            },
            message: 'Passwords do not match'
        }
    }
})

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next()

    this.password = await bcrypt.hash(this.password, 12)
    this.passwordConfirm = undefined

    next()
}) 
// $2a$12$BQO7vIfNVINEdn6JeyjSQeTN6


userSchema.methods.comparePassword = async function(candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword)
}

const User = mongoose.model('User', userSchema)

module.exports = User
