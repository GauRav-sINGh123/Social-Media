import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Container from './Container'
import{doc,getDoc} from "firebase/firestore"
import { auth, db } from '../config/firebase'
import { toast } from 'sonner'


function Home() {
  const [userData,setUserData]=useState([])
  const getUser=()=>{
   setTimeout(async()=>{
    try {
      const userDocument=doc(db,"Users",`${auth.currentUser?.uid}`)
       const data=await getDoc(userDocument)
        setUserData(data)
    } catch (error) {
      toast.error(error)
    }
   },1000)
  }

  useEffect(()=>{
    getUser()
  },[])

  return (
    <>
    <Navbar userData={userData}/>
    <Container userData={userData} />
    </>
  )
}

export default Home