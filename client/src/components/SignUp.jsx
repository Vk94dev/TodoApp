import React from 'react'
import BgImgae from "../utils/images/bgImage.png"
import StartImage from "../utils/images/start.png"
import FirstName from "../utils/images/firstName.png"
import LastName from "../utils/images/lastName.png"
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";

import { MdLock } from "react-icons/md";


const SignUp = ({user,setUser}) => {
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


             <div className='mx-7  my-4 max-w-full flex flex-col justify-between items-start gap-2 '>
               <h1 className='text-2xl font-semibold'> Sign Up</h1>
              <div className='flex flex-row gap-2 rounded-sm border w-full'><img src={FirstName} className='h-10 w-10 p-2'  /><input placeholder='Enter First Name' className='py-2 outline-none w-full' /></div>
              <div  className='flex flex-row gap-2 rounded-sm border w-full' ><img src={LastName} className='h-10 w-10 p-2' /><input placeholder='Enter Last Name' className='py-2 outline-none w-full' /></div>
              <div className='flex flex-row gap-2 rounded-sm border w-full  ' ><IoMdPerson  className='h-10 w-10 p-2' /><input placeholder='Enter Username' className='py-2 w-full  outline-none' /></div>
              <div  className='flex flex-row gap-2 rounded-sm border w-full' ><MdEmail  className='h-10 w-10 p-2' />  <input placeholder='Enter Email' className='py-2  outline-none w-full' /></div>
              <div  className='flex flex-row gap-2 rounded-sm border w-full'  ><MdLock className='h-10 w-10 p-2'  /><input placeholder='Enter Password' className='py-2  outline-none w-full' /></div>
              <div className='flex flex-row gap-2 rounded-sm border w-full'><MdLockOutline  className='h-10 w-10 p-2' /><input placeholder='Confirm Password' className='py-2 w-full outline-none' /></div>
             
               <div className='mt-2 flex flex-row gap-3'><input type="checkbox" required className='h-3 w-3 border mt-2  '  /> <p>I agree to all terms</p></div>
               <button  className='py-2 px-6 text-white bg-[#FF9090] rounded-sm'>Register</button>

               <div className='flex flex-row gap-2 '><p>Already have an accound?</p><button className='text-blue-500'onClick={(e)=>setUser(!user)}>Sign In </button></div>
             </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp
