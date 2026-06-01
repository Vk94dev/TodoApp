import React from 'react'
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import Dog from "../utils/images/Dog.png"
import { MdDelete } from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";

function TaskDetails() {
  return (
    <div >
              <div className='flex flex-row '>
                       <img src={Dog} className='h-30 w-30 ' />
                       <div className='flex flex-col justify-end items-start pl-[5%] pt-[10%]  h-30 gap-1'>
                        <p className='font-semibold'>Walk the dog</p>
                        <p className='text-sm font-semibold flex flex-row gap-1 '><span>Priority:</span><span className='text-[#FF6767]'>Extreme</span></p>
                        <p className='text-sm font-semibold flex flex-row gap-1 mb-1 '><span>Status:</span><span className='text-[#FF6767]'>Not Started</span></p>
                        <p className='text-xs font-semibold flex flex-row gap-1 text-zinc-400 '><span>Created on:</span><span >26/06/2026</span></p>
                       </div>
                    </div>
                     
                    <div className='flex flex-col gap-1 py-4' >
                        <div className='flex flex-row text-sm gap-1 '>
                            <h1 className='text-zinc-700 font-semibold'>Task Title:</h1>
                            <p className='text-zinc-500 '>Lorem, ipsum dolor.</p>
                        </div>
                         <div className=' text-sm gap-1 '>
                            <span className='text-zinc-700 font-semibold'>Objective:</span>
                            <span className='text-zinc-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, pariatur!</span>
                        </div>
                        <div className=' text-sm gap-1 '>
                            <span className='text-zinc-700 font-semibold'>Task Description:</span>
                            <span className='text-zinc-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam similique natus perspiciatis iure repudiandae libero adipisci facere, laborum distinctio eos facilis consequatur explicabo labore eligendi.</span>
                        </div>

                         <div className=' text-sm gap-1 '>
                            <h1 className='text-zinc-700 font-semibold'>Additional Notes:</h1>
                            <div className='pl-5'>
                               <li className='text-zinc-500 '>Lorem ipsum dolor sit amet.</li>
                               <li className='text-zinc-500 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt repudiandae beatae velit maxime vel ab?</li>
                               <li className='text-zinc-500 '>Lorem ipsum dolor sit amet.</li>
                            </div>
                           
                        </div>
                          <div className=' text-sm gap-1 '>
                            <span className='text-zinc-700 font-semibold'>Deadline of Submission:</span>
                            {/* <span className='text-zinc-500 '>End of Day</span> */}
                            <span className='text-zinc-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam architecto quod vero asperiores suscipit voluptatum ducimus ipsum laboriosam dolorum nemo? Vel natus corporis saepe iste explicabo molestias soluta! Officiis incidunt assumenda ratione facere aliquid optio numquam illo quae culpa hic corporis dolorem est inventore et quos, cum architecto debitis dolores ad! Temporibus, consectetur. Non debitis esse commodi maiores sint, laborum vero voluptates officia soluta delectus. Ipsam, quasi iure totam saepe distinctio voluptates quibusdam officiis nobis facilis vero! Totam cumque fugiat, debitis enim dicta perferendis maiores odit quae sed, voluptate rem a mollitia optio ad magnam qui neque corrupti, asperiores laborum!</span>
                        </div>
                   </div>

                  <div className=' flex flex-row justify-end items-end right-0 bottom-0 sticky z-10 bg-[#fbfbfb] pb-2 pt-1 gap-3 '>
                    <button className='border rounded-md p-1 bg-[#FF6767] text-white'> <MdDelete className='text-2xl' /></button>
                    <button  className='border rounded-md p-1 bg-[#FF6767] text-white'><RiEditBoxFill className='text-2xl'  /></button>
                  </div>


    </div>
  )
}

export default TaskDetails
