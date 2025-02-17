import 'react'
import './App.css'
import RegistrationForm from './pages/RegistrationForm'
import { LandingPage } from './pages/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DataRegistrasi } from './pages/DataRegistrasi'
import { Dashboard } from './pages/Dashboard'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/formulir-pendaftaran' element={<RegistrationForm />} />
        <Route path='/data-registrasi' element={<DataRegistrasi />} />
        <Route path='/dashboard' element={<Dashboard />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App
