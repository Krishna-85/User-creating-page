const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
   username:{
    type:String
   },
   email:{
    type:String
   },
   imageUrl:{
    type:String
   }
})

module.exports = mongoose.model('user', userSchema)