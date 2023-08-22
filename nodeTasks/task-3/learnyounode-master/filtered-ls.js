const fs = require('fs')
const path = require('path')
 const a = '.'+ process.argv[3]

const readExten = fs.readdir(process.argv[2],(err,list)=>{
   list.forEach(e=>{
       if(path.extname(e)===a){
        console.log(e)
       }
    })
})