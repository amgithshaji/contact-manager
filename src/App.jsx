
import './App.css'
import ContactGenerator from './pages/ContactGenerator'
import LandingPage from './pages/LandingPage'
import { Routes, Route } from 'react-router-dom'
import Preview from './components/Preview'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/contact' element={<ContactGenerator />} />
        <Route path='/preview' element={<Preview />}  />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
