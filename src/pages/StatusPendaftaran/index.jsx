import React, { useEffect, useState } from "react";
import StatusLulus from "../../assets/StatusLolos.png";
import StatusGagal from "../../assets/StatusGagal.png";
import StatusMenunggu from "../../assets/StatusMenunggu.png"
import Navbar from "../../components/organisms/NavigasiBar";
import { useParams } from "react-router-dom";
import {  getDataByIdStatus } from "../../api/api";

export const StatusPendaftaran = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("menunggu");

  useEffect(() => {
    const fetchDataById = async () => {
        try {
            const result = await getDataByIdStatus(id);
            console.log("DataId", result);
            setData(result);

            if (result.status === "diterima") {
                setStatus("diterima");
            } else if (result.status === "ditolak") {
                setStatus("ditolak");
            } else {
                setStatus("menunggu");
            }
        } catch (err) {
            console.error("Error fetching data", err);
            
        }
    };

    fetchDataById();
  }, [id])

  return (
    <div className="w-full h-full flex items-center justify-center overflow-x-hidden px-[100px] py-20 bg-slate-100">
      <div className="absolute top-0 left-0 w-full z-[100]">
        <Navbar bgColor="bg-white" />
      </div>

      <div className="w-[840px] flex flex-col items-center justify-center gap-10">
        <div className="text-center w-full flex flex-col items-center justify-center ">
          <h1 className="font-bold text-2xl">
            Pengumuman Penerimaan Peserta Didik Baru SD XYZ Tahun Ajaran
            2024/2025
          </h1>
        </div>

        
        {data && (
          <div className="w-full flex flex-col items-center justify-center">
            <p>ID Pendaftaran: {data.idRegistration} </p>
            <hr />
            <p>Tanggal Registrasi: {data.dibuat_tanggal} || {data.dibuat_jam} </p>
            <hr />
            <p>Nama Lengkap: {data.name}</p>
          </div>
        )}

        {status === "diterima" && (
          <div className="flex flex-col items-center justify-center">
            <img src={StatusLulus} alt="Status Lulus" />
            <p className="text-center">Selamat! Anda dinyatakan Lolos dalam seleksi PPDB SD XYZ Tahun Ajaran 2024/2025</p>
          </div>
        )}

        {status === "ditolak" && (
          <div className="flex flex-col items-center justify-center">
            <img src={StatusGagal} alt="Status Gagal" />
            <p className="text-center">Maaf, Anda tidak lolos dalam seleksi PPDB SD XYZ Tahun Ajaran 2024/2025</p>
          </div>
        )}

        {status === "menunggu" && (
          <div className="flex flex-col items-center justify-center">
            <img src={StatusMenunggu} alt="Status Menunggu" />
            <p className="text-center">Pendaftaran Anda Sedang Diproses, Silakan tunggu dan pantau status Anda secara berkala.</p>
          </div>
        )}
      </div>
    </div>
  );
};
