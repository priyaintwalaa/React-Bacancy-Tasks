const express = require('express')
const app = express()

app.get('/search',(req,res)=>{
    const queryparam = req.query;
    res.send(queryparam)

}).listen(Number(process.argv[2]))