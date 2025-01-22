const express = require('express')
const router = express.Router()
const controller = require( '../controllers/index.controller')

router.get('/', controller.indexController)
router.post('/create', controller.createController)
router.get('/users', controller.showUserController)
router.get('/details/:id', controller.detailsController)
router.get('/delete/:id', controller.delteUserController)


module.exports = router