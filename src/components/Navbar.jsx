import {FaRegQuestionCircle} from 'react-icons/fa'
import {IoSettingsOutline} from 'react-icons/io5'
import {IoIosSearch} from 'react-icons/io'
import { AnimatePresence, motion } from "framer-motion"
import { PiDotsNineBold } from "react-icons/pi"
import { RxHamburgerMenu } from "react-icons/rx"
import Avatar from "react-avatar"
function Navbar2() {
  return (
    <nav className="flex items-center justify-between p-2 bg-[#000000f3] text-white shadow-md">
  {/* Left Section: Logo and Hamburger Menu */}
  <div className="flex items-center space-x-4">
  <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
          <RxHamburgerMenu size={'20px'} />
        </div>
    <img
      src='../../public/1.png'
      alt=" Logo"
      className="h-3 sm:h-6 "
    />
  </div>
  {/* Center Section: Search Bar */}
  <div className="md:block hidden lg:w-[45%] w-[30%] ">
    
  <div className="flex items-center flex-1 max-w-2xl px-4 bg-gray-200 rounded-full  hover:bg-gray-100 shadow-md focus-within:shadow-indigo-500/50  ">
  <IoIosSearch size="24px" className='text-gray-700' />
    <input
      type="text"
      placeholder="Search mail"
      className="w-full px-4 py-2 bg-transparent outline-none text-black  "
    />
     
  </div>
  </div>
  {/* Right Section: Icons */}
  <div className="flex items-center space-x-4">
  <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
          <FaRegQuestionCircle size={"20px"} />
        </div>
        <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
          <IoSettingsOutline size={"20px"} />
        </div>
        <div className='p-3 rounded-full hover:bg- cursor-pointer'>
          <PiDotsNineBold size={"20px"} />
        </div>
        <div className='relative cursor-pointer'>
          <Avatar src="https://cdn-icons-png.flaticon.com/512/149/149071.png" size="40" round={true} />
          {/* <AnimatePresence>
            {
              toggle && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.1 }}
                  className='absolute right-2 z-20 shadow-lg bg-white rounded-md'>
                  <p onClick={signOutHandler} className='p-2 underline'>LogOut</p>
                </motion.div>
              )
            }
          </AnimatePresence> */}
        </div>
     
  </div>
</nav>


  )
}

export default Navbar2