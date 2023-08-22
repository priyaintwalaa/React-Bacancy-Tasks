const http = require('http')
const bl = require('bl')

http.get(process.argv[2],(res)=>{
    res.pipe(bl(function(err,data){
        if(err){
            console.log(err)
        }
        data = data.toString();
        console.log(data.length)
        console.log(data)
    }))
})