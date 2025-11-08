import React,{useState} from 'react'
import LandingPage from './vendorDashboard/pages/LandingPage'
import {Routes,Route} from "react-router-dom"
import "./App.css"
import Notfound from './vendorDashboard/components/Notfound'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path="/*" element={<Notfound/>}/>
    </Routes>
      
    </>
  )
}

export default App