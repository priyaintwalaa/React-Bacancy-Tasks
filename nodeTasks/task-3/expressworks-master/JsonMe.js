const express = require('express')
const app = express();
const fs = require('fs')

app.get('/books',(req,res)=>{
   fs.readFile(process.argv[3],(err,data)=>{
       res.send(JSON.parse(data))
   })
})

app.listen(process.argv[2])