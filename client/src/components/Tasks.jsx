import React, { useContext, useState } from 'react'
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import Dog from "../utils/images/Dog.png"
import { contextProvider } from '../context/refContext';
import EditTask from './EditTask';
import { useNavigate } from 'react-router-dom';


const Tasks = () => {

const navigate = useNavigate();

   const{showedit,setShowedit,active,vitalView,setVitalView} = useContext(contextProvider);
const [open,setOpen] = useState(false);

const handleOption = (action) => {
   if(action ==="vital"){
        console.log("vital task");
    }

    if (action === "edit") {
      setShowedit(true);
    
    // console.log("edit task");
    }

    if (action === "delete") {
      console.log("Delete clicked");
    }

    if (action === "finish") {
      console.log("finish clicked");
    }

    setOpen(false);
  
};

  const handleViewTask = ()=>{
     if(active==="dashboard"){
           navigate("/viewtask")
     }
     if(active==="vital"){
       setVitalView(!vitalView)
     }
  }

  return (
     <div className='min-h-28 w-full flex flex-row gap-2 border py-0.5 px-3 rounded-xl border-zinc-300 mt-1 pb-2'>
                         
        <div className=' flex flex-col w-[75%] cursor-pointer ' onClick={handleViewTask}>
          <div className='flex flex-row gap-[6%] '><span className='text-green-500  text-xl '>O</span><h2 className='text-md font-semibold'>Walk the dog</h2></div>
             <div className='text-sm text-zinc-500 leading-tight  pl-[13%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                <div className=' flex flex-row gap-[15%] text-[9px] mt-auto pl-[13%] whitespace-nowrap'>
                    <div className='flex flex-row gap-3'>
                      <div className='flex flex-row' ><span>priority:</span><span className='text-green-500 ml-1'>Moderate</span></div>
                         <div className='flex flex-row  whitespace-nowrap'><span>Status:</span><span className='text-green-500 ml-1'>Not Started</span></div>
                        </div>
                                                             
                            <div className='text-zinc-400 flex flex-row gap-1' ><span>Created on:</span><span >20/06/2026</span></div>
                            </div>
                                                 
                     </div> 
                                           
<div className='h-full w-[25%] align-middle'>
     <div className='relative'>
     <button className=' flex  ml-auto cursor-pointer' onClick={()=>setOpen(!open)}>
     <IoEllipsisHorizontalOutline />                       
        </button>
        {open && (
            <div className="absolute right-0 mt-2 w-25 bg-[#fbfbfb] border-zinc-100 rounded-md shadow-lg z-10">
          <button
            className="block w-full text-left px-4 py-1 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOption("delete")}
          >
            Vital
          </button>

          <button
            className="block w-full text-left px-4 py-1 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOption("edit")}
          >
            Edit
          </button>
          

          <button
            className="block w-full text-left px-4 py-1 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOption("favorite")}
          >
            Delete
          </button>
          
          <button
            className="block w-full text-left px-4 py-1 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOption("favorite")}
          >
            Finish
          </button>

        </div>
         ) }
    </div>
    {showedit && (<EditTask />)}
                          



{/* <select className=' text-black flex  ml-auto  rounded-md outline-none' value='...' >
    <option value=""><IoEllipsisHorizontalOutline /></option>
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high">High</option>
 </select> */}
             
                                <img src={Dog} className='mt-[2%] pr-[15%]' />
                             </div>
                         </div>
    
  )
}

export default Tasks
