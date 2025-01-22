const mongoose = require('mongoose')


const dbconnect = ()=>{
    mongoose.connect("mongodb://0.0.0.0/challenge-insta")
    .then(()=>{
        console.log("connected to the database")
    })
}

module.exports = dbconnect