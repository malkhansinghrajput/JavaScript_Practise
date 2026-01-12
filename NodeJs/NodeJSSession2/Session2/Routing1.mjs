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
import url from 'url'
const PORTNO = 5000
//Returns a new instance of Server.
http.createServer((request, response) => {
    console.log(request.method)
    console.log(request.url)
    console.log("===============")

    /*
    @param urlString — The URL string to parse.

    @param parseQueryString
If true, the query property will always be set to an object returned by the querystring module's parse() method. If false, the query property on the returned URL object will be an unparsed, undecoded string.
    */
    var obj = url.parse(request.url,true)
    console.log("URL:",obj)

    var msg = ""
    if (obj.pathname === "/") {
        msg = "<h1>Home Page</h1>"
    }
    else if (obj.pathname === "/about") {
        msg = "<h1>About Page</h1>"
    }
    else if (obj.pathname === "/login") {
        msg = "<h1>Login Page</h1>"
    }
    else if (obj.pathname === "/register") {
        msg = "<h1>Register Page</h1>"
    }
    else if (obj.pathname === "/result") {
        var obj1 = obj.query
        console.log(obj1)
        msg = "<h1>Result Page, Rollno is:"+obj1.rollno+" College Name:"+obj1.college+"</h1>"
    }
    else {
        msg = "<h1>Error 404, Page Not Found</h1>"
    }
    response.write(msg)
    response.end()
})
    .listen(PORTNO, () => {
        console.log(`Server listening at http://localhost:${PORTNO}`)
    })