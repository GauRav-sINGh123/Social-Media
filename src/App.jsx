import React from 'react'
import Navbar1 from './components/Navbar2'
import Sidebar2 from './components/Sidebar2'

export default function App() {
  return (
    <div className='bg-[#f9fbff] h-screen w-scren overflow-hidden'>
      <Navbar1/>
      <hr className='border-gray-400 border-[2px]'/>
      <Sidebar2/>
    </div>
  )
}
