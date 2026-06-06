import React, { useContext } from 'react'
import { FaUserPlus } from "react-icons/fa6";
import { contextProvider } from '../context/refContext';
import  MemberImage from "../utils/images/avatar.avif"





const DashHeader = () => {

const {invite,setInvite} = useContext(contextProvider);

const memberPhoto = ()=> { return (<div className='h-10 w-10 rounded-md '><img className='rounded-md ' src={MemberImage} /></div>)
}


  return (
   <div className='flex flex-row justify-between w-full items-center mb-3'>
                   <h2 className='text-2xl font-semibold'>Welcome Back , Sunder   👋  </h2>
                   <div className='justify-end  pl-4 rounded-md  flex flex-row gap-1  '>
                       <div className='flex flex-row gap-1 '>
                           {/* <div className='h-10 w-10 rounded-md '><img className='rounded-md ' src={MemberImage} /></div>
                           <div className='h-10 w-10 rounded-md '><img className='rounded-md ' src={MemberImage} /></div>
                           <div className='h-10 w-10 rounded-md '></div>
                           <div className='h-10 w-10 rounded-md '></div>
                           <div className='h-10 w-10 rounded-md '></div> */}

                           {memberPhoto()}
                           {memberPhoto()}
                           {memberPhoto()}
                           {memberPhoto()}
                           {memberPhoto()}
                          
                       </div>
                       <div className='border border-[#FF6767] text-[#FF6767] rounded-md flex flex-row px-4 pt-2 cursor-pointer' onClick={()=>setInvite(!invite)}>
                           <FaUserPlus className='pt-2 text-xl' />Invite
                       </div>
                   </div>
                  </div>
  )
}

export default DashHeader
