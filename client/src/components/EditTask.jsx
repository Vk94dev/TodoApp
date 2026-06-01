import React, { useContext, useEffect } from 'react'
import UploadImage from "../utils/images/uploadImage.png"
import { contextProvider } from '../context/refContext'

const EditTask = () => {

   const{showedit,setShowedit} = useContext(contextProvider);
useEffect(()=>{
console.log(showedit);
},[showedit])
   

  return (
    <div className='inset-0 flex top-0 left-0 justify-center items-center fixed z-50 '>
        <div className='inset-0 absolute bg-[#252525]/80 ' onClick={(e)=>setShowedit(!showedit)}></div>
       
       <div className=' relative bg-white mt-0 mx-[10%] rounded-md z-50 shadow-2xl h-[80%] w-[70%] flex flex-col py-[2%] px-[4%] gap-[3%]' >
         <div className='flex flex-row justify-between'>
            <h2 className=' '><span className='border-b-2 border-[#FF6767]'>Edit T</span><span>ask</span></h2>
            <p className='underline text-sm font-semibold cursor-pointer' onClick={()=>setShowedit(!showedit)}>Go Back</p>
         </div>

         <div className='h-full w-full border border-zinc-400 py-2 px-4 flex flex-col gap-1'>
            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold' htmlFor="">Title</label>
                <input type="text" className='w-[70%] border rounded-sm py-0.5 outline-none px-2' />
            </div>

            <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold' htmlFor="">Date</label>
                <input type="date"  className='w-[70%] border rounded-sm py-0.5 outline-none px-2' />
            </div>

            <div className='flex flex-col gap-[2%]'>
                <label className='text-sm font-semibold' htmlFor="">Priority</label>
                <div className='flex flex-row gap-[5%]'>
                    <label className='flex flex-row gap-[5%]'> 
                        <span className='text-[#F21E1E]'>●</span>
                        <span className='text-zinc-400 text-sm pt-0.5'>Extreme</span>
                        <input type="radio" name='priority' className='mt-1'   />
                    </label>

                    <label className='flex flex-row gap-[5%]'> 
                        <span className='text-[#3ABEFF]'>●</span>
                        <span className='text-zinc-400 text-sm pt-0.5'>Moderate</span>
                        <input type="radio" name='priority' className='mt-1'  />
                    </label>

                    <label className='flex flex-row gap-[5%]'> 
                        <span className='text-[#05A301]'>●</span>
                        <span className='text-zinc-400 text-sm pt-0.5'>Low</span>
                        <input type="radio" name='priority' className='mt-1'  />
                    </label>
                </div>
            </div>

  <div  className='flex flex-row'>
    <div className='flex flex-col gap-1 w-full'>
                <label className='text-sm font-semibold' htmlFor="">Task Description</label>
                <textarea type="text"  placeholder='Start Writing here...' className='w-[87%] border rounded-sm py-1 outline-none px-3 resize-none h-30 text-sm' />
            </div>

    <div className='flex flex-col gap-1 w-[25%] '>
         <label className='text-sm font-semibold' htmlFor="">Upload Image</label>
       <div className='h-full w-full border p-1  rounded-md flex flex-col justify-center items-center'>
        <img  src={UploadImage} className='h-[40%] w-[40%]' />
        <p className='text-xs text-zinc-400'>Drag & Drop files here</p>
        <p className='text-xs text-zinc-400'>or</p>
        <button className='border px-3 rounded-sm py-1 text-xs border-zinc-400 text-zinc-400 '>Browse</button>
       </div>
    </div>

  </div>
         

         </div>

         <div>
               <button className=' ml-[2.5%] py-1.5 px-6 bg-[#F24E1E] rounded-md text-white text-sm'>Done</button>
         </div>
           
         
      
       </div>
    </div>
  )
}

export default EditTask
