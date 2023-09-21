const express = require('express')
const app = express();
const friendRoutes = require('./routes/friends')

const userRoutes = require('./routes/user')
const connectionDb = require('./connection')


connectionDb('mongodb://127.0.0.1:27017/user-friend')
.then(()=>{
    console.log("mongo connected")
})

app.use(express.json());

app.use('/friends',friendRoutes)
app.use('/',userRoutes)

app.listen(7000,()=>{
    console.log('server is running on port 7000')});

