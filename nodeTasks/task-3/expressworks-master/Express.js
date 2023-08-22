const express = require('express')

const app = express()
app.get('/home',(req,res)=>{
    res.send('Hello World!')
})

app.listen(Number(process.argv[2]))