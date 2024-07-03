import React from 'react'
import SignUp from './components/SignIn'
import { Routes, Route } from 'react-router-dom'

 
function App() {
  return (
  <div className="bg-neutral-950">
    <Routes>
      <Route path="/" element={<SignUp />} />
       
    </Routes>
  </div>
  )
}

export default App