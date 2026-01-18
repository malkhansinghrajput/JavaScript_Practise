import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,"name is mandatory"]
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        required:[true,"email is mandatory"]
    },
})
const modal = mongoose.model('Customer',customerSchema)

export default modal