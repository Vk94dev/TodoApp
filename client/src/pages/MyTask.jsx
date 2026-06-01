import React from 'react'
import Navbar from '../components/Navbar'
import MainPart from '../components/MainPart'
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import Dog from "../utils/images/Dog.png"

import TaskDetails from "../components/TaskDetails"
import Tasks from "../components/Tasks.jsx"

const MyTask = () => {
  return (
    
       
        <div className='w-full h-full   px-[30%] pt-[2.6%] bg-[#fbfbfb] flex flex-col justify-between'>
              <div className='h-full w-[165%] bg-[#fbfbfb]  mb-3 flex flex-row gap-[1%] ' > 
                    <div className='h-full w-[50%] flex flex-col border border-zinc-300  rounded-xl shadow-md py-[1%] px-[3%] overflow-y-auto custom-scroll '>
                       
                       <div className='text-md font-semibold sticky z-10 bg-white py-2 flex flex-row gap-1'>
                         <span className='border-b-2 pb-0.5 border-[#FF6767]'>My</span>
                         <p>Tasks</p>
                       </div>

                      <div className=' flex-1 overflow-y-auto custom-scroll   '>                          
                                                 {/* <div className='min-h-28 w-full flex flex-row gap-2 border py-0.5 px-3 rounded-xl border-zinc-300 mt-1 pb-2 bg-zinc-200'>
                     
                                                 <div className=' flex flex-col w-[75%] '>
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
                                                     <button className=' flex  ml-auto'><IoEllipsisHorizontalOutline /></button>
                                                       <img src={Dog} className='mt-[2%] pr-[15%]' />
                                                   </div>
                                                 </div>*/}
                             <Tasks />
                             <Tasks />
                             <Tasks />
                             <Tasks />
                             <Tasks />
                             <Tasks />
                     </div>
                    </div>


                    <div className='h-full w-[50%] border border-zinc-300  rounded-xl shadow-md px-[2%] pt-[2%] overflow-y-auto custom-scroll'>
                     <TaskDetails />

                    </div>
            
                </div>

        </div>
  )
}

export default MyTask
