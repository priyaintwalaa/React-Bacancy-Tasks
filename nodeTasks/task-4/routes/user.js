const express = require('express')
const routes = express.Router();
const {addUser,getUserById,getUsers,deleteUser,updateUser,getallOrders} = require('../controllers/user')
const asyncRouteHandler = require('../asyncController')
routes
.post('/user',asyncRouteHandler(addUser))
.get('/users',asyncRouteHandler(getUsers))
.get('/user/:id',asyncRouteHandler(getUserById))
.delete('/user/:id',asyncRouteHandler(deleteUser))
.patch('/user/:id',asyncRouteHandler(updateUser))
.get('/orders',asyncRouteHandler(getallOrders))

module.exports = routes

