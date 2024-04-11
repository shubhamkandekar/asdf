const mongoose = require('mongoose');


const connectDB = async()=>{
 try {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`connected to database ${conn.connection.host}`)
 } catch (error) {
    console.log(`Error connecting DB ${error}`)
 }
}

module.exports =  connectDB;