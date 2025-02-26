import React, { useState } from 'react'
import ImageCekStatus from '../../assets/cekStatus1.png'
import Navbar from '../../components/organisms/NavigasiBar'
import IdNotFound from '../../assets/IdNotFound.png'
import { Link } from 'react-router-dom'

export const CekStatus = () => {
    const [isFound, setIsFound] = useState(true)

    return (
        <div className='flex items-center justify-center'>
            <div className="absolute top-0 left-0 w-full z-[100]">
                <Navbar bgColor="bg-white" />
            </div>

            <div className="flex flex-col w-[640px] items-center justify-center gap-4">

                {isFound ?
                    <div className="">
                        <img src={ImageCekStatus} alt="Cek Status" />
                    </div> :
                    <div className="">
                        <img src={IdNotFound} alt="" />
                    </div>

                }

                {isFound ?
                    <div className="flex flex-col text-nowrap items-center justify-center w-full">
                        <h1 className='font-bold text-2xl '>Cek Status Pendaftaran Kamu</h1>
                    </div> :
                    <div className="flex flex-col text-nowrap items-center justify-center w-full">
                        <h1 className='font-bold text-2xl '>ID Pendaftaran Tidak Ditemukan</h1>
                    </div>


                }


                {isFound ?
                    <div className="text-center w-full">
                        <p className=''>Masukkan ID Pendaftaran yang dapat kamu temukan pada dokumen bukti pendaftaran yang diperoleh setelah berhasil mengirimkan formulir.</p>
                    </div> :
                    <div className="text-center w-full">
                        <p className=''>Kami tidak menemukan ID Pendaftaran yang Anda masukkan. Silakan periksa kembali atau isi formulir pendaftaran jika belum melakukannya.</p>
                    </div>

                }







                <div className="w-full flex overflow-hidden gap-4">
                    <div className="w-full border flex rounded-lg border-slate-500 gap-2.5 ">
                        <input type="text" placeholder="ID Pendaftaran..." className="flex-1 px-4 py-2 outline-none" />

                    </div>
                    <Link to="/status-pendaftaran">
                        <button className="bg-blue-500 text-white px-4 py-2 cursor-pointer">Cari</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}
