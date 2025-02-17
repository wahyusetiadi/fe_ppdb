import 'react'
import './App.css'
import { LandingPage } from './pages/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DataRegistrasi } from './pages/DataRegistrasi'
import { Dashboard } from './pages/Dashboard'
import RegistrasiForm from './pages/RegistrasiForm'
import { Pendaftaran } from './pages/Pendaftaran'
import { CekStatus } from './pages/CekStatus'
import { StatusPendaftaran } from './pages/StatusPendaftaran'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/formulir-pendaftaran' element={<RegistrasiForm />} />
        <Route path='/data-registrasi' element={<DataRegistrasi />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/pendaftaran' element={<Pendaftaran />} />
        <Route path='/cek-status' element={<CekStatus />} />
        <Route path='/status-pendaftaran' element={<StatusPendaftaran />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App
