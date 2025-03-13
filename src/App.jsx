import "react";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataRegistrasi } from "./pages/DataRegistrasi";
import { Dashboard } from "./pages/Dashboard";
import RegistrasiForm from "./pages/RegistrasiForm";
import { Pendaftaran } from "./pages/Pendaftaran";
import { CekStatus } from "./pages/CekStatus";
import { StatusPendaftaran } from "./pages/StatusPendaftaran";
import { ButkiPendaftaran } from "./pages/ButkiPendaftaran";
import FormInput from "./pages/FormInput";
import { FormEdit } from "./pages/FormEdit";
import { LoginPage } from "./pages/LoginPage";
import PrivateRoute from "../PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/formulir-pendaftaran" element={<RegistrasiForm />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/data-registrasi" element={<DataRegistrasi />} />
          <Route path="/tambah-data" element={<FormInput />} />
          <Route path="/edit-data/:id" element={<FormEdit />} />
        </Route>
        <Route path="/pendaftaran" element={<Pendaftaran />} />
        <Route path="/cek-status" element={<CekStatus />} />
        <Route path="/status-pendaftaran/:id" element={<StatusPendaftaran />} />
        <Route path="/bukti-pendaftaran" element={<ButkiPendaftaran />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
