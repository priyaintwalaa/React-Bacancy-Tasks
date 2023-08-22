const mymodule = require('./mymodule')

const dir = process.argv[2]
const str = process.argv[3]

mymodule(dir,str,(err,list)=>{
    if(err) {
        return console.error(err);
    }
  list.forEach(e=>{
    console.log(e)
  })
})