import React, { useEffect, useState } from "react";
import Navbar from "../../components/organisms/NavigasiBar";
import { createDataRegistration } from "../../api/api";
import { Link, useNavigate, useParams } from "react-router-dom";

const RegistrasiForm = () => {
  const [idRegistration, setIdRegistration] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [religion, setReligion] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [akte, setAkte] = useState(null);
  const [familyRegister, setFamilyRegister] = useState(null);
  const [tkCertificate, setTkCertificate] = useState(null);
  const [foto, setFoto] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  const handleFileChange = (setter) => (e) => {
    const file = e.target.files[0];
    if (file) {
      setter(file);
    }
  };

  //generateRandomId
  const generateRegistration = () => {
    const date = new Date();
    const randomNumber = Math.floor(Math.random() * 1000000);
    return `${date.getFullYear()}${
      date.getMonth() + 1
    }${date.getDate()}${randomNumber}`;
  };

  useEffect(() => {
    setIdRegistration(generateRegistration);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validasi field yang tidak boleh kosong
    if (
      !name ||
      !email ||
      !gender ||
      !religion ||
      !birthPlace ||
      !birthDate ||
      !address ||
      !parentPhone
    ) {
      alert("Harap isi semua bidang yang wajib diisi!");
      return;
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Format email tidak valid. Harap masukkan email yang benar.");
      return;
    }

    // Validasi file upload (jika harus diisi)
    if (!akte || !familyRegister || !tkCertificate || !foto) {
      alert("Harap unggah semua dokumen yang diperlukan!");
      return;
    }

    const formData = new FormData();
    formData.set("idRegistration", idRegistration);
    formData.set("name", name);
    formData.set("email", email);
    formData.set("gender", gender);
    formData.set("religion", religion);
    formData.set("birthPlace", birthPlace);
    formData.set("birthDate", birthDate);
    formData.set("address", address);
    formData.set("parentPhone", parentPhone);
    formData.set("akte", akte);
    formData.set("familyRegister", familyRegister);
    formData.set("tkCertificate", tkCertificate);
    formData.set("foto", foto);

    try {
      setIsSubmitting(true);
      const result = await createDataRegistration(formData);
      console.log("data berhasil dibuat", result);
      setTimeout(() => {
        navigate('/pendaftaran');
      }, 1000);
    } catch (err) {
      console.error("error get api", err);
      alert("Terjadi kesalahan saat mengirim data");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center overflow-x-hidden px-[100px] py-20 bg-slate-100">
      <div className="absolute top-0 left-0 w-full z-[100]">
        <Navbar bgColor="bg-white" />
      </div>

      {/* dante code */}
      <div className="w-[1240px] rounded-xl p-10 flex flex-col gap-10 mt-16 bg-white">
        <div className="w-full flex flex-col gap-3">
          <h1 className="font-bold text-[28px]">Formulir Pendaftaran</h1>
          <div className="border border-b-0 border-slate-300"></div>
        </div>

        <form
          onSubmit={handleSubmit}
          className=" w-full grid grid-cols-2 gap-10"
        >
          {/* input kiri */}
          <div className="w-full flex flex-col gap-6">
            {/* Nama Lengkap */}
            <div className="w-full flex flex-col gap-2">
              <label className="text-lg font-bold">Nama Lengkap</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-full rounded-lg p-4 border border-slate-200"
                placeholder="Masukkan Nama Lengkap"
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <label className="text-lg font-bold">Email aktif</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full rounded-lg p-4 border border-slate-200"
                placeholder="Masukkan Email Aktif"
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <label className="text-lg font-bold">Jenis Kelamin</label>
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
              <label className="text-lg font-bold">Agama</label>
              <select
                value={religion}
                onChange={(e) => setReligion(e.target.value)}
                className=" p-4 gap-2.5 border border-slate-200 rounded-m  "
              >
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
              <label className="text-lg font-bold">Tempat Lahir</label>
              <input
                value={birthPlace}
                onChange={(e) => setBirthPlace(e.target.value)}
                type="text"
                className="w-full rounded-lg p-4 border border-slate-200"
                placeholder="Masukkan Tempat Lahir"
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <label className="text-lg font-bold">Tanggal Lahir</label>
              <input
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                type="date"
                className=" p-4 gap-2.5 border border-slate-200 rounded-md "
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <label className="text-lg font-bold">Alamat Tempat Tinggal</label>
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
                <label className="text-lg font-bold">
                  No. Telepon Orang Tua
                </label>
                <input
                  value={parentPhone}
                  onChange={(e) => setParentPhone(e.target.value)}
                  type="text"
                  className="w-full rounded-lg p-4 border border-slate-200"
                  placeholder="Masukkan No. Telepon Orang Tua"
                />
              </div>

              <div className="w-full flex flex-col gap-2">
                <label className="font-bold text-lg">Scan Akta Kelahiran</label>
                <label className="flex items-center border border-slate-200 rounded-md overflow-hidden w-full">
                  <span
                    type="button"
                    className="bg-blue-500 text-white px-5 py-4 cursor-pointer"
                  >
                    Choose file
                  </span>
                  <input
                    onChange={handleFileChange(setAkte)}
                    type="file"
                    className="hidden"
                  />
                  <span className="px-4 py-2 text-gray-500 flex-grow">
                    {akte ? akte.name : "Upload File"}
                  </span>
                </label>
              </div>

              <div className="w-full flex flex-col gap-2">
                <label className="font-bold text-lg">Scan Kartu Keluarga</label>
                <label className="flex items-center border border-slate-200 rounded-md overflow-hidden w-full">
                  <span
                    type="button"
                    className="bg-blue-500 text-white px-5 py-4 cursor-pointer"
                  >
                    Choose file
                  </span>
                  <input
                    onChange={handleFileChange(setFamilyRegister)}
                    type="file"
                    className="hidden"
                  />
                  <span className="px-4 py-2 text-gray-500 flex-grow">
                    {familyRegister ? familyRegister.name : "upload file"}
                  </span>
                </label>
              </div>

              <div className="w-full flex flex-col gap-2">
                <label className="font-bold text-lg">Scan Ijazah TK</label>
                <label className="flex items-center border border-slate-200 rounded-md overflow-hidden w-full">
                  <span
                    type="button"
                    className="bg-blue-500 text-white px-5 py-4 cursor-pointer"
                  >
                    Choose file
                  </span>
                  <input
                    onChange={handleFileChange(setTkCertificate)}
                    type="file"
                    className="hidden"
                  />
                  <span className="px-4 py-2 text-gray-500 flex-grow">
                    {tkCertificate ? tkCertificate.name : "upload file"}
                  </span>
                </label>
              </div>

              <div className="w-full flex flex-col gap-2">
                <label className="font-bold text-lg">
                  Pas Foto 3x4 Latar Biru
                </label>
                <label className="flex items-center border border-slate-200 rounded-md overflow-hidden w-full">
                  <span
                    type="button"
                    className="bg-blue-500 text-white px-5 py-4 cursor-pointer"
                  >
                    Choose file
                  </span>
                  <input
                    onChange={handleFileChange(setFoto)}
                    type="file"
                    className="hidden"
                  />
                  <span className="px-4 py-2 text-gray-500 flex-grow">
                    {foto ? foto.name : "upload foto"}
                  </span>
                </label>
              </div>
            </div>

            {/* Button Kirim */}
            <div className=" text-white font-bold">
              {/* <Link to="/pendaftaran"> */}
              <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-20 py-4 rounded-lg font-bold text-white ${
                    isSubmitting
                      ? "bg-blue-300 cursor-not-allowed"
                      : "bg-blue-400 hover:bg-blue-800"
                  }`}
                >
                  {isSubmitting ?  "Mengirim..." : "Kirim Formulir"}
                </button>
              {/* </Link> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrasiForm;
