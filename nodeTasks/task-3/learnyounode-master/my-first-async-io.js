const fs = require('fs')

const readFileAsync = fs.readFile(process.argv[2],(err,data)=>{
   const noLines= data.toString().split('\n').length -1;
   console.log(noLines)
})
