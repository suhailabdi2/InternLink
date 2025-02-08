import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Applications from './pages/Applications'
import ApplyJobs from './pages/ApplyJobs'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/applications" element={<Applications/>} />
          <Route path="/apply-jobs/id:" element={<ApplyJobs />} /> 
        </Routes>     
    </div>
    
  )}
export default App
