import React, { useContext } from 'react'
import { contextProvider } from '../context/refContext'

const EditTaskStatus = () => {
  
    const {editstatus,setEditstatus} = useContext(contextProvider);
  
    return (
     <div className='inset-0 flex top-0 left-0 justify-center items-center fixed z-50 '>
            <div className='inset-0 absolute bg-[#252525]/80 ' onClick={(e)=>setTask(!task)}></div>
           
           <div className=' relative bg-white mt-0 mx-[10%] rounded-md z-50 shadow-2xl h-[80%] w-[70%] flex flex-col py-[2%] px-[4%] gap-[3%]' >
             <div className='flex flex-row justify-between'>
                <h2 className='font-semibold '><span className='border-b-2 border-[#FF6767]'> </span>Edit <span>Task Status</span></h2>
                <p className='underline text-sm font-semibold cursor-pointer' onClick={()=>setEditstatus(!editstatus)}>Go Back</p>
             </div>
    
             <div className='h-full w-full border border-zinc-400 py-[2%] px-[3%] flex flex-col gap-1'>
            
            <div className='flex flex-col gap-2'>
                <label htmlFor="" className='text-sm font-semibold'>Task Status Name</label>
                <input type="text" className='py-1 px-2 border rounded-md w-[70%] outline-none' />
            </div>
             
             <div className='mt-4 flex flex-row gap-3 '>
                <button className='px-[6%] py-[1%] bg-[#F24E1E] text-sm text-white  rounded-md'>Update</button>
                <button className='px-[6%] py-[1%] bg-[#F24E1E] text-sm text-white  rounded-md cursor-pointer' onClick={()=>setEditstatus(!editstatus)}>Cancel</button>
             </div>
    
             </div>
    
             
               
             
          
           </div>
        </div>
  )
}

export default EditTaskStatus
