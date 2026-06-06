import mongoose from "mongoose";

const connectDB = async ()=>{
 try{
     await mongoose.connect("mongodb+srv://vivek_123:Vka94303@cluster0.asuchpf.mongodb.net/todoApp");
     console.log("mongodb is connected");
 }
 catch(error){
    console.log("error come");
    console.log("error=",error);
 }
}

export default connectDB
