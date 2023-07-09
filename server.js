const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
require('colors')
const connectDb = require('./config/config')

//dotenv configuration
dotenv.config()

//db config
connectDb();

//rest onject
const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))

//route
app.use('/api/v1',require('./routes/ItemRoute'))
app.use('/api/user',require('./routes/UserRoute'))
app.use('/api/bills',require('./routes/BillRoute'))

//port
const PORT = process.env.PORT || 3009

//listen
app.listen(PORT, () => {
    console.log(`App is running on Port ${PORT}`.bgCyan.white);
})