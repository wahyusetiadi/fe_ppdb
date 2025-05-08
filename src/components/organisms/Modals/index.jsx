import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

export const Modals = ({
  idRegistration,
  name,
  dibuat_tanggal,
  email,
  gender,
  religion,
  birthPlace,
  address,
  parentPhone,
  akte,
  familyRegister,
  tkCertificate,
  foto,
  status,
  onCloseModal,
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "diterima":
        return "bg-green-200 text-green-800";
      case "ditolak":
        return "bg-red-200 text-red-800";
      case "menunggu":
        return "bg-yellow-200 text-yellow-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  const statusColorClass = getStatusColor(status);

  return (
    <div className="w-[720px] flex flex-col gap-8 bg-white z-50 rounded-lg p-8 h-screen overflow-y-auto">
      <div>
        <button
          onClick={onCloseModal}
          className="flex w-full justify-between items-center cursor-pointer"
        >
          <h1>Detail Siswa</h1>
          <XMarkIcon className="size-5 text-black" />
        </button>
        <hr className="mt-4 text-slate-300" />
      </div>

      <div className="w-full">
        <form className="flex flex-col gap-4">
          {[
            ["ID Pendaftaran", idRegistration],
            ["Tanggal Registrasi", dibuat_tanggal],
            ["Nama Lengkap", name],
            ["Email aktif", email],
            ["Jenis Kelamin", gender],
            ["Agama", religion],
            ["Tempat, Tanggal Lahir", birthPlace],
            ["Alamat", address],
            ["No. Telp Orang Tua", parentPhone],
          ].map(([label, value]) => (
            <div key={label}>
              <div className="flex gap-2">
                <label className="w-[224px]">{label}</label>
                <input type="text" disabled value={value} className="w-full  p-1" />
              </div>
              <hr className="text-slate-300" />
            </div>
          ))}

          <div className="flex flex-col gap-2">
            <label className="w-[224px]">Dokumen</label>

            {[
              ["Akte", akte],
              ["Kartu Keluarga", familyRegister],
              ["Sertifikat TK", tkCertificate],
              ["Foto", foto],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="flex items-center justify-between">
                  <span className="w-[224px]">{label}</span>
                  <input type="text" disabled value={value} className=" p-1 w-full" />
                </div>
                <hr className="text-slate-300" />
              </div>
            ))}
          </div>
        </form>
      </div>

      <div className="flex justify-between">
        {/* <button className="bg-red-100 cursor-pointer rounded-lg py-2 px-6">Hapus</button> */}

        <div className="flex gap-2 items-center w-fit">
          <p className="font-bold">Status :</p>
          <input type="text" disabled value={status} className={`rounded-lg px-2 py-1 ${statusColorClass}`} />
        </div>

        {/* <button className="bg-blue-100 cursor-pointer rounded-lg py-2 px-3">Edit</button> */}
      </div>
    </div>
  );
};
