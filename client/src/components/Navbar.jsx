import React, { useContext, useEffect } from 'react'
import { IoSearch } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { contextProvider } from '../context/RefContext';



// f1eeee
//bg-[#FFFEFE]

const Navbar = () => {

const{active,setActive} = useContext(contextProvider);


useEffect(()=>{
console.log(active);
localStorage.setItem("active",active)
},[active])


  return (
    <div className='h-[10%] w-full flex flex-row justify-between items-center pt-4 px-15 pb-2 bg-[#f0f0f0]'>

   {active ==="dashboard"?( <h1 className='text-2xl'><span className='text-[#FF6767]'>Dash</span><span className='text-black'>board</span></h1>):
   ( <h1 className='text-2xl'><span className='text-[#FF6767]'>TO-</span><span className='text-black'>DO</span></h1>)}

   
     
      <div className='w-4/7  flex flex-row justify-between items-center bg-[#F5F8FF] rounded-md shadow-sm '>
        <input className='outline-none px-4 py-1 bg-[#F5F8FF] w-full rounded-md'  placeholder='Search your task here...'  />
         <div className='h-8 w-8 rounded-md bg-[#FF6767] flex justify-center items-center'><IoSearch className='text-white text-2xl' /></div>
      </div>
    <div className='flex flex-row justify-between items-center gap-10'>
      <div className='flex flex-row justify-between items-center gap-3'>
        <button className='bg-[#FF6767] py-1 px-2 text-2xl rounded-md text-white'><IoIosNotificationsOutline /></button>
        <button className='bg-[#FF6767] py-2 px-3 text-md rounded-md text-white' ><SlCalender /></button>
      </div>
      <div className='flex flex-col tracking-normal text-sm pb-2 gap-0'>
        <p className='text-black font-semibold'>Tuesday</p>
        <p className='text-blue-500 font-semibold'>21/05/2026</p>
      </div>
      </div>
    </div>
  )
}

export default Navbar
