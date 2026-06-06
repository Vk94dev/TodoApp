import React, { useContext } from 'react'
import Avatar from "../utils/images/avatar.avif"
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { contextProvider } from '../context/RefContext';
import AddTaskPriority from '../components/AddTaskPriority';
import EditTaskPriority from '../components/EditTaskPriority';
import EditTaskStatus from '../components/EditTaskStatus';




const TaskCategories = () => {
 
 const navigate = useNavigate();
 const {addpriority,setAddpriority,editpriority,setEditpriority,editstatus,setEditstatus} = useContext(contextProvider);


    return (
     <div className='w-full h-full   px-[30%] pt-[2.6%] bg-[#fbfbfb] flex flex-col justify-between'>
                 
                  <div className='h-full w-[165%] bg-[#fbfbfb]  mb-4 flex flex-col gap-[1%] border border-zinc-300 shadow-md rounded-xl  ' > 
                   
                   
                   <div className=' h-[60%] w-full border-b border-zinc-400 px-[4%] py-[2%] flex flex-col gap-[1%]'>
                     
                     <div className='flex flex-row justify-between' >
                      <h1 className='text-xl font-semibold'><span className='border-b-2 border-[#FF6767]'>Task</span><span>Categories</span></h1>
                      <button className=' text-sm font-semibold underline cursor-pointer ' onClick={()=>navigate("/")}>Go Back</button>
                     </div>

                     <div>
                         <button className='text-white text-xs  rounded-md px-[3%] py-[1%] mt-2 bg-[#F24E1E]' onClick={()=>navigate("/addcategory")}>Add Category</button>
                     </div>

                     <div className='mt-[2%] flex flex-col gap-[5%] h-full' >
                        <div className='flex flex-row justify-between items-center '>
                            <h3 className='text-xs font-semibold'><span className='border-b-2 border-[#F24E1E]'>Task S</span><span>tatus</span></h3>
                            <button className='flex flex-row gap-1'><FaPlus  className=' text-xs pt-1 text-[#F24E1E] '/> <span className='text-xs font-semibold  text-zinc-400'>Add Task Status</span></button>
                        </div>

<div className='border border-zinc-400  overflow-hidden shadow-md rounded-2xl pb-2'>

<table className="border-collapse rounded-2xl  w-full">
  <thead>
    <tr className='text-xs font-semibold'>
     <th className='w-[5%] border-b border-zinc-300 text-center'>SN</th>
      <th className="border border-gray-300 p-2">Task Status</th>
      <th className="border border-gray-300 p-2">Action</th>
    </tr>
  </thead>

  <tbody className='text-sm text-center leading-light'>
    <tr >
        <td className=' text-center'>1</td>
      <td className="border-l border-gray-300 p-1">completed</td>
      <td className="border-l border-gray-300 p-1">
        <div className='flex flex-row justify-center  gap-3'>
            <button className='bg-[#F24E1E] text-white px-[3%] rounded-md py-[0.5%] flex flex-row cursor-pointer' onClick={()=>setEditstatus(!editstatus)} >
             <RiEditBoxFill className='pt-1 text-xl'/>
             <p>Edit</p>
            </button>
            {editstatus && (<EditTaskStatus />)}


            <button  className='bg-[#F24E1E] text-white px-[2%] rounded-md py-[0.5%] flex flex-row cursor-pointer' onClick={()=>alert("task status is deleted")} >
                <MdDelete className='pt-1 text-xl' />
                <p>Delete</p>
            </button>
        </div>
      </td>
    </tr>

    <tr>
        <td className='text-center'>2</td>
      <td className="border-l border-gray-300 p-1">In Progress</td>
      <td className="border-l border-gray-300 p-1">
        <div className='flex flex-row justify-center gap-3'>
            <button className='bg-[#F24E1E] text-white px-[3%] rounded-md py-[0.5%] flex flex-row cursor-pointer' onClick={()=>setEditstatus(!editstatus)} >
                <RiEditBoxFill className='pt-1 text-xl' />
                <p>Edit</p>
            </button>
            <button className='bg-[#F24E1E] text-white px-[2%] rounded-md py-[0.5%] flex flex-row cursor-pointer' onClick={()=>alert("task status is deleted")}>
                <MdDelete className='pt-1 text-xl' />
                <p>Delete</p>
            </button>
        </div>
      </td>
    </tr>
    <tr>
        <td className='text-center'>3</td>
      <td className="border-l border-gray-300 p-1">Not Started</td>
      <td className="border-l border-gray-300 p-1">
        <div className='flex flex-row justify-center gap-3'>
            <button className='bg-[#F24E1E] text-white px-[3%] rounded-md py-[0.5%] flex flex-row cursor-pointer' onClick={()=>setEditstatus(!editstatus)} >
              <RiEditBoxFill className='pt-1 text-xl'/>
              <p>Edit</p>
            </button>
            <button className=' px-[2%] bg-[#F24E1E] text-white rounded-md py-[0.5%] flex flex-row cursor-pointer' onClick={()=>alert("task status is deleted")}>
                <MdDelete className='pt-1 text-xl' />
                <p>Delete</p>
            </button>
        </div>
      </td>
    </tr>
  </tbody>
</table>

</div>
 

                     </div>
                </div>
    
                    

            <div className='px-[4%]'>
                        <div className='mt-[2%] flex flex-col gap-[5%] h-full' >
                        <div className='flex flex-row justify-between items-center '>
                            <h3 className='text-sm font-semibold'><span className='border-b-2 border-[#F24E1E]'>Task P</span><span>riority</span></h3>
                            <button className='flex flex-row gap-1 cursor-pointer' onClick={()=>setAddpriority(!addpriority)}><FaPlus  className=' text-xs pt-1 text-[#F24E1E] '/> <span className='text-xs font-semibold  text-zinc-400'>Add New Priority</span></button>
                            {addpriority && (<AddTaskPriority />)}
                        </div>

<div className='border border-zinc-400  overflow-hidden shadow-md rounded-2xl pb-1'>

<table className="border-collapse rounded-2xl  w-full">
  <thead>
    <tr className='text-xs font-semibold'>
     <th className='w-[5%] border-b border-zinc-300 text-center'>SN</th>
      <th className="border border-gray-300 p-2">Task Priority</th>
      <th className="border border-gray-300 p-2">Action</th>
    </tr>
  </thead>

  <tbody className='text-sm text-center leading-light'>
    <tr >
        <td className=' text-center'>1</td>
      <td className="border-l border-gray-300 p-1">Extreme</td>
      <td className="border-l border-gray-300 p-1">
        <div className='flex flex-row justify-center  gap-3'>
            <button className='bg-[#F24E1E] text-white px-[3%] rounded-md py-[0.5%] flex flex-row cursor-pointer ' onClick={()=>setEditpriority(!editpriority)} >
             <RiEditBoxFill className='pt-1 text-xl'/>
             <p>Edit</p>
            </button>
            {editpriority && (<EditTaskPriority />)}
            <button className='bg-[#F24E1E] text-white px-[2%] rounded-md py-[0.5%] flex flex-row cursor-pointer' onClick={()=>alert("task priority is deleted")}>
                <MdDelete className='pt-1 text-xl' />
                <p>Delete</p>
            </button>
        </div>
      </td>
    </tr>

    <tr>
        <td className='text-center'>2</td>
      <td className="border-l border-gray-300 p-1">Moderate</td>
      <td className="border-l border-gray-300 p-1">
        <div className='flex flex-row justify-center gap-3'>
            <button className='bg-[#F24E1E] text-white px-[3%] rounded-md py-[0.5%] flex flex-row cursor-pointer ' onClick={()=>setEditpriority(!editpriority)} >
                <RiEditBoxFill className='pt-1 text-xl' />
                <p>Edit</p>
            </button>
            <button className='bg-[#F24E1E] text-white px-[2%] rounded-md py-[0.5%] flex flex-row cursor-pointer' onClick={()=>alert("task priority is deleted")}>
                <MdDelete className='pt-1 text-xl' />
                <p>Delete</p>
            </button>
        </div>
      </td>
    </tr>
    <tr>
        <td className='text-center'>3</td>
      <td className="border-l border-gray-300 p-1 ">Low</td>
      <td className="border-l border-gray-300 p-1">
        <div className='flex flex-row justify-center gap-3'>
            <button className='bg-[#F24E1E] text-white px-[3%] rounded-md py-[0.5%] flex flex-row cursor-pointer ' onClick={()=>setEditpriority(!editpriority)} >
              <RiEditBoxFill className='pt-1 text-xl'/>
              <p>Edit</p>
            </button>
            <button className=' px-[2%] bg-[#F24E1E] text-white rounded-md py-[0.5%] flex flex-row cursor-pointer' onClick={()=>alert("task priority is deleted")}>
                <MdDelete className='pt-1 text-xl' />
                <p>Delete</p>
            </button>
        </div>
      </td>
    </tr>
  </tbody>
</table>

</div>
 

</div>
</div>
    
                    
 </div>
 </div>
    
  )
}

export default TaskCategories
