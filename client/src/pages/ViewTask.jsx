import React from 'react'
import Avatar from "../utils/images/avatar.avif"
import { MdDelete } from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";
import { BsExclamation } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';



const ViewTask = () => {

    const navigate = useNavigate();
  return (
     <div className='w-full h-full   px-[30%] pt-[2.6%] bg-[#fbfbfb] flex flex-col justify-between'>
                 
            <div className='h-full w-[165%] bg-[#fbfbfb]  mb-4 flex flex-col gap-1 border border-zinc-300 shadow-md rounded-xl px-[4%] py-[2%] justify-between' > 
                <div className='flex flex-col gap-[4%] overflow-y-auto custom-scroll'>
                     
                     <div className='  flex flex-row  justify-between ' >
                     
                      <div className='text-xl font-semibold flex flex-row gap-[3%] w-full '>
                        <div className='h-30 w-30 rounded-md shrink-0'>
                            <img src={Avatar} className='h-30 w-30 rounded-md' />
                        </div>
                        <div className='pt-2 flex flex-col gap-[4%] '>
                            <h3 className='text-md  '>dkfkdhdfkdjkfd fdhfriewufuyf kkjfjkdkf kajdfkdjhfja fdjfjdj   </h3>
                            <p className='text-sm font-semibold'><span>Priority: </span> <span className='text-blue-400'>Modearte</span></p>
                            <p className='text-sm font-semibold '><span>Status:</span> <span className='text-[#FF6767]'>Not Started</span></p>
                            <p className='text-xs font-semibold text-zinc-400'> <span>Created on:</span> <span>26/06/2026</span></p>
                        </div>
                      </div>
                      <div className=' right-0 top-0 '>
                        <button className=' text-sm font-semibold underline top-0 right-0 pb-[18%]  whitespace-nowrap' onClick={()=>navigate("/")}>Go Back</button>
                      </div>
                     </div>
    
                     <div className='text-sm text-zinc-400  overflow-y-auto custom-scroll'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima alias voluptates possimus voluptatibus exercitationem vitae nemo quis excepturi! Amet reprehenderit vitae similique temporibus ipsam adipisci, aliquam laborum velit tempora? In sint unde vero laborum exercitationem voluptatum, iusto voluptas quas laboriosam voluptatibus itaque. Veniam, veritatis. Ut maiores optio doloremque deleniti aut.
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis eveniet consequuntur excepturi voluptate voluptas vitae dignissimos deleniti id repudiandae veritatis. Dolor placeat eveniet nam minima ipsum hic voluptate fugiat, rerum molestias vitae quo saepe voluptates asperiores, sit nihil praesentium illo temporibus, expedita fuga possimus beatae quod. Quis eos maxime, culpa quidem expedita minus corrupti, consequatur quaerat autem vel numquam quisquam id natus facilis accusamus voluptate, magni dolorum dolore neque sint. Exercitationem minima quia quo omnis earum soluta ea, ad, maiores praesentium harum, dolore laborum obcaecati! Et recusandae omnis inventore ea delectus explicabo odio exercitationem. Aspernatur rerum atque magnam tempore iusto ea illo commodi. Illo nesciunt quis fugiat sunt praesentium possimus placeat vitae officiis vel quos? Incidunt tempore unde impedit dolorem nostrum sit reiciendis enim natus esse animi sunt omnis alias maiores mollitia minima ipsam harum ea, facilis recusandae, consectetur itaque expedita fugiat assumenda commodi. Animi, cum? Magni, voluptatem cumque dolorum quaerat officiis placeat reprehenderit? Quia hic ducimus nulla vel nostrum nobis error consequuntur tempora labore, qui deserunt repellat sit vitae omnis odio suscipit minus fuga reprehenderit earum esse. Nisi distinctio sunt excepturi illo ea ad laudantium autem? Fugiat ducimus dignissimos repellendus necessitatibus iste deserunt quis modi sint ullam eos natus recusandae consequatur harum perferendis dolorum, quisquam cumque magni nostrum iusto? Tempora ducimus labore amet laboriosam, sint architecto iusto consectetur veniam quis, quam adipisci delectus expedita, natus debitis doloremque! Ducimus at praesentium officia? Esse nobis repudiandae doloribus ducimus molestiae eligendi ex in natus. Repudiandae molestiae iusto quidem dolore asperiores accusamus. Accusantium numquam dolore esse architecto aspernatur neque soluta, cum illo eos minus laborum consequuntur excepturi rem iusto blanditiis quas corporis. Recusandae odio qui quisquam consectetur obcaecati exercitationem natus vero doloremque tempore, quod reprehenderit! Voluptatum labore culpa architecto, tempore, nemo harum minima laudantium inventore reprehenderit obcaecati quisquam et magni adipisci nobis repellat sed perferendis rerum qui doloremque quas assumenda iure? Eligendi labore laboriosam repellat sed provident minus, nam ab accusamus hic, sunt beatae quo sit voluptates illum dolor exercitationem praesentium porro repellendus officiis quis. Praesentium minima fugiat nihil quia autem. Harum laboriosam porro, asperiores repellat nulla minima expedita pariatur reiciendis veritatis suscipit laborum deleniti molestiae, magni iusto sit atque! Expedita iure natus officiis, veritatis quod aspernatur hic tenetur ipsam architecto aut ullam inventore laboriosam deserunt eaque rerum quas fuga vel. Quis asperiores perspiciatis, dignissimos animi dolorum reprehenderit, perferendis facere harum blanditiis modi autem repellendus nostrum voluptates, doloribus consectetur dolore. Ut deserunt magni omnis incidunt tempora est ipsa, hic sunt. Distinctio perferendis atque culpa maxime nemo praesentium illo corrupti alias quas sunt molestiae obcaecati laboriosam repudiandae libero dolorem ipsum natus consectetur voluptatem accusantium esse, ex nobis, porro earum? Repellendus enim numquam saepe quam! Expedita laboriosam harum officia earum quis, fuga repudiandae aut quaerat quasi nesciunt accusantium reprehenderit, deleniti iusto nisi tempora! Vero animi laborum unde temporibus delectus totam, voluptas sequi reiciendis molestiae porro facere sed, numquam fuga architecto error quibusdam nemo. Nostrum fugiat voluptas quibusdam, tempora porro aliquid facilis nam nesciunt. Quidem qui reprehenderit, quas aut delectus quis placeat excepturi eaque expedita laboriosam.
                     </div>
                   </div>
                      <div className=' flex flex-row justify-end items-end right-0 bottom-0 sticky z-10 bg-[#fbfbfb]   gap-3 '>
                         <button className='border rounded-md p-0.5 bg-[#FF6767] text-white'> <MdDelete className='text-2xl' /></button>
                        <button  className='border rounded-md p-0.5 bg-[#FF6767] text-white'><RiEditBoxFill className='text-2xl'  /></button>
                        <button  className='border rounded-md  bg-[#FF6767] text-white'><BsExclamation className='text-3xl'  /></button>
                     </div>
                  </div>
            </div>
    
  )
}

export default ViewTask
