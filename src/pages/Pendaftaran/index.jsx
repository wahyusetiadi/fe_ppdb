import React from 'react'
import Navbar from '../../components/organisms/NavigasiBar'
import ImagePendaftaran from '../../assets/imagePendaftaran.png'
import { ButtonIcon } from '../../components/molecules/ButtonIcon'
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline'

export const Pendaftaran = () => {
    return (
        <div className="w-full h-full flex items-center justify-center overflow-x-hidden px-[100px] py-20 bg-slate-100">

            <div className="absolute top-0 left-0 w-full z-[100]">
                <Navbar bgColor="bg-white" />
            </div>

            <div className="flex flex-col items-center justify-center gap-6">
                <div className="">
                    <img src={ImagePendaftaran} alt="gambar status" />
                </div>

                <div className="w-[840px] flex flex-col items-center justify-center gap-10">
                    <div className="text-center w-full ">
                        <h1 className='font-bold text-2xl'>Pendaftaran Berhasil</h1>

                        <p className=''>Silahkan cek email yang didaftarkan dan download bukti pendaftaran.  Jangan lupa untuk cek status pendaftaran kamu secara berkala dengan memasukkan ID Pendaftaran.</p>
                    </div>

                    {/* <div className="">
                      <button className='flex items-center justify-center gap-2 px-20 py-4 bg-blue-500 rounded-full text-white font-semibold cursor-pointer'>
                        <ArrowDownOnSquareIcon className='size-6' />
                        <p>Download Bukti Pendaftaran</p>
                      </button>
                    </div> */}

                </div>
            </div>

        </div>
    )
}
