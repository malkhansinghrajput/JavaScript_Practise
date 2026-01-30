import mongoose from "mongoose"

const schema = mongoose.Schema({
       name:{
              type: String,
              trim: true,
              required: [true, "Name is required"]
       },
       email:{
              type: String,
              trim: true,
              required: [true, "Email is required"]  
       },
       mobile:{
              type: String,
              trim:true,
              required:[true,"mobile num is required"]
       }
})

const modal = mongoose.model("table", schema)

export default modal