import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/SmNavbar'
import Home from '../Screens/Home'


const Approuter = () => { 
  return (
    <BrowserRouter>
     <Navbar/>
    <Routes>
      {/* <Route path ="/" element={<SignUp/>}/> */}
      {/* <Route path ="/" element={<Login/>}/> */}
      <Route path ="/" element={<Home/>}/>
      <Route path ="/Home" element={<Home/>}/>
      {/* <Route path ="Dashboard/*" element={< PtrotectedRoute  Component ={Dashboard}/>}/> */}
    </Routes>
    </BrowserRouter>
  )
}

export default Approuter