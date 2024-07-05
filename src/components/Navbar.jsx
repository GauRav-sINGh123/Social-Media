import { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPeople } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { FiMessageCircle } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
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
    <nav className="bg-white p-2  ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 text-black text-lg font-bold">
          EchoNet
        </div>

        {/* Middle Icons */}
        <div className="hidden md:flex space-x-4 items-center gap-10">
           <IoHomeOutline className='text-black text-3xl cursor-pointer hover:scale-110 transition-all ease-in-out'/>
           <BsPeople className='text-black text-3xl cursor-pointer hover:scale-110 transition-all ease-in-out'/>
           <FiMessageCircle className='text-black cursor-pointer text-3xl hover:scale-110 transition-all ease-in-out'/>
        </div>

        {/* Profile and Logout Button */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-white bg-cyan-600 hover:bg-cyan-500 hover:scale-110 transition-all ease-in-out px-4 py-2 rounded-3xl hover:text-white">
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
         
        <div className="md:hidden flex items-center">
        
          <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none  ">
             
              {isOpen ? (
                <IoCloseSharp className='text-3xl'/>
              ) : (
                <GiHamburgerMenu className='text-2xl'/>
              )}
             
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col items-center gap-1">
          <a href="#" className="block  text-black hover:text-white hover:bg-sky-600 px-2 py-1">
            Friends 
          </a>
          <a href="#" className="block text-black hover:text-white hover:bg-sky-600 px-2 py-1">
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