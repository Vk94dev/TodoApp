import React, { useContext } from 'react'
import Dog from "../utils/images/Dog.png"
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import { contextProvider } from '../context/refContext';
import { useNavigate } from 'react-router-dom';

const CompletedTask = () => {

    const {active} = useContext(contextProvider);
const navigate = useNavigate();

const handleViewtask = ()=>{
    if(active==="dashboard"){
        navigate("/viewtask")
    }
}


  return (
    <div className='min-h-25 w-full flex flex-row gap-2 border py-0.5 px-3 rounded-xl border-zinc-300'>
                               <div className='h-full w-[75%] cursor-pointer' onClick={handleViewtask} >
                               <div className='flex flex-row gap-4 '><span className='text-green-500 font-semibold text-xl '>O</span><h2 className='text-xl font-semibold'>Walk the dog</h2></div>
                               <div className='flex flex-col pl-[15%] gap-2'>
                                   <div className='text-sm text-zinc-500 leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                   <div className='text-xs  '><span>Status:</span><span className='text-green-500 ml-1'>Completed</span></div>
                                   <div className='text-xs text-zinc-600 tracking-tight'>Completed 2 days ago.</div>
                                </div>
                                 </div>
                                 
                                 <div className='h-full w-[25%] align-middle'>
                                   <button className=' flex  ml-auto'><IoEllipsisHorizontalOutline /></button>
                                     <img src={Dog} className='mt-[17%]' />
                                 </div>
                               </div>
  )
}

export default CompletedTask
