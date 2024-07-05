import React from 'react'
import { auth } from '../config/firebase';

function Sidebar({ userData }) {
  console.log(userData);
  return (
    <div className="flex-1 hidden md:block max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-1 bg-white shadow-xl rounded-lg text-gray-900">
    <div className="rounded-t-lg h-32 overflow-hidden">
      <img
        className="object-cover object-top w-full"
        src="https://images.pexels.com/photos/3988302/pexels-photo-3988302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="bg"
      />
    </div>
    <div className="mx-auto w-32 h-32 relative -mt-16 border-2 border-neutral-700 rounded-full overflow-hidden">
      <img
        className="object-cover object-center h-32"
        src={auth.currentUser?.photoURL}
        alt="Profile"
      />
    </div>
    <div className="text-center mt-2">
      <h2 className="font-semibold">{userData._document?.data?.value.mapValue.fields.name.stringValue}</h2>
      <p className="text-gray-500">{userData._document?.data?.value.mapValue.fields.username.stringValue}</p>
    </div>
   
    <div className="flex items-center flex-col gap-2 font-bold p-4 border-t mx-8 mt-2">
       <h3 className='cursor-pointer'>Friends</h3>
       <h3 className='cursor-pointer'>Message</h3>
    </div>
  </div>
  
  )
}

export default Sidebar