import http, { request } from 'http'
import url from 'url'

const PORTNO = 5000

var server = http.createServer((request,response) => {
    console.log(request.method)
    console.log(request.url)
    console.log("===============")
    /*
    @param urlString — The URL string to parse.

    @param parseQueryString
If true, the query property will always be set to an object returned by the querystring module's parse() method. If false, the query property on the returned URL object will be an unparsed, undecoded string.
    */

    var obj = url.parse(request.url,true)
    console.log(obj)

    var msg = ""
     if (obj.pathname === '/') {
        msg="<h1>Home Page</h1>"
     } else if(obj.pathname === '/login') {
         msg="<h1>Login Page</h1>"
     } else if(obj.pathname === '/register') {
         msg="<h1>Register Page</h1>"
     } else if(obj.pathname === '/about') {
         msg="<h1>About Page</h1>"
     } else if(obj.pathname === '/result') {
        var obj1 = obj.query
        console.log("Obj1 : ",obj1)
         msg="<h1>Result Page,Roll Number : "+obj1.rollno+ " Collage Name : " +obj1.college+ " </h1>"
     } else {
         msg="<h1>Error 404,Page Not Found</h1>"
     }
      response.write(msg)
      response.end()
})
.listen(PORTNO,()=> {
    console.log(`Server listen at http://localhost:${PORTNO}`)
})