import React, { useState } from 'react'
import { ContentLayout } from '../../components/organisms/ContentLayout'



export const FormEdit = () => {

    const { id } = useParams();

 const [idRegistration, setIdRegistration] = useState('')
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [religion, setReligion] = useState('')
    const [birthPlace, setBirthPlace] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [address, setAddress] = useState('')
    const [parentPhone, setParentPhone] = useState('')
    const [akte, setAkte] = useState(null)
    const [familyRegister, setFamilyRegister] = useState(null)
    const [tkCertificate, setTkCertificate] = useState(null)
    const [foto, setFoto] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            idRegistration: "20250221001",
            name,
            gender,
            religion,
            birthPlace,
            birthDate,
            address,
            parentPhone,
            akte,
            familyRegister,
            tkCertificate,
            foto
        }
        try {
            const result = await createDataRegistration(payload);
            console.log('data berhasil dibuat', result);

        } catch (err) {
            console.error("error get api", err);
            throw err;
        }

    }



     const [files, setFiles] = useState({
            akte: null,
            familyRegister: null,
            tkCertificate: null,
            foto: null
        });
    
        const handleFileChange = (e, field) => {
            const file = e.target.files[0];
            setFiles(prev => ({ ...prev, [field]: file }));
        };
  return (
      <ContentLayout>
                <div className="w-full h-full flex items-center justify-center overflow-x-hidden bg-slate-100">
                    <div className="w-[1240px] rounded-xl p-10 flex flex-col gap-10 m-6 bg-white">
                        <div className="flex flex-col w-full gap-4">
                            <div className="flex flex-col items-start ">
                                <button className='text-blue-600 font-bold'>Kembali</button>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <h1 className='font-bold text-2xl'>Edit Data</h1>
                            </div>
                        </div>
    
    
                        <form onSubmit={handleSubmit} className=" w-full grid grid-cols-2 gap-10">
                            {/* input kiri */}
                            <div className="w-full flex flex-col gap-6">
                                {/* Nama Lengkap */}
                                <div className="w-full flex flex-col gap-2">
                                    <label className='text-lg font-bold'>Nama Lengkap</label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className='w-full rounded-lg p-4 border border-slate-200' placeholder='Masukkan Nama Lengkap' />
                                </div>
    
                                <div className="w-full flex flex-col gap-2">
                                    <label className='text-lg font-bold'>Jenis Kelamin</label>
                                    <div className="flex items-center justify-start gap-10 p-4 border border-slate-200 rounded-md">
                                        <div className="flex gap-2">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="laki-laki"
                                                checked={gender === "laki-laki"}
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
                                                checked={gender === "perempuan"}
                                                className="mr-2 gap-2"
                                                onChange={(e) => setGender(e.target.value)}
                                            />
                                            <span>Perempuan</span>
                                        </div>
                                    </div>
    
                                </div>
    
                                <div className="w-full flex flex-col gap-2">
                                    <label className='text-lg font-bold'>Agama</label>
                                    <select value={religion} onChange={(e) => setReligion(e.target.value)} className=" p-4 gap-2.5 border border-slate-200 rounded-m  ">
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
                                    <input value={birthPlace} onChange={(e) => setBirthPlace(e.target.value)} type="text" className='w-full rounded-lg p-4 border border-slate-200' placeholder='Masukkan Tempat Lahir' />
                                </div>
    
                                <div className="w-full flex flex-col gap-2">
                                    <label className='text-lg font-bold'>Tanggal Lahir</label>
                                    <input value={birthDate} onChange={(e) => setBirthDate(e.target.value)} type="date"
                                        className=' p-4 gap-2.5 border border-slate-200 rounded-md ' />
                                </div>
    
                                <div className="w-full flex flex-col gap-2">
                                    <label className='text-lg font-bold' >Alamat Tempat Tinggal</label>
                                    <textarea
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
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
                                        <input value={parentPhone}
                                            onChange={(e) => setParentPhone(e.target.value)} type="text" className='w-full rounded-lg p-4 border border-slate-200' placeholder='Masukkan No. Telepon Orang Tua' />
    
                                    </div>
    
    
                                    <div className="w-full flex flex-col gap-4">
                                        {[
                                            { label: "Scan Akta Kelahiran", field: "akte" },
                                            { label: "Scan Kartu Keluarga", field: "familyRegister" },
                                            { label: "Scan Ijazah TK", field: "tkCertificate" },
                                            { label: "Pas Foto 3x4 Latar Biru", field: "foto" },
                                        ].map(({ label, field }) => (
                                            <div key={field} className="w-full flex flex-col gap-2">
                                                <label className="font-bold text-lg">{label}</label>
                                                <label className="flex items-center border border-slate-200 rounded-md overflow-hidden w-full">
                                                    <span className="bg-blue-500 text-white px-5 py-4 cursor-pointer">
                                                        Choose file
                                                    </span>
                                                    <input
                                                        type="file"
                                                        className="hidden"
                                                        onChange={(e) => handleFileChange(e, field)}
                                                    />
                                                    <span className="px-4 py-2 text-gray-500 flex-grow">
                                                        {files[field] ? `${files[field].name} (${files[field].type})` : "Masukkan File"}
                                                    </span>
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
    
                                {/* Button Kirim */}
                                <div className=" text-white font-bold">
                                    <button className='px-20 py-4 bg-blue-500 rounded-lg cursor-pointer'>Kirim Formulir</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
    
            </ContentLayout>
  )
}
