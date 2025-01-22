const mongoose = require('mongoose')


const dbconnect = ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connected to the database")
    })
}

module.exports = dbconnect