import mongoose from "mongoose";
import User from "./user.js";

const TaskSchema = new mongoose.Schema({
     title:{
        type:String,
        required:true
     },
     date:{
        type:Date,
     },
     priority:{
        type:String,
     },
     description:{
        type:String,
     },
     image:{
        type:String,
     },
      user:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"User",
      }

},{
    timestamps:true,
})


export default mongoose.model("Task",TaskSchema);



















