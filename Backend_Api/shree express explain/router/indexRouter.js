import express from 'express'
import IndexCollection from '../collection/indexCollection.js'

const route = express.Router()

route.post("/register",IndexCollection.register)

export default route