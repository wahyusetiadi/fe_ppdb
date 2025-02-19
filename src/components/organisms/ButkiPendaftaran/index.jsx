import React from 'react'
import LogoSekolah from '../../../assets/LogoSekolah.svg'
import LogoEduNEX from '../../../assets/Logo.svg'

export const ButkiPendaftaran = () => {
    return (
        <div>
            <div className="w-full flex items-center justify-between px-10 py-5 ">
                <div className="flex gap-3">
                    <img src={LogoSekolah} alt="" />
                    <p className='font-bold text-xl text-center flex items-center'>SD XYZ 1</p>
                </div>
                <div className="flex gap-2">
                    <img src={LogoEduNEX} alt="" />
                </div>

            </div>
            <hr />

    <div className="flex items-center justify-center pt-6">
        <h1 className='font-bold text-xl'>Bukti Pembayaran</h1>
    </div>

    <div className="flex items-center justify-center">
        <div className="">
            <img src="" alt="" />
        </div>

        <div className="">
            <p>ID Pendaftaran</p>
            <p>Tanggal Registrasi</p>
        </div>

    </div>

        <div className="">
            <p>Nama Lengkap</p>
            <p>Jenis Kelamin</p>
            <p>Agama</p>
            <p>Tempat, Tanggal Lahir</p>
            <p>Alamat</p>
            <p>No. Telp Orang Tua</p>
        </div>

        </div>
    )
}
