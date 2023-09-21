const express = require('express')
const app = express();
const port =6000;
const routes = require('./routes/user')

app.use(express.urlencoded({extended:false}))
app.use(routes)

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})



