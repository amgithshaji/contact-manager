
import './App.css'
import ContactGenerator from './pages/ContactGenerator'
import LandingPage from './pages/LandingPage'
import { Routes, Route } from 'react-router-dom'
import Preview from './components/Preview'
import { useState } from 'react'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/contact' element={<ContactGenerator />} />
        <Route path='/preview/:id/view' element={<Preview />}  />

      </Routes>
    </>
  )
}

export default App
