import React, { useState, useEffect } from "react";
import ImageLogin from "../../assets/ImageLogin.png";
import Logo from "../../assets/Logo.svg";
import "./style.css";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://ppdb.edunex.id/api/users/login", {
        username,
        password,
      });

      // Simpan token ke localStorage atau sessionStorage
      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem("token", res.data.token);
      storage.setItem("username", res.data.user.username);

      navigate("/dashboard");
    } catch (err) {
      setError("Username atau Password salah!");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Gambar kiri */}
      <div className="relative w-[616px] h-full bg-login bg-blue-100">
        <div className="absolute inset-0 flex items-end justify-center">
          <img
            src={ImageLogin}
            alt="Login Illustration"
            className="w-auto max-h-full object-contain"
          />
        </div>
      </div>

      {/* Form login */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-[480px] space-y-8">
          <div className="flex justify-center">
            <img src={Logo} alt="EduNex" className="h-12" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Masuk ke Akun Anda</h1>
            <p className="text-gray-500">
              Masukkan Username dan Password untuk login!
            </p>
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block font-bold mb-1">Username</label>
              <input
                type="text"
                placeholder="Masukkan Username"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-bold mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan Password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            {/* Remember Me */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-600">
                Ingat Saya
              </label>
            </div>

            <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
