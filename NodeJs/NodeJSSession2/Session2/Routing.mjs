/*
Routing:It is a mechanism which is used to redirect from one page to another page.

URL:Uniform Resource Locator
https://www.youtube.com/results?search_query=jethalal

1.https://www.youtube.com := domain name or hostname
2. /results               := pathname or endpoint
3.?search_query=jethalal  := query string
================
*/

import http from 'http'
const PORTNO = 5000
//Returns a new instance of Server.
http.createServer((request,response)=>{
    console.log(request.method)
    console.log(request.url)
    console.log("===============")
    var msg=""
    if (request.url==="/") {
        msg="<h1>Home Page</h1>"
    }
    else if (request.url==="/about") {
        msg="<h1>About Page</h1>"
    }
    else if (request.url==="/login") {
        msg="<h1>Login Page</h1>"
    }
    else if (request.url==="/register") {
        msg="<h1>Register Page</h1>"
    }
    else if (request.url==="/result") {
        msg="<h1>Result Page</h1>"
    }
    else{
        msg="<h1>Error 404, Page Not Found</h1>"
    }
    response.write(msg)
    response.end()
})
.listen(PORTNO,()=>{
    console.log(`Server listening at http://localhost:${PORTNO}`)
})