const http = require('http')
const map = require('through2-map')

http.createServer((req,res)=>{
   if(req.method !== 'POST'){
    return res.end('send this res')
   }

   const transformStream = map(item => item.toString().toUpperCase());
   req.pipe(transformStream).pipe(res);

}).listen(Number(process.argv[2]))