import React, { useState } from "react";
import { toast } from "sonner";
import { signInWithPopup } from "firebase/auth";
import { auth, db, provider } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

function SignUp() {
     const [username, setUsername] = useState("");

     const addUser=async()=>{
      const userRef=collection(db,"Users")
      try {
         await addDoc(userRef,{
          username:username
         })
      } catch (error) {
        toast.error(error)
      }
     }
     const signInWithGoogle=async()=>{
      if(!username){
        toast.warning("Please Enter Username")
      }
      try {
         if(username){
         await signInWithPopup(auth, provider)
         addUser()
         toast.success("Sign In Successfull")
         }
        
      } catch (error) {
        toast.error(error)
      }
     }
    
  
  return (
    <section className='w-full h-screen '>
      {/* login container */}
      <div className="flex justify-center items-center flex-col lg:flex-row w-full h-full lg:max-w-8xl lg:max-h-screen bg-gray-950 overflow-hidden">
        
        <div className="w-full sm:w-[50%]  lg:w-[40%] p-8 lg:p-16 flex flex-col justify-center">
          <h2 className=" text-2xl md:text-4xl text-center font-bold text-white font-poppins">Sign In</h2>
          <p className="mt-4 text-xs text-center text-white ">Connect With World!</p>
          <div className="flex flex-col gap-4 mt-8">
            <input
              className="rounded-3xl border placeholder:text-sm outline-none p-3 "
              type="username"
              name="username"
              placeholder="Username"
              onChange={(e) =>setUsername(e.target.value)}
              required
            />
             
            <button onClick={signInWithGoogle} className="rounded-3xl bg-[#075fee] py-2 text-white duration-300 hover:scale-105">
              Sign In
            </button>
          </div>
           
        </div>
        {/* image */}
        <div className="hidden lg:block lg:w-[60%] h-full">
          <img
            className="w-full h-full object-cover"
            src="/1.jpg"
            alt="SignUp Illustration"
            loading="lazy"
            style={{ userSelect: 'none', pointerEvents: 'none' }}
            
          />
        </div>
      </div>
    </section>
  );
}

export default SignUp;