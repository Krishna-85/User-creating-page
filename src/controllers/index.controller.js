const userModel = require('../models/userModel')
const mongoose = require('mongoose')
module.exports.indexController = (req, res)=>{
    res.render('Index')
}
module.exports.createController = async (req, res)=>{
    const user = await userModel.create(req.body)
    // console.log(imageUrl)
    res.redirect("/users")
}
module.exports.showUserController = async(req, res)=>{
    const userdata = await userModel.find()
    res.render('users', {userdata})
}

module.exports.detailsController = async(req, res)=>{
    
    const userdata = await userModel.findById(req.params.id)
    res.render('details', {userdata})
   
     
}

module.exports.delteUserController = async (req, res)=>{
    const userdata = await userModel.findByIdAndDelete(req.params.id)
     res.redirect('/users')
}

   





