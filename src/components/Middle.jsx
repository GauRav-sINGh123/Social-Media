import { GoFileMedia } from "react-icons/go";
import { MdOutlineArticle } from "react-icons/md";
import { MdOutlineEventNote } from "react-icons/md";


function Middle({userData}) {
  return (
    <div className='mt-1 flex-1'>
    <div className="flex flex-col bg-white border border-slate-200 rounded-xl shadow-sm gap-2">
  <div className="w-full flex items-center gap-4 p-4">
    <img
      src={userData._document?.data?.value.mapValue.fields.profile.stringValue}
      alt="profile"
      className="w-10 h-10 rounded-full"
    />
    <input
      type="text"
      placeholder="Share something"
      className="w-4/5 rounded-full outline-none border-gray-300 border-2 p-2 text-gray-800 shadow-md"
    />
  </div>
  <div className="flex flex-wrap items-center gap-6 sm:gap-10 md:gap-36 text-lg ml-5 sm:ml-10 md:ml-20 mb-4">
    <span className="flex items-center gap-2 cursor-pointer">
    <GoFileMedia/>Upload 
    </span>
    <span className="flex items-center gap-2">
    <MdOutlineArticle />Article 
    </span>
    
  </div>
</div>

    <div className="pt-2"></div>
    <div className=" flex max-h-screen">
    <div className="bg-white rounded-lg shadow-lg  w-full p-4">
        <div className="flex items-center space-x-4">
            <img src={userData._document?.data?.value.mapValue.fields.profile.stringValue} className="w-12 h-12 rounded-full"alt="" />
            <div className="flex-1">
                <h2 className="text-black text-xl font-bold">{userData._document?.data?.value.mapValue.fields.name.stringValue}</h2>
            </div>
        </div>
        <div className="mt-4">
            <p className="text-gray-400"></p>
            <div className="mt-2 bg-gray-700 rounded-lg p-4 h-32"></div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Middle