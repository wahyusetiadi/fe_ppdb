import React from 'react'
import StatusLulus from '../../assets/StatusLolos.png'
import Navbar from '../../components/organisms/NavigasiBar'

export const StatusPendaftaran = () => {
    return (
        <div className="w-full h-full flex items-center justify-center overflow-x-hidden px-[100px] py-20 bg-slate-100">

            <div className="absolute top-0 left-0 w-full z-[100]">
                <Navbar bgColor="bg-white" />
            </div>

            <div className="w-[840px] flex flex-col items-center justify-center gap-10">

                <div className="text-center w-full flex flex-col items-center justify-center ">
                    <h1 className='font-bold text-2xl'>Pengumuman Penerimaan Peserta Didik Baru
                        SD XYZ Tahun Ajaran 2024/2025</h1>
                </div>

                <div className="w-full flex flex-col items-center justify-center">
                    <p>ID Pendaftaran </p>
                    <hr />
                    <p>Tanggal Registrasi</p>
                    <hr />
                    <p>Nama Lengkap</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <img src={StatusLulus} alt="Status Lulus" />
                </div>

                <div className="text-center w-full flex flex-col items-center justify-center">
                    <p>Selamat Anda dinyatakan Lolos dalam seleksi Penerimaan Peserta Didik Baru (PPDB) SD XYZ Tahun Ajaran 2024/2025</p>
                </div>

            </div>

        </div>
    )
}
