const mongoose = require('mongoose')
const dotenv = require('dotenv')


dotenv.config({path: './config.env'});

const app = require('./app')


const db = process.env.DB_LOCAL
mongoose.connect(db, {

}).then(() => console.log('DB Connection was successful'))

const port = process.env.PORT || 8081
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})

