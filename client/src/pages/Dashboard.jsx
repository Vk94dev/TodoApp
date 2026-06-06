import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { FaUserPlus } from "react-icons/fa6";
import TaskStatus from "../utils/images/Task_status.png"
import TaskStats from '../components/TaskStats';
import { BiTask } from "react-icons/bi";
import Dog from "../utils/images/Dog.png"
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import TodoIcon from "../utils/images/todo.png"
import { FaPlus } from "react-icons/fa";

import MainPart from "../components/MainPart"
import Tasks from "../components/Tasks.jsx"
import CompletedTask from '../components/CompletedTask.jsx';
import DashHeader from '../components/DashHeader.jsx';

import AddTask from '../components/AddTask.jsx';
import { contextProvider } from '../context/RefContext.jsx';
import AddMember from '../components/AddMember.jsx';


//bg-[#eceaea] 

const Dashboard = () => {

const {addtask,setAddtask,invite,setInvite} = useContext(contextProvider);


  return (
    // <div className='bg-[#fbfbfb] h-screen'>
    //   <Navbar />
    //   <div className='h-[90%] w-screen flex flex-row '>
      
    //    <MainPart />

        <div className=' w-full h-full   pl-[30%] pr-[4%] pt-[2.2%] bg-[#fbfbfb] flex flex-col justify-between'>
             {/* <div className='flex flex-row justify-between w-[165%] items-center mb-3'>
                <h2 className='text-2xl font-semibold'>Welcome Back , Sunder   👋  </h2>
                <div className='justify-end  px-4 rounded-md  flex flex-row gap-1  '>
                    <div className='flex flex-row gap-1 '>
                        <div className='h-10 w-10 rounded-md border'></div>
                        <div className='h-10 w-10 rounded-md border'></div>
                        <div className='h-10 w-10 rounded-md border'></div>
                        <div className='h-10 w-10 rounded-md border'></div>
                        <div className='h-10 w-10 rounded-md border'></div>
                       
                    </div>
                    <div className='border border-[#FF6767] text-[#FF6767] rounded-md flex flex-row px-4 pt-2'>
                        <FaUserPlus className='pt-2 text-xl' />Invite
                    </div>
                </div>
               </div> */}

               <DashHeader />


               {invite && (<AddMember />)}

             <div className='h-[87%] w-full bg-[#fbfbfb] border-zinc-300 border mb-3 mr-[2%] shadow-md' > 

                <div className='my-[1%] mx-[1.8%] h-[96%] w-[96%] rounded-md  flex flex-row gap-4  '>
                 
                 <div className='h-full w-[52%]  bg-white rounded-xl shadow-md'>
                   
                    <div className='h-[66%] w-full border-b-2 border-zinc-300 py-2 pl-2 pr-[10%] flex flex-col overflow-y-auto custom-scroll'>
                       
                       <div className='flex flex-col bg-white sticky z-10 '>
                       <div className='flex flex-row justify-between items-center'>
                         <div className='flex flex-row gap-2'>
                           <img  src={TodoIcon}/>
                           <p className='text-[#FF6767] font-semibold'>To-Do</p>
                         </div>
                        <button className='flex flex-row gap-2 rounded-md  cursor-pointer p-1 ' onClick={()=>setAddtask(!addtask)} ><FaPlus className=' text-sm font-light text-[#FF6767]' /><span className='text-zinc-400 text-xs'>Add Task</span></button>
                        {addtask && (<AddTask />)}
                       </div>
                       <div className='flex flex-row gap-2 text-xs text-semibold'>
                        <span>20 June </span>
                        <span className='text-zinc-400 '>.Today</span>
                       </div>
                       </div>


                       <div className=' flex-1 overflow-y-auto custom-scroll   '>
                           
                            {/* <div className='min-h-28 w-full flex flex-row gap-2 border py-0.5 px-3 rounded-xl border-zinc-300 mt-1'>

                            <div className=' flex flex-col w-[75%] '>
                            <div className='flex flex-row gap-[6%] '><span className='text-green-500  text-xl '>O</span><h2 className='text-md font-semibold'>Walk the dog</h2></div>
                             <div className='text-sm text-zinc-500 leading-tight  pl-[13%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                <div className=' flex flex-row gap-[15%] text-[9px] mt-auto pl-[13%] whitespace-nowrap'>
                                    <div className='flex flex-row gap-2'>
                                        <div className='flex flex-row' ><span>priority:</span><span className='text-green-500 ml-1'>Moderate</span></div>
                                        <div className='flex flex-row  whitespace-nowrap'><span>Status:</span><span className='text-green-500 ml-1'>Not Started</span></div>
                                    </div>
                                    
                                    <div className='text-zinc-400 flex flex-row gap-1' ><span>Created on:</span><span >20/06/2026</span></div>
                                </div>
                        
                             </div>
                
                              
                              <div className='h-full w-[25%] align-middle'>
                                <button className=' flex  ml-auto'><IoEllipsisHorizontalOutline /></button>
                                  <img src={Dog} className='mt-[2%] pr-[15%]' />
                              </div>
                            </div>*/}

                            <Tasks  />
                            <Tasks />
                            <Tasks />

                       </div>
                    </div>


                    <div className=' w-full h-[34%] flex flex-col overflow-y-auto custom-scroll pr-[10%] py-3 pl-2 '>
                        <div className='overflow-y-auto custom-scroll flex-1 w-full '>
                           {/* <div className='min-h-28 w-full flex flex-row gap-2 border py-0.5 px-3 rounded-xl border-zinc-300 mt-1'>

                            <div className=' flex flex-col w-[75%] '>
                            <div className='flex flex-row gap-[6%] '><span className='text-green-500  text-xl '>O</span><h2 className='text-md font-semibold'>Walk the dog</h2></div>
                             <div className='text-sm text-zinc-500 leading-tight  pl-[13%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                <div className=' flex flex-row gap-[15%] text-[9px] mt-auto pl-[13%] whitespace-nowrap'>
                                    <div className='flex flex-row gap-2'>
                                        <div className='flex flex-row' ><span>priority:</span><span className='text-green-500 ml-1'>Moderate</span></div>
                                        <div className='flex flex-row  whitespace-nowrap'><span>Status:</span><span className='text-green-500 ml-1'>Not Started</span></div>
                                    </div>
                                    
                                    <div className='text-zinc-400 flex flex-row gap-1' ><span>Created on:</span><span >20/06/2026</span></div>
                                </div>
                        
                             </div>
                
                              
                              <div className='h-full w-[25%] align-middle'>
                                <button className=' flex  ml-auto'><IoEllipsisHorizontalOutline /></button>
                                  <img src={Dog} className='mt-[2%] pr-[15%]' />
                              </div>
                            </div> */}

                            <Tasks />
                            <Tasks />
                            <Tasks />

                        </div>
                        
                    </div>
                 </div>
                  
                 <div className='h-full w-[48%] rounded-md  flex flex-col gap-2'>
                    <div className='h-[42%] w-full shadow-md  rounded-xl bg-white flex flex-col px-5 py-3' >
                        <div className='flex flex-row gap-3 '>
                           <img src={TaskStatus} className='h-6 w-5 ' />
                            <p className='text-[#FF6767]  font-semibold text-sm'>Task Status</p>
                        </div>
                        <TaskStats />
                    </div>

                    <div className='h-[58%] w-full shadow-md  rounded-xl bg-white px-5  overflow-y-auto custom-scroll '>
                        <div className='flex flex-row gap-2 sticky top-0 z-1 bg-white pt-3 pb-2'><BiTask className='text-2xl text-zinc-300'  /><p className='text-[#F24E1E] text-sm font-semibold'> Completed Task</p></div>
                        <div className='px-[5%] flex-1 flex flex-col overflow-y-auto custom-scroll gap-1'>
                           
                            {/* <div className='min-h-25 w-full flex flex-row gap-2 border py-0.5 px-3 rounded-xl border-zinc-300'>
                            <div className='h-full w-[75%]'>
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
                            </div>*/}

                            <CompletedTask />
                            <CompletedTask />
                            <CompletedTask />

                        </div>
                    </div>
                 </div>

                </div>

             </div>

        </div>
    //   </div>
    // </div>
  )
}

export default Dashboard
