import http, { request } from 'http'
const PORTNO = 5000
//Return new instance of Server
var server = http.createServer((request,response) => {
       response.write("<h1>Welcome to http server</h1>")
       response.end()
})
server.listen(PORTNO,()=> {
       console.log(`Server Listen at http://localhost:${PORTNO}`)
})