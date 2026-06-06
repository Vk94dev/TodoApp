import React, { useState } from 'react'
import BgImgae from "../utils/images/bgImage.png"
import StartImage from "../utils/images/start.png"
import FirstName from "../utils/images/firstName.png"
import LastName from "../utils/images/lastName.png"
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";

import { MdLock } from "react-icons/md";
import { useNavigate } from 'react-router-dom'


const SignUp = ({user,setUser}) => {


const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [firstname,setFirstname] = useState("");
  const [lastname,setLastname] = useState("");
  const [username,setUsername] = useState("");
  const [conPassword,setConPassword] = useState("");



const handleSignUp = (e)=>{
   e.preventDefault();

  if(!username || !email || !password){
    alert("all field is required");
   setFirstname("");
   setLastname("");
   setUsername("");
   setEmail("");
   setPassword("");
   setConPassword("");
  }
  else{
  localStorage.setItem("token",email);
   navigate("/");
   window.location.reload();
  }
}



  return (
    <div>
        <div className='absolute h-screen w-full '>
          <img  className='h-screen w-full' src={BgImgae}/>
        </div>

        <div className='relative h-screen w-screen bg-[#FF3434]/70 py-2 '>
            <div className='relative bg-white rounded-md h-5/6 w-8/9 mx-[5.5%] my-[4%] z-50 flex flex-row '>
            <div className='w-1/2 h-full '>
              <img className='h-5/6 w-2/3 mt-20' src={StartImage} />
            </div>

            <div className='w-1/2 h-full '>


             <form onSubmit={handleSignUp} className='mx-7  mt-4 max-w-full flex flex-col justify-between items-start gap-2 '>
          
               <h1 className='text-2xl font-semibold'> Sign Up</h1>
              
              <div className='flex flex-row gap-2 rounded-sm border w-full'><img src={FirstName} className='h-10 w-10 p-2'  /><input placeholder='Enter First Name' className='py-2 outline-none w-full' value={firstname} onChange={(e)=>setFirstname(e.target.value)} /></div>
              <div  className='flex flex-row gap-2 rounded-sm border w-full' ><img src={LastName} className='h-10 w-10 p-2' /><input placeholder='Enter Last Name' className='py-2 outline-none w-full' value={lastname} onChange={(e)=>setLastname(e.target.value)} /></div>
              <div className='flex flex-row gap-2 rounded-sm border w-full  ' ><IoMdPerson  className='h-10 w-10 p-2' /><input placeholder='Enter Username' className='py-2 w-full  outline-none' value={username} onChange={(e)=>setUsername(e.target.value)} /></div>
              <div  className='flex flex-row gap-2 rounded-sm border w-full' ><MdEmail  className='h-10 w-10 p-2' />  <input placeholder='Enter Email' className='py-2  outline-none w-full' value={email} onChange={(e)=>setEmail(e.target.value)} /></div>
              <div  className='flex flex-row gap-2 rounded-sm border w-full'  ><MdLock className='h-10 w-10 p-2'  /><input placeholder='Enter Password' type="password" className='py-2  outline-none w-full' value={password} onChange={(e)=>setPassword(e.target.value)} /></div>
              <div className='flex flex-row gap-2 rounded-sm border w-full'><MdLockOutline  className='h-10 w-10 p-2' /><input placeholder='Confirm Password' type="password" className='py-2 w-full outline-none' value={conPassword} onChange={(e)=>setConPassword(e.target.value)} /></div>
             
               <div className='mt-2 flex flex-row gap-3'><input type="checkbox" required className='h-3 w-3 border mt-2 cursor-pointer '  /> <p>I agree to all terms</p></div>
               <button type='submit'  className='py-2 px-6 text-white bg-[#FF6767] rounded-sm cursor-pointer'>Register</button>
             </form>

               <div className='flex flex-row gap-2 pl-[5%] mt-[1%]'><p>Already have an accound?</p><button className='text-blue-500 cursor-pointer'onClick={(e)=>setUser(!user)}>Sign In </button></div>
            
            </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp
