import { useState } from 'react'
import React from 'react'
import { BsPeople } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { FiMessageCircle } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { auth, provider } from '../config/firebase'

function Navbar({userData}) {

  const navigate = useNavigate()

  const logout = async()=>{
    try{
      await signOut(auth,googleProvider)
      navigate("/")
    }catch(err){
      console.error(err)
    }
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-2 ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 text-black text-lg font-bold">
          EchoNet
        </div>

        {/* Middle Icons */}
        <div className="hidden md:flex space-x-4 items-center gap-10">
           <FaHome className='text-black text-3xl cursor-pointer hover:scale-110 transition-all ease-in-out'/>
           <BsPeople className='text-black text-3xl cursor-pointer hover:scale-110 transition-all ease-in-out'/>
           <FiMessageCircle className='text-black cursor-pointer text-3xl hover:scale-110 transition-all ease-in-out'/>
        </div>

        {/* Profile and Logout Button */}
        <div className="hidden md:flex items-center space-x-4">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" className="w-10 h-10 rounded-full" alt="" />
          <button className="text-white bg-cyan-600 hover:bg-cyan-500 hover:scale-110 transition-all ease-in-out px-4 py-2 rounded-3xl hover:text-white">
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
         
        <div className="md:hidden flex items-center">
        <img src="https://randomuser.me/api/portraits/men/1.jpg" className="w-8 h-8 rounded-full mr-2" alt="" />
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M4.293 5.707a1 1 0 011.414 0L12 12.586l6.293-6.293a1 1 0 111.414 1.414L13.414 14l6.293 6.293a1 1 0 01-1.414 1.414L12 15.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 14 4.293 7.707a1 1 0 010-1.414z" />
              ) : (
                <path fillRule="evenodd" clipRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col items-center gap-1   ">
          <a href="#" className="block  text-gray-300 hover:text-white hover:bg-sky-600 px-2 py-1">
            Friends 
          </a>
          <a href="#" className="block text-gray-300 hover:text-white hover:bg-sky-600 px-2 py-1">
            Messages
          </a>
          <button className="block text-gray-300 mt-3 mb-2 cursor-pointer bg-cyan-600 rounded-lg hover:text-white px-2 py-1">
            Logout
          </button>
          
        </div>
      )}
    </nav>
  
  )
}

export default Navbar