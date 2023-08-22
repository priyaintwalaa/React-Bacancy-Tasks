const express = require('express')
const app = express();

app.put('/message/:id',(req,res)=>{
    const id = req.params.id
   const sha1=  require('crypto')
   .createHash('sha1')
   .update(new Date().toDateString() + id)
   .digest('hex') 

   res.send(sha1)
}).listen(Number(process.argv[2]))

