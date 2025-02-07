import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/apply-job/:id" element={<Applyjob/>}/>
        <Route path="/" element={<Home/>}/> 
      </Routes>
    </div>
  )}
export default App
