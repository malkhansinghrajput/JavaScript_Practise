/*
http:It is a builtin module which is used to create server.
Port numbers range from 0 to 65535. These ports are categorized into well-known ports (0-1023), registered ports (1024-49151), and dynamic/private ports (49152-65535). Well-known ports are reserved for standard services like HTTP and FTP, while dynamic ports are used for temporary connections and client-side communications.

Error: listen EADDRINUSE: address already in use :::5000

*/ 
import http from 'http'
const PORTNO = 5000
//Returns a new instance of Server.
http.createServer((request,response)=>{
    response.write("<h1>Welcome to Http Server</h1>")
    response.end()
})
.listen(PORTNO,()=>{
    console.log(`Server listening at: http://localhost:${PORTNO}`)
})