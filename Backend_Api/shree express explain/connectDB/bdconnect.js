import mongoose from "mongoose"

const connectDB = async (DB_URL,DB_NAME)=>{
       try {
         await mongoose.connect(DB_URL + DB_NAME)
         console.log("Database Connected Successfully")     
       } catch (error) {
              console.log("Database Not Connected",error)
       }
}

export default connectDB