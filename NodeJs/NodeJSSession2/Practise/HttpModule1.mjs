import http from 'http'

const PORTNO= 5000
//return instance of Server 
var server = http.createServer((request,response) => {
       response.write("<h1>Malkhan Singh Dewda Chohan</h1>")
       response.end()
})
server.listen(PORTNO,()=> {
       console.log(`Server listen at http://localhost:${PORTNO}`)
})
