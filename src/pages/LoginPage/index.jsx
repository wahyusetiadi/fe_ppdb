import React, { useState } from "react";
import ImageLogin from "../../assets/ImageLogin.png";
import Logo from "../../assets/Logo.svg";
import Button from "../../components/atoms/Button";
import containerLoginPPDB from "../../assets/containerLoginPPDB.svg"
import "./style.css";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen">
    {/* Bagian Kiri - Gambar */}
    <div 
        className="relative w-[616px] h-full bg-login bg-blue-100"  
      >
        {/* Gambar di atas Background */}
        <div className="absolute inset-0 flex items-end justify-center">
          <img src={ImageLogin} alt="Login Illustration" className="w-auto max-h-full object-contain" />
        </div>
      </div>

    {/* Bagian Kanan - Form Login */}
    <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-[480px] space-y-8 ">
          {/* ⬅️ Perbesar form */}
          {/* Logo */}
          <div className="flex justify-center">
            <img src={Logo} alt="EduNex" className="h-12" />
          </div>
          {/* Judul */}
          <div className="text-center">
            <h1 className="text-2xl font-bold">Masuk ke Akun Anda</h1>
            <p className="text-gray-500">
              Masukkan Username dan Password untuk login!
            </p>
          </div>
          {/* Form */}
          <form className="space-y-4">
            {/* Username */}
            <div>
              <label className="block font-bold mb-1">Username</label>
              <input
                type="text"
                placeholder="Masukkan Username"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block font-bold mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan Password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeIcon className="w-5 h-5" />
                  ) : (
                    <EyeSlashIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Tombol Login (Lebih Panjang) */}
            <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition">
              Login
            </button>
          </form>
        </div>
      </div>
  </div>
);
};
