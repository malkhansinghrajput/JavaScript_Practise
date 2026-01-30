import express from 'express'
import router from './router/indexRouter.js'
import connectDB from './connectDB/bdconnect.js'
import dotenv from 'dotenv'
dotenv.config({path: "./config/config.env"})

const app = express()
const port = process.env.DB_PORT||3000

app.use(express.json())
app.use(express.urlencoded())

app.use("/",router)

connectDB(process.env.DB_URL,process.env.DB_NAME)

app.listen(port,()=>{
       console.log(`http://localhost:${port}`)
})