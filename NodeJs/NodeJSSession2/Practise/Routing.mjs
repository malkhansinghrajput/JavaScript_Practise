import http from 'http'

const PORTNO = 5000
var Server = http.createServer((request,response) => {
       console.log(request.method)
       console.log(request.url)
       var msg = ""
       if(request.url === '/'){
          msg="<h1>Home Page</h1>"
       } else if(request.url === '/about') {
          msg="<h1>About Page</h1>"
       } else if(request.url === '/result') {
          msg="<h1>Result Page</h1>"
       } else if(request.url === '/login') {
          msg="<h1>Login Page</h1>"
       } else if(request.url === '/login'){
              msg="<h1>Result Page</h1>"
       }else {
              msg="<h1>Error 404, Page Not Found</h1>"
       }
       response.write(msg)
       response.end()
})
.listen(PORTNO,()=> {
       console.log(`Server Listen At http://localhost:${PORTNO}`)
})