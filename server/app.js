import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

import connectDB from "./db/connect.js";
import User from "./models/user.js"
import Task from "./models/task.js"


const app = express();

app.use(cors({
   origin:[ "http://localhost:5173"],
   methods:["GET","POST","PUT","DELETE"],
   credentials:true,
   allowedHeaders:["content-Type","Authorization"]
}));


app.use(cookieParser());
app.use(express.json())


app.post("/signUp",async (req,res)=>{
    try{
        const {firstname,lastname,username,email,password}= req.body;
        const user = await User.findOne({email});
        if(user){
            res.status(400).json({
              success:false,
              message:"user already present"
            })
        }
        const salt = bcrypt.genSalt(10);
        const hash = bcrypt.hash(password,salt);
         
        const createdUser = await User.create({
            firstname,
            lastname,
            username,
            email,
            password:hash,
        })

        const token = jwt.sign({userId:user._id},"viiiiii")
        // res.cookie("token",token,{
        //     httpOnly:true,
        //     sameSite:"strict"
        // })
        res.status(204).json({
            success:true,
            message:"user created",
            token
        })
    }
    catch(error){
        console.log("error = ",error);
    }
})




app.post("/signIn", async (req,res)=>{
    try{
          const {email,password} = req.body;
          const user = User.findOne({email});
          if(!user){
            res.status(401).json({
                message:"user not found",
                success:false
            })
          }
          const decoded = await bcrypt.compare(password,user.password);
          if(!decoded){
            res.status(401).json({
                message:"password is incorrect",
                success:false
            })
          }
         const token = jwt.sign({userId:user._id},"viiiiii")

        //  res.cookie("token",token,{
        //     httpOnly:true,
        //     sameSite:"strict"
        //  })

          res.status(200).json({
            success:true,
            message:"login successful",
            token
          })

    }
    catch(error){
      consolr.log(error);
    }
})




app.get("/",(req,res)=>{
    res.status(200).json("hello world")
})

  connectDB();
app.listen(3000,()=>{
  
    console.log("server is running on port 3000");
})
