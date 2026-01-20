import express from 'express'
import indexRoute from './route/indexRoute.js'
import customerRoute from './route/customerRoute.js'
import connectDB from './connectdb/dbconnect.js'
import {getDateTime} from './utility/GetDate.js'

import dotenv from 'dotenv'
dotenv.config({path:"./config/config.env"})
const app = express()
const PORTNO = process.env.PORT_NO||3000


console.log("Current Date & Time:",getDateTime())

//Returns middleware that only parses json 
app.use(express.json())

//Returns middleware that only parses urlencoded bodies 
app.use(express.urlencoded())

//Document Upload
app.use('/uploaddocuments',express.static('uploaddocuments'))

//Database
connectDB(process.env.DB_URL,process.env.DB_NAME)

//Routes
app.use("/",indexRoute)
app.use("/customer",customerRoute)

app.listen(PORTNO,()=>{
    console.log(`Server Listening at http://localhost:${PORTNO}`)
})
