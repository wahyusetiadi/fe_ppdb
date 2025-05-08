import React, { useEffect, useState } from 'react';
import LogoSekolah from '../../assets/LogoSekolah.svg';
import LogoEduNEX from '../../assets/Logo.svg';
import { useParams } from 'react-router-dom';
import { getDataByIdStatus } from '../../api/api';
import './style.css';

export const BuktiPendaftaran = () => {
    const { id } = useParams(); // Ambil ID dari URL
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getDataByIdStatus(id);
                setData(response);
            } catch (error) {
                console.error('Gagal memuat data pendaftaran:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleDownloadPDF = () => {
        window.open(`https://ppdb.edunex.id/api/registration/${id}/print`, '_blank');
    };

    if (!data) return <div className="text-center mt-10">Memuat data pendaftaran...</div>;

    return (
        <div id="bukti-pendaftaran" className="w-full flex justify-center relative">
            {/* Tombol Download */}
            <button
                onClick={handleDownloadPDF}
                className="absolute top-5 right-5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
            >
                Download PDF
            </button>

            <div className='w-[595px] shadow text-sm pb-2'>
                <div className="w-full flex items-center justify-between px-10 py-5">
                    <div className="flex gap-3">
                        <img src={LogoSekolah} alt="Logo Sekolah" />
                        <p className='font-bold text-xl text-center flex items-center'>SD XYZ 1</p>
                    </div>
                    <div className="flex gap-2">
                        <img src={LogoEduNEX} alt="Logo EduNEX" />
                    </div>
                </div>
                <hr className='text-slate-300' />

                <div className="w-full text-center px-10">
                    <h1 className='text-xl font-bold p-8'>Bukti Pendaftaran</h1>
                    <div className="text-start flex gap-6">
                        <div className="w-[120px] h-[160px] bg-slate-900">
                            <img src={`https://ppdb.edunex.id/api/${data.foto}`} alt="Foto Pendaftar" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-3.5">
                            <div className="flex gap-2">
                                <p className='w-[160px] font-bold'>ID Pendaftaran:</p>
                                <p>{data.idRegistration}</p>
                            </div>
                            <hr className='text-slate-300' />
                            <div className="flex gap-2">
                                <p className='w-[160px] font-bold'>Tanggal Registrasi:</p>
                                <p>{data.dibuat_tanggal} | {data.dibuat_jam}</p>
                            </div>
                            <hr className='text-slate-300' />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3.5 mt-12 px-10">
                    <div className="flex gap-2">
                        <p className='w-[224px] font-bold'>Nama Lengkap:</p>
                        <p>{data.name}</p>
                    </div>
                    <hr className='text-slate-300' />
                    <div className="flex gap-2">
                        <p className='w-[224px] font-bold'>Jenis Kelamin:</p>
                        <p>{data.gender}</p>
                    </div>
                    <hr className='text-slate-300' />
                    <div className="flex gap-2">
                        <p className='w-[224px] font-bold'>Agama:</p>
                        <p>{data.religion}</p>
                    </div>
                    <hr className='text-slate-300' />
                    <div className="flex gap-2">
                        <p className='w-[224px] font-bold'>Tempat, Tanggal Lahir:</p>
                        <p>{data.birthPlace}, {data.birthDate}</p>
                    </div>
                    <hr className='text-slate-300' />
                    <div className="flex gap-2">
                        <p className='min-w-[224px] font-bold'>Alamat:</p>
                        <p>{data.address}</p>
                    </div>
                    <hr className='text-slate-300' />
                    <div className="flex gap-2">
                        <p className='w-[224px] font-bold'>No. Telp Orang Tua:</p>
                        <p>{data.parentPhone}</p>
                    </div>
                    <hr className='text-slate-300' />
                </div>
            </div>
        </div>
    );
};
