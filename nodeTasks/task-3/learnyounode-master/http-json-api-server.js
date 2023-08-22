const http = require('http')

function parsetime (time) {
    return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
  }
  
  function unixtime (time) {
    return { unixtime: time.getTime() }
  }

http.createServer((req,res)=>{
  const url = new URL(req.url,'http://example.com')
  const timeIso = new Date(url.searchParams.get('iso'))
  let resultTime

  if (/^\/api\/parsetime/.test(req.url)) {
    resultTime = parsetime(timeIso)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    resultTime = unixtime(timeIso)
  }

  if (resultTime) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(resultTime))
  } else {
    res.writeHead(404)
    res.end()
  }

}).listen(Number(process.argv[2]))