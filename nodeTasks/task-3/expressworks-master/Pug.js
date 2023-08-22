const express = require('express')

const app = express()

app.set('view engine','pug')
app.set('views',(process.argv[3] || path.join(__dirname,'public')))
app.get('/home',(req,res)=>{
    res.render('index',{date:new Date().toDateString()})
})

app.listen(Number(process.argv[2]))