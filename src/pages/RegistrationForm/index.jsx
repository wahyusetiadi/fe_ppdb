import React, { useState } from 'react';
import Navbar from '../../components/organisms/NavigasiBar';

const RegistrationForm = () => {
  const [gender, setGender] = useState('');

  return (

    <div className="w-full h-full flex items-center justify-center overflow-x-hidden px-[100px] py-20 bg-slate-100">
      <div className='absolute top-0 left-0 w-full z-[100]'>
        <Navbar bgColor="bg-white" />
      </div>

      {/* dante code */}
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
                <label class=" font-bold text-lg">Scan Akta Kelahiran</label>
                <label class="flex items-center border border-slate-200 rounded-md overflow-hidden w-full">
                  <span class="bg-blue-500 text-white px-5 py-4 cursor-pointer">Choose file</span>
                  <input type="file" class="hidden" />
                  <span class="px-4 py-2 text-gray-500 flex-grow">Masukkan Gambar</span>
                </label>
              </div>
              <div className="w-full flex flex-col gap-2">
                <label class=" font-bold text-lg">Scan Kartu Keluarga</label>
                <label class="flex items-center border border-slate-200 rounded-md overflow-hidden w-full">
                  <span class="bg-blue-500 text-white px-5 py-4 cursor-pointer">Choose file</span>
                  <input type="file" class="hidden" />
                  <span class="px-4 py-2 text-gray-500 flex-grow">Masukkan Gambar</span>
                </label>
              </div>

              <div className="w-full flex flex-col gap-2">
                <label class=" font-bold text-lg">Scan Ijazah TK</label>
                <label class="flex items-center border border-slate-200 rounded-md overflow-hidden w-full">
                  <span class="bg-blue-500 text-white  px-5 py-4 cursor-pointer">Choose file</span>
                  <input type="file" class="hidden" />
                  <span class="px-4 py-2 text-gray-500 flex-grow">Masukkan Gambar</span>
                </label>
              </div>

              <div className="w-full flex flex-col gap-2">
                <label class=" font-bold text-lg">Pas Foto 3x4 Latar Biru</label>
                <label class="flex items-center border border-slate-200 rounded-md overflow-hidden w-full">
                  <span class="bg-blue-500 text-white  px-5 py-4 cursor-pointer">Choose file</span>
                  <input type="file" class="hidden" />
                  <span class="px-4 py-2 text-gray-500 flex-grow">Masukkan Gambar</span>
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

      {/* <div className="w-full bg-slate-100 px-[100px] py-20">

          <div className="flex flex-col bg-white rounded-xl shadow-sm gap-10 p-10">


            <div className="flex flex-col w-full h-full gap-3">
              <h2 className="text-xl font-bold ">Formulir Pendaftaran</h2>
              <div className="border border-b-0 border-slate-300"></div>
            </div>

            <div className="flex gap-10">

              <div className="flex flex-col gap-6">

                <div className=" flex flex-col gap-2 h-[86px] w-[560px]">
                  <h1 className="font-bold size-4 text-nowrap h-6 w-[125px]">Nama Lengkap</h1>
                  <input type="text"
                    placeholder='Masukkan Nama Lengkap'
                    className=' p-4 gap-2.5 border border-gray-300 rounded-md ' />
                </div>

                <div className="flex flex-col gap-2 h-[86px] w-[560px]">
                  <h1 className="font-bold size-4 text-nowrap h-6 w-[125px]">Jenis Kelamin</h1>
                  <div className="flex items-center justify-start gap-10 p-4 border border-gray-300 rounded-md">
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

                <div className="flex flex-col gap-2 h-[86px] w-[560px]">
                  <h1 className='font-bold size-4 text-nowrap h-6 w-[125px]'>Agama</h1>
                  <select className=" p-4 gap-2.5 border border-gray-300 rounded-m  ">
                    <option value="">Pilih Agama</option>
                    <option value="islam">Islam</option>
                    <option value="kristen">Kristen</option>
                    <option value="katolik">Katolik</option>
                    <option value="hindu">Hindu</option>
                    <option value="buddha">Buddha</option>
                    <option value="konghucu">Konghucu</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 h-[86px] w-[560px]">
                  <h1 className='font-bold size-4 text-nowrap h-6 w-[125px]'>Tempat Lahir</h1>
                  <input type="text"
                    placeholder='Masukkan Tempat Lahir'
                    className=' p-4 gap-2.5  border border-gray-300 rounded-md ' />
                </div>

                <div className="flex flex-col gap-2 h-[86px] w-[560px]">
                  <h1 className='font-bold size-4 text-nowrap h-6 w-[125px]'>Tanggal Lahir</h1>
                  <input type="date"
                    className=' p-4 gap-2.5 border border-gray-300 rounded-md ' />
                </div>

                <div className="flex flex-col gap-2 h-full w-[560px]">
                  <h1 className='font-bold size-4 text-nowrap h-6 w-[125px]'>Alamat Tempat Tinggal</h1>
                  <textarea
                    placeholder="Masukkan Alamat Lengkap"
                    rows={4}
                    className="w-full p-4 gap-2.5 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full gap-6 ">

                <div className=" flex flex-col gap-2 h-[86px] w-full">
                  <h1 className="font-bold size-4 text-nowrap h-6 w-[125px]">No. Telepon Orang Tua</h1>
                  <input type="text"
                    placeholder='Masukkan No. Telepon Orang Tua'
                    className=' p-4 gap-2.5 border border-gray-300 rounded-md ' />
                </div>

                <div class="flex flex-col space-y-2">
                  <label class="text-gray-700 font-bold">Scan Akta Kelahiran</label>
                  <label class="flex items-center border border-gray-300 rounded-md overflow-hidden w-full">
                    <span class="bg-blue-500 text-white px-6 py-3 cursor-pointer">Choose file</span>
                    <input type="file" class="hidden" />
                    <span class="px-4 py-2 text-gray-500 flex-grow">Masukkan Gambar</span>
                  </label>
                </div>

                <div class="flex flex-col space-y-2">
                  <label class="text-gray-700 font-bold">Scan Kartu Keluarga</label>
                  <label class="flex items-center border border-gray-300 rounded-md overflow-hidden w-full">
                    <span class="bg-blue-500 text-white px-6 py-3 cursor-pointer">Choose file</span>
                    <input type="file" class="hidden" />
                    <span class="px-4 py-2 text-gray-500 flex-grow">Masukkan Gambar</span>
                  </label>
                </div>

                <div class="flex flex-col space-y-2">
                  <label class="text-gray-700 font-bold">Scan Ijazah TK</label>
                  <label class="flex items-center border border-gray-300 rounded-md overflow-hidden w-full">
                    <span class="bg-blue-500 text-white px-6 py-3 cursor-pointer">Choose file</span>
                    <input type="file" class="hidden" />
                    <span class="px-4 py-2 text-gray-500 flex-grow">Masukkan Gambar</span>
                  </label>
                </div>

                <div class="flex flex-col space-y-2">
                  <label class="text-gray-700 font-bold">Pas Foto 3x4 Latar Biru</label>
                  <label class="flex items-center border border-gray-300 rounded-md overflow-hidden w-full">
                    <span class="bg-blue-500 text-white px-6 py-3 cursor-pointer">Choose file</span>
                    <input type="file" class="hidden" />
                    <span class="px-4 py-2 text-gray-500 flex-grow">Masukkan Gambar</span>
                  </label>
                </div>

                <div className="flex justify-end  ">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Kirim Formulir
                  </button>
                </div>

              </div>

            </div>
          </div>


        </div> */}

    </div>
  );
};

export default RegistrationForm;