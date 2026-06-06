import React, { useContext } from 'react'
import Avatar from "../utils/images/avatar.avif"
import { contextProvider } from '../context/refContext'
import { useNavigate } from 'react-router-dom'


const  UpdateInfo = ()=> {

const {info,setInfo} = useContext(contextProvider)

const navigate = useNavigate();

const handleSaveDetails = (e)=>{
    e.preventDefault();
    alert("information is updated");
    navigate(-1);

}

  return (
    // <div className='bg-[#fbfbfb] h-screen'>
    //   <Navbar />

    //    <div className='h-[90%] w-screen flex flex-row '>
      
    //    <MainPart />
       
        <div className='w-full h-full   px-[30%] pt-[2.6%] bg-[#fbfbfb] flex flex-col justify-between'>
             
              <div className='h-full w-[165%] bg-[#fbfbfb]  mb-4 flex flex-col gap-[1%] border border-zinc-300 shadow-md rounded-xl px-[4%] py-[2%] ' > 
                 
                 <div className='flex flex-row justify-between' >
                  <h1 className='text-xl font-semibold'><span className='border-b-2 border-[#FF6767]'>Account Inform</span><span>ation</span></h1>
                  <button className=' text-sm font-semibold underline cursor-pointer' onClick={()=>navigate("/profile")} >Go Back</button>
                 </div>

                 <div className='flex flex-row py-[2%] gap-[2%] '>
                    <div className='h-18 w-18 rounded-[100%] border'>
                        <img src={Avatar} className='rounded-[100%]' />
                    </div>
                    <div className='py-[2%] flex flex-col leading-tight '>
                        <p className='font-semibold'>Sunder Gurung</p>
                        <p className='tracking-tight text-sm'>sundergurung360@gmail.com</p>
                    </div>
                 </div>

                 <div className='border h-full rounded-md border-zinc-300 px-[3%] py-[1%] flex flex-col gap-1'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="" className='text-xs font-semibold'>First Name</label>
                            <input type="text" className='border rounded-sm w-[60%] outline-none px-2 border-zinc-400' />
                        </div>

                         <div className='flex flex-col gap-1'>
                            <label htmlFor="" className='text-xs font-semibold'>Last Name</label>
                            <input type="text" className='border rounded-sm w-[60%] outline-none px-2 border-zinc-400' />
                        </div>

                         <div className='flex flex-col gap-1'>
                            <label htmlFor="" className='text-xs font-semibold'>Email Address</label>
                            <input type="email" className='border rounded-sm w-[60%] outline-none px-2 border-zinc-400' />
                        </div>

                         <div className='flex flex-col gap-1'>
                            <label htmlFor="" className='text-xs font-semibold'>Contact Number</label>
                            <input type="tel" maxLength={10} className='border rounded-sm w-[60%] outline-none px-2 border-zinc-400' />
                        </div>

                         <div className='flex flex-col gap-1'>
                            <label htmlFor="" className='text-xs font-semibold'>Position</label>
                            <input type="text" className='border rounded-sm w-[60%] outline-none px-2 border-zinc-400' />
                        </div>

                        <div className='flex flex-row gap-2 mt-5'>
                            <button className=' bg-[#F24E1E] px-[3%] text-sm text-white py-1 rounded-md cursor-pointer' onClick={handleSaveDetails} >Save Changes</button>
                            <button className=' bg-[#F24E1E] px-[3%] text-sm text-white py-1 rounded-md cursor-pointer' onClick={()=>navigate("/profile")}>Cancel</button>
                           
                        </div>
                 </div>

              </div>
        </div>

    //    </div>

    // </div>
  )
}

export default UpdateInfo
