import React, { useState } from "react";
import ImageCekStatus from "../../assets/cekStatus1.png";
import Navbar from "../../components/organisms/NavigasiBar";
import IdNotFound from "../../assets/IdNotFound.png";
import { Link, useNavigate } from "react-router-dom";
import {  getDataByIdStatus } from "../../api/api"; // Pastikan API ini bekerja

export const CekStatus = () => {
  const [isFound, setIsFound] = useState(true);
  const [inputId, setInputId] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!inputId) return; // Cegah jika input kosong

    try {
      const result = await getDataByIdStatus(inputId);
      if (result) {
        navigate(`/status-pendaftaran/${inputId}`);
      } else {
        setIsFound(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsFound(false);
    }
  };

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center px-6 bg-slate-100">
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar bgColor="bg-white" />
      </div>

      <div className="bg-white shadow-lg flex flex-col w-[640px] items-center justify-center gap-4">
        {isFound ? (
          <img src={ImageCekStatus} alt="Cek Status" />
        ) : (
          <img src={IdNotFound} alt="ID Tidak Ditemukan" />
        )}

        <div className="flex flex-col text-nowrap items-center justify-center w-full">
          <h1 className="font-bold text-2xl ">
            {isFound ? "Cek Status Pendaftaran Kamu" : "ID Pendaftaran Tidak Ditemukan"}
          </h1>
        </div>

        <div className="text-center w-full">
          <p>
            {isFound
              ? "Masukkan ID Pendaftaran yang dapat kamu temukan pada dokumen bukti pendaftaran yang diperoleh setelah berhasil mengirimkan formulir."
              : "Kami tidak menemukan ID Pendaftaran yang Anda masukkan. Silakan periksa kembali atau isi formulir pendaftaran jika belum melakukannya."}
          </p>
        </div>

        <div className="w-full flex overflow-hidden gap-4">
          <div className="w-full border flex rounded-lg border-slate-500 gap-2.5">
            <input
              type="text"
              placeholder="ID Pendaftaran..."
              className="flex-1 px-4 py-2 outline-none"
              value={inputId}
              onChange={(e) => setInputId(e.target.value)}
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 cursor-pointer"
          >
            Cari
          </button>
        </div>
      </div>
    </div>
  );
};
