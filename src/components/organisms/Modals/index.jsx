import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'

export const Modals = () => {
    return (
        <div className='w-[720px] flex flex-col gap-8 bg-white z-50 rounded-lg p-8'>
            <div className="">
                <div className="flex w-full justify-between items-center">
                    <h1>Detail Siswa</h1>
                    <XMarkIcon className='size-5 text-black' />
                </div>
                <hr className='mt-4 text-slate-300' />
            </div>

            <div className="w-full">
                <form className='flex flex-col gap-4'>
                    <div className="flex gap-2">
                        <label className='w-[224px]'>ID Pendaftaran</label>
                        <input type="text" disabled value={''} placeholder='123456' className=' ' />
                    </div>
                    <hr className='text-slate-300' />
                    <div className="flex gap-2">
                        <label className='w-[224px]'>Tanggal Registrasi</label>
                        <input type="text" disabled value={''} placeholder='123456' />
                    </div>
                    <hr className='text-slate-300'/>
                    <div className="flex gap-2">
                        <label className='w-[224px]'>Nama Lengkap</label>
                        <input type="text" disabled value={''} placeholder='123456' />
                    </div>
                    <hr className='text-slate-300'/>
                    <div className="flex gap-2">
                        <label className='w-[224px]'>Jenis Kelamin</label>
                        <input type="text" disabled value={''} placeholder='123456' />
                    </div>
                    <hr className='text-slate-300'/>
                    <div className="flex gap-2">
                        <label className='w-[224px]'>Agama</label>
                        <input type="text" disabled value={''} placeholder='123456' />
                    </div>
                    <hr className='text-slate-300'/>
                    <div className="flex gap-2">
                        <label className='w-[224px]'>Tempat, Tanggal Lahir</label>
                        <input type="text" disabled value={''} placeholder='123456' />
                    </div>
                    <hr className='text-slate-300'/>
                    <div className="flex gap-2">
                        <label className='w-[224px]'>Alamat</label>
                        <input type="text" disabled value={''} placeholder='123456' />
                    </div>
                    <hr className='text-slate-300'/>
                    <div className="flex gap-2">
                        <label className='w-[224px]'>No. Telp Orang Tua</label>
                        <input type="text" disabled value={''} placeholder='123456' />
                    </div>
                    <hr className='text-slate-300'/>
                    <div className="flex gap-2">
                        <label className='w-[224px]'>Dokumen</label>
                        <input type="text" disabled value={''} placeholder='123456' />
                    </div>
                    <hr className='text-slate-300'/>
                </form>
            </div>

            <div className="flex justify-between">
                <button className='bg-red-100 cursor-pointer rounded-lg py-2 px-6'>Hapus</button>

                <div className="flex gap-2 items-center ">
                    <p className='font-bold'>Status :</p>
                    <button className='bg-yellow-100 cursor-pointer py-1 px-5'>Menunggu</button>
                </div>

                <button className='bg-blue-100 cursor-pointer rounded-lg py-2 px-3'>Edit</button>
            </div>
        </div>
    )
}
