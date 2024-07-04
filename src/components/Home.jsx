import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Home() {
  return (
   <>
   <div className="bg-neutral-750">
     <Navbar/>
      
     <Sidebar/>
   </div>
   </>
  )
}

export default Home