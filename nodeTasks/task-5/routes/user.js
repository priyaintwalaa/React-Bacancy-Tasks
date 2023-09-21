const express = require('express')

const routes = express.Router();

const userController = require('../controllers/user')

routes
.post('/add-user',userController.addUser)


module.exports = routes