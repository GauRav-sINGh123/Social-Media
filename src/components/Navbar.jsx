import {FaRegQuestionCircle} from 'react-icons/fa'
import {IoSettingsOutline} from 'react-icons/io5'
import {IoIosSearch} from 'react-icons/io'
import { AnimatePresence, motion } from "framer-motion"
import { PiDotsNineBold } from "react-icons/pi"
import { RxHamburgerMenu } from "react-icons/rx"
import Avatar from "react-avatar"

function Navbar() {
  return (
    <div className='flex items-center justify-between mx-3 h-16'>
    <div className='flex items-center gap-10'>
      <div className='flex items-center gap-2'>
        <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
          <RxHamburgerMenu size={'20px'} />
        </div>
        <img className='w-8' src={"https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"} alt="" />
        <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
      </div>
    </div>
    <div className='lg:block hidden w-[50%]  mr-56'>
      <div className='flex items-center bg-[#EAF1FB] px-2 py-3  rounded-full'>
        <IoIosSearch size="24px" className='text-gray-700' />
        <input
          type="text"
        //   value={search}
        //   onChange={(e) => setSearch(e.target.value)}
          placeholder='Seach mail'
          className='lg:w-1/2 rounded-full w-full bg-transparent outline-none px-1'
        />
      </div>
    </div>
    <div className='md:block hidden'>
      <div className='flex items-center gap-2'>
        <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
          <FaRegQuestionCircle size={"20px"} />
        </div>
        <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
          <IoSettingsOutline size={"20px"} />
        </div>
        <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
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
    </div>
  </div>
  )
}

export default Navbar