import React from 'react'
import LogoSekolah from '../../assets/LogoSekolah.svg'
import LogoEduNEX from '../../assets/Logo.svg'
import DummyBuktiPendaftaran from '../../assets/DummyBuktiPendaftaran.png'

export const ButkiPendaftaran = () => {
    return (
        <div className="w-full flex justify-center">
            <div className='w-[595px] shadow text-sm pb-2'>
                <div className="w-full flex items-center justify-between px-10 py-5 ">
                    <div className="flex gap-3">
                        <img src={LogoSekolah} alt="" />
                        <p className='font-bold text-xl text-center flex items-center'>SD XYZ 1</p>
                    </div>
                    <div className="flex gap-2">
                        <img src={LogoEduNEX} alt="" />
                    </div>

                </div>
                <hr className='text-slate-300' />
                {/* <div className="">
                    <div className="w-full flex items-center justify-center pt-6">
                        <h1 className='font-bold text-xl'>Bukti Pendaftaran</h1>
                    </div>
                    <div className="">
                        <div className="w-[515px] border flex items-center justify-center gap-6">
                            <div className="">
                                <img src={DummyBuktiPendaftaran} alt="" />
                            </div>

                            <div className="">
                                <div className="flex gap-2">
                                    <label className='w-[224px]'>ID Pendaftaran</label>
                                    <input type="text" disabled value={''} placeholder='123456' />
                                </div>
                                <hr className='text-slate-300' className='text-slate-300' />
                                <div className="flex gap-2">
                                    <label className='w-[224px]'>Tanggal Registrasi</label>
                                    <input type="text" disabled value={''} placeholder='123456' />
                                </div>
                                <hr className='text-slate-300' className='text-slate-300' />
                            </div>

                        </div>

                        <div className="w-[515px] border flex gap-3.5">
                            <form className='flex flex-col gap-4'>
                                <div className="flex gap-2">
                                    <label className='w-[224px]'>Nama Lengkap</label>
                                    <input type="text" disabled value={''} placeholder='123456' />
                                </div>
                                <hr className='text-slate-300' className='text-slate-300' />
                                <div className="flex gap-2">
                                    <label className='w-[224px]'>Jenis Kelamin</label>
                                    <input type="text" disabled value={''} placeholder='123456' />
                                </div>
                                <hr className='text-slate-300' className='text-slate-300' />
                                <div className="flex gap-2">
                                    <label className='w-[224px]'>Agama</label>
                                    <input type="text" disabled value={''} placeholder='123456' />
                                </div>
                                <hr className='text-slate-300' className='text-slate-300' />
                                <div className="flex gap-2">
                                    <label className='w-[224px]'>Tempat, Tanggal Lahir</label>
                                    <input type="text" disabled value={''} placeholder='123456' />
                                </div>
                                <hr className='text-slate-300' className='text-slate-300' />
                                <div className="flex gap-2">
                                    <label className='w-[224px]'>Alamat</label>
                                    <input type="text" disabled value={''} placeholder='123456' />
                                </div>
                                <hr className='text-slate-300' className='text-slate-300' />
                                <div className="flex gap-2">
                                    <label className='w-[224px]'>No. Telp Orang Tua</label>
                                    <input type="text" disabled value={''} placeholder='123456' />
                                </div>
                                <hr className='text-slate-300' className='text-slate-300' />
                            </form>


                        </div>

                    </div>
                </div> */}

                <div className="w-full text-center px-10">
                    <h1 className='text-xl font-bold p-8'>Bukti Pendaftaran</h1>
                    <div className="text-start flex gap-6">
                        <div className="w-[120px] h-[160px] bg-slate-900">
                            <img src={DummyBuktiPendaftaran} alt="" />
                        </div>
                        <div className="flex flex-col gap-3.5">
                            <div className="flex gap-2">
                                <p className='w-[160px] font-bold'>ID Pendaftaran</p>
                                <p>20240222-001</p>
                            </div>
                            <hr className='text-slate-300' />
                            <div className="flex gap-2">
                                <p className='w-[160px] font-bold'>Tanggal Registrasi</p>
                                <p>15 Februari 2025 | 10:25 WITA</p>
                            </div>
                            <hr className='text-slate-300' />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3.5 mt-12 px-10">
                    <div className="flex gap-2">
                        <p className='w-[224px] font-bold'>Nama Lengkap</p>
                        <p>Maulana</p>
                    </div>
                    <hr className='text-slate-300' />
                    <div className="flex gap-2">
                        <p className='w-[224px] font-bold'>Jenis Kelamin</p>
                        <p>Laki-laki</p>
                    </div>
                    <hr className='text-slate-300' />
                    <div className="flex gap-2">
                        <p className='w-[224px] font-bold'>Agama</p>
                        <p>Islam</p>
                    </div>
                    <hr className='text-slate-300' />
                    <div className="flex gap-2">
                        <p className='w-[224px] font-bold'>Tempat, Tanggal Lahir</p>
                        <p>Kandangan, 22 Februari 2002</p>
                    </div>
                    <hr className='text-slate-300' />
                    <div className="flex gap-2">
                        <p className='min-w-[224px] font-bold'>Alamat</p>
                        <p>Jl. Taruna Praja Raya, Loktabat Utara, Kec. Banjarbaru Utara, Kota Banjar Baru, Kalimantan Selatan 70714</p>
                    </div>
                    <hr className='text-slate-300' />
                    <div className="flex gap-2">
                        <p className='w-[224px] font-bold'>No. Telp Orang Tua</p>
                        <p>+6281234567890</p>
                    </div>
                    <hr className='text-slate-300' />
                </div>
            </div>
        </div>
    )
}
