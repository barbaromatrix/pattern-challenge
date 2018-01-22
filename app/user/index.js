const express = require('express')
const userControllerFactory = require('./user.controller')()
const userController = userControllerFactory.createController()

const router = express.Router()
  .get('/', userController.findAll)

module.exports = router;