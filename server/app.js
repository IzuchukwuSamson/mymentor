const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const mentorsRoute = require('./routes/mentorsRoute')

const app = express()


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json())
app.use(cors())

app.use('/mentors', mentorsRoute)

module.exports = app