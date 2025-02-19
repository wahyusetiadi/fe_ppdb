import React, { useState } from 'react';
import Navbar from '../../components/organisms/NavigasiBar';

const RegistrasiForm = () => {
  const [gender, setGender] = useState('');

  return (

    <div className="w-full h-full flex items-center justify-center overflow-x-hidden px-[100px] py-20 bg-slate-100">
      
      <div className="">
        <div className="">
            <h1>Kembali</h1>
        </div>

        <div className="">
          <h1>Tambah Data</h1>
        </div>
      </div>
    
      <div className="w-[1240px] rounded-xl p-10 flex flex-col gap-10 mt-16 bg-white">
        <div className="w-full flex flex-col gap-3">
          <h1 className='font-bold text-[28px]'>Formulir Pendaftaran</h1>
          <div className="border border-b-0 border-slate-300"></div>
        </div>

        <div className=" w-full grid grid-cols-2 gap-10">
          {/* input kiri */}
          <div className="w-full flex flex-col gap-6">
            {/* Nama Lengkap */}
            <div className="w-full flex flex-col gap-2">
              <label className='text-lg font-bold'>Nama Lengkap</label>
              <input type="text" className='w-full rounded-lg p-4 border border-slate-200' placeholder='Masukkan Nama Lengkap' />
            </div>

            <div className="w-full flex flex-col gap-2">
              <label className='text-lg font-bold'>Jenis Kelamin</label>
              <div className="flex items-center justify-start gap-10 p-4 border border-slate-200 rounded-md">
                <div className="flex gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="laki-laki"
                    className="mr-2 gap-2"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span>Laki-laki</span>
                </div>

                <div className="flex gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="perempuan"
                    className="mr-2 gap-2"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span>Perempuan</span>
                </div>
              </div>

            </div>

            <div className="w-full flex flex-col gap-2">
              <label className='text-lg font-bold'>Agama</label>
              <select className=" p-4 gap-2.5 border border-slate-200 rounded-m  ">
                <option value="">Pilih Agama</option>
                <option value="islam">Islam</option>
                <option value="kristen">Kristen</option>
                <option value="katolik">Katolik</option>
                <option value="hindu">Hindu</option>
                <option value="buddha">Buddha</option>
                <option value="konghucu">Konghucu</option>
              </select>
            </div>

            <div className="w-full flex flex-col gap-2">
              <label className='text-lg font-bold'>Tempat Lahir</label>
              <input type="text" className='w-full rounded-lg p-4 border border-slate-200' placeholder='Masukkan Tempat Lahir' />
            </div>

            <div className="w-full flex flex-col gap-2">
              <label className='text-lg font-bold'>Tanggal Lahir</label>
              <input type="date"
                className=' p-4 gap-2.5 border border-slate-200 rounded-md ' />
            </div>

            <div className="w-full flex flex-col gap-2">
              <label className='text-lg font-bold' >Alamat Tempat Tinggal</label>
              <textarea
                placeholder="Masukkan Alamat Lengkap"
                rows={4}
                className="w-full p-4 gap-2.5 border border-slate-200 rounded-md"
              />
            </div>
          </div>

          {/* input kanan */}
          <div className="w-full flex flex-col items-end justify-between">
            <div className="w-full flex flex-col gap-6">
              <div className="w-full flex flex-col gap-2">
                <label className='text-lg font-bold'>No. Telepon Orang Tua</label>
                <input type="text" className='w-full rounded-lg p-4 border border-slate-200' placeholder='Masukkan No. Telepon Orang Tua' />

              </div>

              <div className="w-full flex flex-col gap-2">
                <label className="font-bold text-lg">Scan Akta Kelahiran</label>
                <label className="flex items-center border border-slate-200 rounded-md overflow-hidden w-full">
                  <button type="button" className="bg-blue-500 text-white px-5 py-4 cursor-pointer">
                    Choose file
                  </button>
                  <input type="file" className="hidden" />
                  <span className="px-4 py-2 text-gray-500 flex-grow">Masukkan File</span>
                </label>
              </div>


              <div className="w-full flex flex-col gap-2">
                <label className="font-bold text-lg">Scan Kartu Keluarga</label>
                <label className="flex items-center border border-slate-200 rounded-md overflow-hidden w-full">
                  <button type="button" className="bg-blue-500 text-white px-5 py-4 cursor-pointer">
                    Choose file
                  </button>
                  <input type="file" className="hidden" />
                  <span className="px-4 py-2 text-gray-500 flex-grow">Masukkan File</span>
                </label>
              </div>

              <div className="w-full flex flex-col gap-2">
                <label className="font-bold text-lg">Scan Ijazah TK</label>
                <label className="flex items-center border border-slate-200 rounded-md overflow-hidden w-full">
                  <button type="button" className="bg-blue-500 text-white px-5 py-4 cursor-pointer">
                    Choose file
                  </button>
                  <input type="file" className="hidden" />
                  <span className="px-4 py-2 text-gray-500 flex-grow">Masukkan File</span>
                </label>
              </div>

              <div className="w-full flex flex-col gap-2">
                <label className="font-bold text-lg">Pas Foto 3x4 Latar Biru</label>
                <label className="flex items-center border border-slate-200 rounded-md overflow-hidden w-full">
                  <button type="button" className="bg-blue-500 text-white px-5 py-4 cursor-pointer">
                    Choose file
                  </button>
                  <input type="file" className="hidden" />
                  <span className="px-4 py-2 text-gray-500 flex-grow">Masukkan File</span>
                </label>
              </div>

            </div>

            {/* Button Kirim */}
            <div className=" text-white font-bold">
              <button className='px-20 py-4 bg-blue-500 rounded-lg cursor-pointer'>Kirim Formulir</button>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default RegistrasiForm;