const express = require('express')

const routes = express.Router();

const friendController = require('../controllers/friends')

routes
.post('/add-friend',friendController.addFriend)
.get('/getfriend/:id',friendController.getFriend)

module.exports = routes