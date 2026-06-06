import React, { useContext, useEffect } from 'react'
import { MdDashboard } from "react-icons/md";
import { BsExclamation } from "react-icons/bs";
import { LuClipboardCheck } from "react-icons/lu";
import { BsListTask } from "react-icons/bs";
import { RiSettings3Fill } from "react-icons/ri";
import { IoMdHelpCircle } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import Avatar from "../utils/images/avatar.avif"
import { contextProvider } from '../context/RefContext';
import {Link, useNavigate} from "react-router-dom"


const MainPart = () => {

  const navigate = useNavigate();

  const{active,setActive,login,setLogin} = useContext(contextProvider);

useEffect(()=>{
  localStorage.setItem("active",active);
console.log(active);
},[active])
 

  // const handleDash = ()=>{
  //   setDashboard(!dashboard);
  // }


  return (
     <div className='w-[25%] h-[90%] bg-[#fbfbfb] absolute  flex flex-col flex-1 z-10  '>
            {/* <div className='relative top-0 mx-[30%] bg-red-500 h-[20%] '> </div> */}
            <div className='absolute h-[94%] w-full mt-[10%] bottom-0 bg-[#FF6767] mr-5 rounded-r-md pt-[25%] px-[10%] text-white flex flex-col justify-between  gap-1'>  
             
              <div className='flex flex-col gap-1 '>
               <Link to="/" onClick={()=>setActive("dashboard")}  className={`h-10 w-full flex flex-row gap-3  items-center  rounded-xl px-4 cursor-pointer hover:bg-white hover:text-[#FF6767] ${active==="dashboard" ?("bg-white text-[#FF6767]"):("bg-[#FF6767] text-white")} `}>
                  <MdDashboard className='text-2xl' />
                 <span className='text-sm font-semibold'>Dashboard</span>
               </Link>

               <Link to="/vital" onClick={()=>setActive("vital")}  className={`h-10 w-full flex flex-row gap-2  items-center  rounded-xl px-2 cursor-pointer hover:bg-white hover:text-[#FF6767] ${active==="vital" ?("bg-white text-[#FF6767]"):("bg-[#FF6767] text-white")}  `}>
                 <BsExclamation  className='text-4xl' />
                 <span className='text-sm font-semibold'>Vital Task</span>
               </Link>

               <Link to="/mytask" onClick={()=>setActive("mytask")} className={`h-10 w-full flex flex-row gap-3  items-center  rounded-xl px-4 cursor-pointer hover:bg-white hover:text-[#FF6767] ${active==="mytask" ?("bg-white text-[#FF6767]"):("bg-[#FF6767] text-white")} `}>
                  {/* <LuClipboardCheck  className='text-2xl' /> */}
                  <BiTask  className='text-2xl' />
                 <span className='text-sm font-semibold'>My Task</span>
               </Link>

               <Link to="/category" onClick={()=>setActive("category")} className={`h-10 w-full flex flex-row gap-3  items-center rounded-xl px-4 cursor-pointer  hover:bg-white hover:text-[#FF6767] ${active==="category" ?("bg-white text-[#FF6767]"):("bg-[#FF6767] text-white")} `}>
                 <BsListTask  className='text-2xl' />
                 <span className='text-sm font-semibold'>Task Categories</span>
               </Link>

               <Link to="/setting" onClick={()=>setActive("setting")} className={`h-10 w-full flex flex-row gap-3  items-center rounded-xl px-4 cursor-pointer hover:bg-white hover:text-[#FF6767] ${active==="setting" ?("bg-white text-[#FF6767]"):("bg-[#FF6767] text-white")} `}>
                 <RiSettings3Fill  className='text-2xl' />
                 <span className='text-sm font-semibold'>Settings</span>
               </Link>

               <Link to="/help" onClick={()=>setActive("help")} className={`h-10 w-full flex flex-row gap-3  items-center rounded-xl px-4 cursor-pointer hover:bg-white hover:text-[#FF6767] ${active==="help" ?("bg-white text-[#FF6767]"):("bg-[#FF6767] text-white")} `}>
                 <IoMdHelpCircle  className='text-2xl' />
                 <span className='text-sm font-semibold'>Help</span>
               </Link>
              </div>

              <div className='pb-1'>
                  <button onClick={()=>(setLogin(!login),navigate("/"),localStorage.removeItem("token"),localStorage.removeItem("active"))} className='h-10 w-[50%]  flex flex-row gap-3  items-center rounded-xl px-4 cursor-pointer  hover:bg-white hover:text-[#FF6767] '>
                 <MdLogout  className='text-2xl' />
                 <span className='text-sm font-semibold'>Logout</span>
               </button>
              </div>
            </div>


            <Link to="/profile" className={`relative top-0 ml-[25%] mr-[35%] my-[2%] h-[16%] flex flex-col justify-start items-center cursor-pointer text-white tracking-tight leading-none  `} onClick={()=>setActive("profile")}> 
              <div className='h-16 w-14 rounded-[100%] border bg-amber-500 '>
                <img src={Avatar}  className='h-full w-full rounded-[100%] object-cover' />
              </div>
              <div className='font-semibold'>Sundar Gurung</div>
              <div className='text-sm  '>sundergurung360@gmail.com</div>
            </Link>

        </div>
  )
}

export default MainPart
