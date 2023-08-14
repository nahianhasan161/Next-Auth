import mongoose from "mongoose"



export const DBConnect = async ()=>{
    try {
      await mongoose.connect(process.env.MONGODB_URI!)
    } catch (error:any) {
        console.log(error.message)
    }
}