import React from "react";
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import longArrow from '../../../assets/ppdbLongArrow.svg'

const AlurPendaftaran = () => {
  return (
    <div className="w-full" id="alur pendaftaran">
      <div className="w-full bg-slate-100 flex flex-col items-center justify-center gap-10 p-[100px]  rounded-lg shadow-lg">

        <div className="w-full flex flex-col text-center gap-2 items-center justify-center">
          <h1 className="text-[40px] font-bold text-gray-900 text-nowrap">Alur Pendaftaran PPDB SD XYZ</h1>
          <p className="text-gray-600 mt-2 text-xl w-[798px]">Ikuti langkah-langkah berikut untuk mendaftarkan putra-putri Anda di SD XYZ:</p>
        </div>

        {/* card */}
        <div className="flex flex-col gap-10">
          <div className="w-full  flex items-center justify-center gap-6">

            <div className="flex flex-col gap-6 bg-white shadow-lg rounded-lg p-6 w-1/3 min-h-[30vh]">
              <h1 className="font-bold text-[22px]">Persiapan Dokumen</h1>
              <div className="">
                <ul className="list-disc">
                  <li>
                    <p>Scan Akta Kelahiran</p>
                  </li>
                  <li>
                    <p>Scan Kartu Keluarga</p>
                  </li>
                  <li>
                    <p>Scan Ijazah TK(jika ada)</p>

                  </li>
                  <li>
                    <p>P as Foto 3x4 Latar Biru</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="">
              <ArrowLongRightIcon className="size-10 text-blue-500 " />
            </div>

            <div className="flex flex-col gap-6  bg-white shadow-lg rounded-lg p-6 w-1/3 min-h-[30vh]">
              <h1 className="font-bold text-[22px] text-wrap text-center">Kunjungi Website Pendaftaran</h1>
              <p className="break-words">Masuk ke website resmi pendaftaran PPDB SD XYZ di www.sdxyz.sch.id</p>
            </div>

            <div className="">
              <ArrowLongRightIcon className="size-10 text-blue-500 " />
            </div>

            <div className="flex flex-col gap-6  bg-white shadow-lg rounded-lg p-6 w-1/3 min-h-[30vh]">
              <h1 className="font-bold text-[22px] text-wrap text-center">Isi Formulir Pendaftaran</h1>
              <p className="break-words">Isi formulir pendaftaran secara lengkap dan akurat. Pastikan semua informasi yang dimasukkan sudah benar.</p>
            </div>

          </div>

          <div className="">
            <img src={longArrow} alt="" className="w-[1231px] h-9" />
          </div>

          <div className="w-full flex items-center justify-center gap-6">

            <div className="flex flex-col gap-6 bg-white shadow-lg rounded-lg p-6 w-1/3 min-h-[30vh]">
              <h1 className="font-bold text-[22px] text-wrap text-center">Verifikasi Data oleh Sekolah</h1>
              <p className="break-words">Tim kami akan memverifikasi data yang telah Anda masukkan. Jika ada kesalahan, kami akan menghubungi Anda untuk koreksi.</p>
            </div>

            <div className="">
              <ArrowLongRightIcon className="size-10 text-blue-500 " />
            </div>

            <div className="flex flex-col gap-6  bg-white shadow-lg rounded-lg p-6 w-1/3 min-h-[30vh]">
              <h1 className="font-bold text-[22px] text-wrap text-center">Pembayaran Biaya Pendaftaran</h1>
              <p className="break-words">Lakukan pembayaran dan Anda akan menerima bukti pembayaran setelah transaksi selesai.</p>
            </div>

            <div className="">
              <ArrowLongRightIcon className="size-10 text-blue-500 " />
            </div>

            <div className="flex flex-col gap-6  bg-white shadow-lg rounded-lg p-6 w-1/3 min-h-[30vh]">
              <h1 className="font-bold text-[22px] text-wrap text-center">Pengumuman Hasil Seleksi</h1>
              <p className="break-words">Setelah proses seleksi, hasil penerimaan peserta didik baru akan diumumkan melalui website dan nomor telepon yang terdaftar.</p>
            </div>

          </div>


        </div>

      </div>
    </div>





    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px- text-left">
    //     <div className="bg-white shadow-lg rounded-xl p-6">
    //       <h3 className="font-semibold">Persiapkan Dokumen</h3>
    //       <ul className="list-disc ml-5 mt-2 text-gray-600">
    //         <li>Scan Akta Kelahiran</li>
    //         <li>Scan Kartu Keluarga</li>
    //         <li>Scan Ijazah TK (Jika ada)</li>
    //         <li>Pas Foto 3x4 Latar Biru</li>
    //       </ul>
    //     </div>
    //     <div className="bg-white shadow-lg rounded-xl p-6">
    //       <h3 className="font-semibold">Kunjungi Website Pendaftaran</h3>
    //       <p className="text-gray-600 mt-2">Masuk ke website resmi pendaftaran PPDB SD XYZ di <a href="#" className="text-blue-500">www.sdxyz.sch.id</a></p>
    //     </div>

    //     <div className="bg-white shadow-lg rounded-xl p-6">
    //       <h3 className="font-semibold">Isi Formulir Pendaftaran</h3>
    //       <p className="text-gray-600 mt-2">Isi formulir pendaftaran secara lengkap dan akurat. Pastikan semua informasi yang dimasukkan sudah benar.</p>
    //     </div>
    //   </div>

    //   <div className="my-6 border-t border-gray-300 w-3/4 mx-auto"></div>

    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
    //     <div className="bg-white shadow-lg rounded-xl p-6">
    //       <h3 className="font-semibold">Verifikasi Data oleh Sekolah</h3>
    //       <p className="text-gray-600 mt-2">Tim kami akan memverifikasi data yang telah Anda masukkan. Jika ada kesalahan, kami akan menghubungi Anda.</p>
    //     </div>

    //     <div className="bg-white shadow-lg rounded-xl p-6">
    //       <h3 className="font-semibold">Pembayaran Biaya Pendaftaran</h3>
    //       <p className="text-gray-600 mt-2">Lakukan pembayaran dan Anda akan menerima bukti pembayaran setelah transaksi selesai.</p>
    //     </div>

    //     <div className="bg-white shadow-lg rounded-xl p-6">
    //       <h3 className="font-semibold">Pengumuman Hasil Seleksi</h3>
    //       <p className="text-gray-600 mt-2">Hasil penerimaan peserta didik baru akan diumumkan melalui website dan nomor telepon yang terdaftar.</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AlurPendaftaran;
