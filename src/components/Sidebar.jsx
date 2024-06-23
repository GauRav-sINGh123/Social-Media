import { LuPencil } from "react-icons/lu";
import { MdInbox, MdOutlineWatchLater, MdOutlineDrafts } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { TbSend2 } from "react-icons/tb";
import {MdOutlineKeyboardArrowDown} from "react-icons/md"

const sidebarItems = [
  {
      icon: <MdInbox size={"20px"} />,
      text: "Inbox"
  },
  {
      icon: <IoMdStar size={"20px"} />,
      text: "Starred"
  },
  {
      icon: <MdOutlineWatchLater size={"20px"} />,
      text: "Snoozed"
  },
  {
      icon: <TbSend2 size={"20px"} />,
      text: "Sent"
  },
  {
      icon: <MdOutlineDrafts size={"20px"} />,
      text: "Drafts"
  },
]

function Sidebar2() {
  return (
    <>
    {/* Sidebar */}
    <div className="flex h-screen overflow-scroll">
      <div className="w-64 bg-gray-900  shadow-lg p-4">
        {/* Compose Button */}
        <a
  href="#_"
  className="relative flex mt-3 items-center ml-1 py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
>
  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-150 ease-in-out bg-[#534B62] group-hover:h-full" />
  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
    <svg
      className="w-5 h-5 text-black"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </span>
  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
    <svg
      className="w-5 h-5 text-white "
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </span>
  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
    Compose
  </span>
</a>

        {/* Navigation Links */}
        <div className='text-gray-500 mt-5'>
        {
            sidebarItems.map((item, idx) => {
                return (
                    <div  key={idx} className='flex items-center space-x-2 p-2 text-white rounded-md hover:bg-gray-600'>
                        {item.icon}
                        <p>{item.text}</p>
                    </div>
                )
            })
        }
        <div className='flex items-center space-x-2 p-2 text-white rounded-md hover:bg-gray-600'>
            <MdOutlineKeyboardArrowDown size={"20px"} />
            <span>More</span>
        </div>
    </div>
        
      </div>
    </div>
  </>
  
  )
}

export default Sidebar2