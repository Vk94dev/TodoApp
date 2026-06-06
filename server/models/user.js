import mongoose from "mongoose";
import Task from "./task.js";

const UserSchema = new mongoose.Schema({
    firstname:{
       type:String,
       required:true,
    },
    lastname:{
       type:String,
       required:true,
    },
    username:{
       type:String,
       required:true,
    //    unique:true,
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"],
        minlength:[6,"password must be at least 6 characters long"],
    },
    img:{
        type:String,
    },
    tasks:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Task",
    }]
},{
    timestamps:true,
})


export default mongoose.model("User",UserSchema);










