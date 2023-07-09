const mongoose = require('mongoose')
require('colors')

const connectDb = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database Connected ${conn.connection.host}`.bgYellow)
    } catch (error) {
        console.log(`Error : ${error.message}`.bgRed)
        process.exit(1)
    }
} 
 
module.exports=connectDb