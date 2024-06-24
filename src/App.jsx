import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home.jsx'
 
 function App() {
   return (
     <div className='w-scree h-screen flex justify-start items-start overflow-hidden'>
        <Routes>
          <Route path="/home/*" element={<Home />}/>
          
         {/* If route is not matching  */}
          <Route path='*' element={<Navigate to={'/home'} />}/> 
        </Routes>
     </div> 
   )
 }
 
 export default App