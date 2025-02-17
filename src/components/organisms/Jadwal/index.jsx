import React from 'react'
import image1 from '../../../assets/Image1ppdb.png';
import "./style.css"

export const Jadwal = () => {
    return (
        <div className="w-full" id='jadwal pendaftaran'>
            <div className=" w-full flex items-center justify-center gap-10 p-[100px] bg-white rounded-lg shadow-lg">
                {/* Gambar */}
                <div className="w-[458px] min-w-[458px] max-w-[458px] h-[458px] min-h-[458px] max-h-[458px] flex items-center justify-center bg-blue-100 rounded-2xl"
                    id="bg-image2">
                    <img src={image1} alt="" className="w-[458px] h-[458px]" />
                </div>


                {/* Konten Jadwal */}
                <div className="w-fit flex flex-col gap-6">
                    <div className="w-full flex flex-col gap-2">
                        <h1 className="text-[40px] font-bold text-gray-900 text-nowrap">
                            Jadwal Pendaftaran PPDB SD XYZ
                        </h1>
                        <p className="text-gray-600 mt-2 text-xl">
                            Berikut adalah jadwal penting untuk Penerimaan Peserta Didik Baru (PPDB) SD XYZ. Pastikan Anda tidak melewatkan setiap tahapannya!
                        </p>

                    </div>

                    <div className="w-full grid grid-cols-2 place-content-stretch gap-6">
                        <div className="w-auto flex flex-col gap-1 bg-[#2D51A0] text-white px-6 py-4 rounded-lg">
                            <h1 className='text-[22px] font-bold'>2 Februari 2025</h1>
                            <p>Pendaftaran dibuka</p>
                        </div>
                        <div className="w-auto flex flex-col gap-1 bg-[#2D51A0] text-white px-6 py-4 rounded-lg">
                            <h1 className='text-[22px] font-bold'>23 Februari 2025</h1>
                            <p>Pendaftaran ditutup</p>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-2 place-content-stretch gap-6">
                        <div className="w-auto flex flex-col gap-1 bg-[#2D51A0] text-white px-6 py-4 rounded-lg">
                            <h1 className='text-[22px] font-bold'>24 Februari 2025</h1>
                            <p>Verifikasi Data</p>
                        </div>
                        <div className="w-auto flex flex-col gap-1 bg-[#2D51A0] text-white px-6 py-4 rounded-lg">
                            <h1 className='text-[22px] font-bold'>28 Februari 2025</h1>
                            <p>Pengumuman Hasil</p>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-2 place-content-stretch gap-6">
                        <div className="w-auto flex flex-col gap-1 bg-[#2D51A0] text-white px-6 py-4 rounded-lg">
                            <h1 className='text-[22px] font-bold'>1 Maret 2025</h1>
                            <p>Daftar Ulang</p>
                        </div>
                        <div className="w-auto flex flex-col gap-1 bg-[#2D51A0] text-white px-6 py-4 rounded-lg">
                            <h1 className='text-[22px] font-bold'>4 Maret 2025</h1>
                            <p>Hari Pertama Sekolah</p>
                        </div>
                    </div>

                    {/* Grid Jadwal */}
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        {[
                            { date: "2 Februari 2025", text: "Pendaftaran Dibuka" },
                            { date: "23 Februari 2025", text: "Pendaftaran Ditutup" },
                            { date: "24 Februari 2025", text: "Verifikasi Data" },
                            { date: "28 Februari 2025", text: "Pengumuman Hasil" },
                            { date: "1 Maret 2025", text: "Daftar Ulang" },
                            { date: "4 Maret 2025", text: "Hari Pertama Sekolah" }
                        ].map((item, index) => (
                            <div key={index} className="bg-blue-800 text-white p-4 rounded-lg shadow-md">
                                <p className="font-semibold">{item.date}</p>
                                <p className="text-sm">{item.text}</p>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </div>
    )
}
