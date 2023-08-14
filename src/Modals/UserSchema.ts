import mongoose from "mongoose";
import { UserRoles } from "@/enums/UserRoles";
export const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true,

    },
    isVerified:{
        type:Boolean,
        default:false,

    },
    role:{
        type:String,
        enum:[UserRoles.user,UserRoles.admin,UserRoles.client],
        default:UserRoles.user

    },
    verifyToken:{
        type:String,
        

    },
    verifyTokenExpiry:{
        type:Date,
        

    },
    forgetPasswordToken:{
        type:String,
        

    },
    forgetPasswordExpiry:{
        type:Date,
        

    },
})

export const UserModel = mongoose.models.users || mongoose.model("users",UserSchema)