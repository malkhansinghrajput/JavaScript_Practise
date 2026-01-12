import express from 'express'

const router = express.Router()

/*
Routing refers to determining how an routerlication responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on). Each route can have one or more handler functions, which are executed when the route is matched.
*/

router.get('/',(req,res)=> {
    res.render('Home.html')
})
router.get('/contact',(req,res)=> {
    res.render('Contact.html')
})
router.get('/login',(req,res)=> {
    res.render('Login.html')
})
router.get('/register',(req,res)=> {
    res.render('Register.html')
})



export default router
