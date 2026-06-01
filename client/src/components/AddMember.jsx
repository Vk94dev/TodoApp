import React, { useContext } from 'react'
import { FaAngleDown } from "react-icons/fa";
import Avatar from "../utils/images/avatar.avif"
import { contextProvider } from '../context/refContext';

const AddMember = () => {

const {invite,setInvite}=useContext(contextProvider);


  return (
    <div className='inset-0 flex top-0 left-0 justify-center items-center fixed z-50 '>
            <div className='inset-0 absolute bg-[#252525]/80 ' onClick={(e)=>setTask(!task)}></div>
           
           <div className=' relative bg-white mt-0 mx-[10%] rounded-md z-50 shadow-2xl h-[70%] w-[50%] flex flex-col py-[1%] px-[2%] gap-[3%]' >
             <div className='flex flex-row justify-between'>
                <h2 className='font-semibold '><span className='border-b-2 border-[#FF6767]'>Send an inv</span><span>ite to a new member</span></h2>
                <p className='underline text-sm font-semibold cursor-pointer' onClick={()=>setInvite(!invite)}>Go Back</p>
             </div>
    
           <div className='h-full w-full border border-zinc-400 py-[2%] px-[3%] flex flex-col gap-1 overflow-y-auto custom-scroll'>
            
            <div className='flex flex-col gap-1 '>
                <label htmlFor="" className='text-sm font-semibold'>Email</label>
                <div className='flex flex-row gap-1'>
                   <input type="text" className='py-[1%] px-2 border rounded-md w-[77%] outline-none text-zinc-400  text-sm' />
                   <button className='px-[4%] py-[1%] bg-[#F24E1E] text-white text-sm  rounded-md'>Send Invite</button>
                </div>  
            </div>
             
             <div className='flex flex-col mt-2 gap-1   '>
                <h3 className='font-semibold  text-sm  '>Members</h3>
               
               <div className='flex flex-col gap-1 overflow-y-auto custom-scroll'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-2'>
                       <div className='h-9 w-9 rounded-[100%] border'>
                        <img src={Avatar} className='rounded-[100%] '  />
                       </div>
                       <div className='pt-0.5'>
                        <p className='text-xs font-semibold'>Sohan kumar</p>
                        <p className='text-[10px] '>sohankumar123@gmail.com</p>
                       </div>
                    </div>
                   
                   <button className='flex flex-row  py-1 gap-2'>
                    <p className='text-sm'>Can edit </p>
                    <FaAngleDown className='pt-1 text-xl' />
                   </button>
                </div>

                 <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-2'>
                       <div className='h-9 w-9 rounded-[100%] border'>
                         <img src={Avatar} className='rounded-[100%] '  />
                       </div>
                       <div className='pt-0.5'>
                        <p className='text-xs font-semibold'>Sohan kumar</p>
                        <p className='text-[10px] '>sohankumar123@gmail.com</p>
                       </div>
                    </div>
                   
                   <button className='flex flex-row  py-1 gap-2'>
                    <p className='text-sm'>Can edit </p>
                    <FaAngleDown className='pt-1 text-xl' />
                   </button>
                </div>

                 <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-2'>
                       <div className='h-9 w-9 rounded-[100%] border'>
                         <img src={Avatar} className='rounded-[100%] '  />
                       </div>
                       <div className='pt-0.5'>
                        <p className='text-xs font-semibold'>Sohan kumar</p>
                        <p className='text-[10px] '>sohankumar123@gmail.com</p>
                       </div>
                    </div>
                   
                   <button className='flex flex-row  py-1 gap-2'>
                    <p className='text-sm'>Can edit </p>
                    <FaAngleDown className='pt-1 text-xl' />
                   </button>
                </div>

                 <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-2'>
                       <div className='h-9 w-9 rounded-[100%] border'>
                         <img src={Avatar} className='rounded-[100%] '  />
                       </div>
                       <div className='pt-0.5'>
                        <p className='text-xs font-semibold'>Sohan kumar</p>
                        <p className='text-[10px] '>sohankumar123@gmail.com</p>
                       </div>
                    </div>
                   
                   <button className='flex flex-row  py-1 gap-2'>
                    <p className='text-sm'>Can edit </p>
                    <FaAngleDown className='pt-1 text-xl' />
                   </button>
                </div>

                 
                  

                </div>

             </div>


              <div className='flex flex-col gap-1 mt-[2%] '>
                <label htmlFor="" className='text-sm font-semibold'>Project Link</label>
                <div className='flex flex-row gap-1'>
                   <input type="text" className='py-[1%] px-2 border rounded-md w-[77%] outline-none text-zinc-400  text-xs' placeholder='https://ShareLinkhereandthere/343yy33' />
                   <button className='px-[5%] py-[1%] bg-[#F24E1E] text-white text-sm  rounded-md'>Copy Link</button>
                </div>  
            </div>
             
    
             </div>
    
           </div>
        </div>
  )
}

export default AddMember
