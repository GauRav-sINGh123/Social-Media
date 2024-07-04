import React from 'react'

function Sidebar() {
  return (
    <div className="w-[210px] h-[400px]  rounded-2xl border-[1px] border-solid  border-slate-300">
       <img src="" className='w-[210px] h-[65px]' alt="" /> 
       <div className="relative left-[37%]">
         <img src="https://randomuser.me/api/portraits/men/1.jpg" className="w-[55px] h-15 mt-2 rounded-full" alt="" />
         
       </div>
       <h3 className='mt-1 text-center mb-4'>Username</h3>
        <hr />
        <div className='flex flex-col gap-2 border-b-[2px]  items-center mt-12 w-full h-full '>
        <h4 className='font-semibold '>Friends</h4>
        <h4 className='font-semibold'>Messages</h4> 
        <h4 className='font-semibold'>Groups</h4>
        </div>
      
    </div>
  )
}

export default Sidebar