import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { MdHome } from "react-icons/md";
import {SignUp, Projects} from "../components/index";
import { Link } from "react-router-dom";
import { FaSearchengin } from "react-icons/fa6";
import "../index.css";
import { HiChevronDoubleLeft } from "react-icons/hi2";
function Home() {
  const [isSideMenu, setSideMenu] = useState(false);
  const [user, setUser] = useState(null);
  return (
    <>
      <div
        className={`w-2 ${
          isSideMenu ? "w-2" : "flex-[.15] xl:flex[.4] w-80 lg:70 "  
        } min-h-screen max-h-screen relative bg-secondary    `}
      >
        {/* Anchor */}
        <motion.div
          whileTap={{ scale: 0.8 }}
          onClick={() => setSideMenu(!isSideMenu)}
          className="w-6 h-6 rounded-tr-lg rounded-br-lg absolute -right-6 mt-4 flex items-center justify-center cursor-pointer bg-slate-500 hover:bg-slate-400"
        >
          <HiChevronDoubleLeft className="text-white text-lg" />
        </motion.div>
        <div className="overflow-hidden w-full flex flex-col gap-3">
          {/* Logo */}
          <Link to="/home">
            <img
              src="/logo.png"
              alt=""
              className={`object-contain w-72 mt-8 px-6 `}
            />
           
          </Link>
          {/* banner */}
          <div className="w-full overflow-hidden px-4 py-3">
              <p className="text-sm text-primaryText text-center  font-mono">
                Try our online editor
              </p>
            </div>
          {/*start coding */}
          <Link className="flex-1 flex items-center justify-center object-contain  px-5 ">
            <div
              id="button-anon-pen"
              className="w-40 text-sm sm:text-lg  text-center text-white no-underline block rounded-md overflow-hidden  bg-gradient-to-r from-green-400 via-yellow-400  to-blue-400  hover:from-green-500  hover:via-yellow-500  hover:to-blue-500 "
            >
              <span className="block px-2 py-3 font-light   bg-black rounded-sm my-[2px] mx-[3px]">
                Start Coding
              </span>
            </div>
          </Link>

          {/* home navbar */}
          {user && (
            <Link
              to="/home/projects"
              className="flex items-center justify-center gap-6 px-6 py-4 overflow-hidden"
            >
             <div className="flex items-center gap-2 ">
             <MdHome className="text-primaryText text-lg" />
             <p className="text-lg text-primaryText">Home</p>
             </div>
            </Link>
          )}
        </div>
      </div>
      {/* side menu */}
      <div className="flex-1 min-h-screen max-h-screen overflow-y-scroll
      h-full flex flex-col items-start justify-start px-4 md:px-12 py-4
      md:py-12">
         {/* topsection */}
         <div className="w-full flex items-center justify-between gap-3"> 
   
        {/* search section */}
        <div className="bg-secondary w-full px-4 py-3 rounded-md flex
        items-center justify-center">
          <FaSearchengin className="text-2xl text-primaryText "/>
          <input 
          className="flex-1 px-4  text-md sm:text-xl bg-transparent
          outline-none border-none text-primaryText
          placeholder:text-gray-600"
          type="text"
          placeholder="Search here..."
          />
        </div>

        {/* profile section */}
         {
          !user&&(
            <div className="flex items-center justify-center ">
              <Link to={"/home/auth"} className="bg-emerald-500 px-7 py-[10px] rounded-md
              text-white text-lg cursor-pointer hover:bg-emerald-700 hover:scale-105 transition-all ease-in-out">
                 Signup
              </Link>
            </div>
          )
         }
         {
          user && (
            <div className=""></div>
          )
         }
         </div>

         {/* bottom section */}
         <div className="w-full ">
            <Routes>
              <Route path="/*" element={<Projects />}/>
              <Route path="/auth" element={<SignUp />}/>
            </Routes>
          </div>
      </div>
    </>
  );
}

export default Home;
