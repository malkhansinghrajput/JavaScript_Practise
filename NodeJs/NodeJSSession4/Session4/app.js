import express from 'express'
import ejs from 'ejs'
import indexRouter from './routes/indexRouter.js'
import customerRouter from './routes/customerRouter.js'
/*
Creates an Express application. The express() function is a top-level function exported by the express module.
*/
const app = express()
const port = 3000

app.engine("html",ejs.renderFile)
app.use("/",indexRouter)
app.use("/customer",customerRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})