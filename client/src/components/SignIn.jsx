import React, { useContext, useState } from 'react'
import BgImgae from "../utils/images/bgImage.png"
import SigninImage from "../utils/images/signin.png"

import { IoMdPerson } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";

import { MdLock } from "react-icons/md";
import FacebookLogo from "../utils/images/facebook.png"
import XLogo from "../utils/images/xlogo.jpg"
import { FcGoogle } from "react-icons/fc";
import { contextProvider } from '../context/refContext';
import { useNavigate } from 'react-router-dom';
// import { SignInPage } from '../api/api';



const SignIn = ({user,setUser}) => {

const {active,setActive} = useContext(contextProvider);

const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] =useState("");

const handleSignIn = (e)=>{
  e.preventDefault();

  // setActive("dashboard");
  localStorage.setItem("token",email);
  // localStorage.setItem("active","dashboard");
  
  navigate("/");
  window.location.reload();
}



  return (
    <div>
        <div className='absolute h-screen w-screen '>
          <img  className='h-screen w-full' src={BgImgae}/>
        </div>

        <div className='relative h-screen w-screen bg-[#FF3434]/70 py-[1.5%] '>
            <div className='relative bg-white rounded-md h-5/6 w-8/9 mx-[5.5%] my-[4%] z-50 flex flex-row '>
            
            <div className='w-1/2 h-full pt-[5%] '>

             <form onSubmit={handleSignIn} className='mx-[3.5%]  my-[3.5%] w-full flex flex-col justify-between items-start gap-2 '>
              
               <h1 className='text-2xl font-semibold'> Sign In</h1>
              <div className='flex flex-row gap-2 rounded-md border w-[90%]' ><IoMdPerson  className='h-10 w-10 p-2' /><input placeholder='Enter Username' type='text' value={email} onChange={(e)=>setEmail(e.target.value)} className='py-2 w-full  outline-none' /></div>
              <div  className='flex flex-row gap-2 rounded-md border w-[90%]'  ><MdLock className='h-10 w-10 p-2'  /><input placeholder='Enter Password' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='py-2  outline-none w-full' /></div>
             
               <div className='mt-2 flex flex-row gap-3'><input type="checkbox" required className='h-3 w-3 border mt-2 cursor-pointer ' /> <p>Remember Me</p></div>
               <button  type="submit" className='py-[2%] px-[6%] text-white bg-[#FF6767] rounded-sm cursor-pointer'>Login</button>

              </form>

               <div className='flex flex-row gap-2 mt-6  mx-[3.5%]'><p>Or,Login with</p><div className='flex flex-row gap-3 justify-center items-center ml-4 cursor-pointer'><img src={FacebookLogo} className='h-6 w-6 ' /><FcGoogle /><img src={XLogo} className='h-6 w-6' /></div></div>
              <div className='flex  flex-row gap-1 mx-[3.5%] my-[1%] '><p >Don't have an account? <button className='text-blue-600 cursor-pointer' onClick={(e)=>setUser(!user)}>Create One</button></p></div>
             


            </div>
            <div className='w-1/2 h-full'><img className='h-5/6 w-5/6 mt-20 ml-20 right-0 bottom-0' src={SigninImage} /></div>
            </div>
        </div>
    </div>
  )
}

export default SignIn
