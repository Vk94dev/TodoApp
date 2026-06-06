import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateCategories = () => {

    const navigate = useNavigate();
const [category,setCategory] = useState("");

const handleCreate = (e)=>{
    e.preventDefault();
    if(category===""){
        alert("please fill the create category");
    }
    else{
         alert("category is created");
     setCategory("");
    }
}


  return (
    <div className='w-full h-full   px-[30%] pt-[2.6%] bg-[#fbfbfb] flex flex-col justify-between'>
                 
                  <div className='h-full w-[165%] bg-[#fbfbfb]  mb-4 flex flex-col gap-[1%] border border-zinc-300 shadow-md rounded-xl px-[4%] py-[2%] ' > 
                     
                     <div className='flex flex-row justify-between' >
                      <h1 className='text-xl font-semibold'><span className='border-b-2 border-[#FF6767]'>Crea</span><span>te Categories</span></h1>
                      <button className=' text-sm font-semibold underline ' onClick={()=>navigate("/category")}>Go Back</button>
                     </div>

            <div className='flex flex-col gap-2 mt-3'>
                <label htmlFor="" className='text-sm font-semibold'>Category Name</label>
                <input type="text" className='py-1 px-2 border rounded-md w-[70%] outline-none' value={category} onChange={(e)=>setCategory(e.target.value)} />
            </div>
             
             <div className='mt-4 flex flex-row gap-3 '>
                <button className='px-[6%] py-[1%] bg-[#F24E1E] text-sm text-white  rounded-md cursor-pointer' onClick={handleCreate}>Create</button>
                <button className='px-[6%] py-[1%] bg-[#F24E1E] text-sm text-white  rounded-md cursor-pointer' onClick={()=>navigate("/category")}>Cancel</button>
             </div>
             </div>
            </div>
  )
}

export default CreateCategories
