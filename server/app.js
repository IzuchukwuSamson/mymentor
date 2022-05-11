const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const mentorsRouter = require('./routes/mentorsRoute')
const requestRouter = require('./routes/requestRoute')
const userRouter = require('./routes/userRoute')


const app = express()


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json())
app.use(cors())


app.use('/users', userRouter)
app.use('/mentors', mentorsRouter)
app.use('/requests', requestRouter)


module.exports = app