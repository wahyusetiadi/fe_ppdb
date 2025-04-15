import React, { useEffect, useState } from "react";
import { ContentLayout } from "../../components/organisms/ContentLayout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editDataRegistration, getDataById } from "../../api/api";

export const FormEdit = () => {
  const { id } = useParams();

  const [idRegistration, setIdRegistration] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [religion, setReligion] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [email, setEmail] = useState("");

  // File objects untuk upload
  const [akte, setAkte] = useState(null);
  const [familyRegister, setFamilyRegister] = useState(null);
  const [tkCertificate, setTkCertificate] = useState(null);
  const [foto, setFoto] = useState(null);

  // Nama file yang ditampilkan di UI
  const [akteFileName, setAkteFileName] = useState("Belum dipilih");
  const [familyRegisterFileName, setFamilyRegisterFileName] =
    useState("Belum dipilih");
  const [tkCertificateFileName, setTkCertificateFileName] =
    useState("Belum dipilih");
  const [fotoFileName, setFotoFileName] = useState("Belum dipilih");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataEdit = async () => {
      try {
        const response = await getDataById(id);
        console.log("Response", response);
        if (response) {
          setIdRegistration(response.idRegistration || "");
          setName(response.name || "");
          setGender(response.gender || "");
          setReligion(response.religion || "");
          setBirthPlace(response.birthPlace || "");
          setBirthDate(response.birthDate || "");
          setAddress(response.address || "");
          setParentPhone(response.parentPhone || "");
          setEmail(response.email || "");

          // Set nama file yang sudah ada
          if (response.akte) {
            // Ambil nama file dari path jika perlu
            const akteName =
              typeof response.akte === "string"
                ? response.akte.split("/").pop()
                : response.akte.name || response.akte;
            setAkteFileName(akteName);
          }

          if (response.familyRegister) {
            const familyName =
              typeof response.familyRegister === "string"
                ? response.familyRegister.split("/").pop()
                : response.familyRegister.name || response.familyRegister;
            setFamilyRegisterFileName(familyName);
          }

          if (response.tkCertificate) {
            const tkName =
              typeof response.tkCertificate === "string"
                ? response.tkCertificate.split("/").pop()
                : response.tkCertificate.name || response.tkCertificate;
            setTkCertificateFileName(tkName);
          }

          if (response.foto) {
            const fotoName =
              typeof response.foto === "string"
                ? response.foto.split("/").pop()
                : response.foto.name || response.foto;
            setFotoFileName(fotoName);
          }
        }
      } catch (error) {
        console.error("failed fetch data", error);
        throw error;
      }
    };
    fetchDataEdit();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("idRegistration", idRegistration);
    formData.set("name", name);
    formData.set("gender", gender);
    formData.set("religion", religion);
    formData.set("birthPlace", birthPlace);
    formData.set("birthDate", birthDate);
    formData.set("address", address);
    formData.set("parentPhone", parentPhone);
    formData.set("email", email);

    if (akte) formData.set("akte", akte);
    if (familyRegister) formData.set("familyRegister", familyRegister);
    if (tkCertificate) formData.set("tkCertificate", tkCertificate);
    if (foto) formData.set("foto", foto);

    try {
      const result = await editDataRegistration(id, formData); // pastikan API-nya menerima FormData
      console.log("Data berhasil diupdate", result);
      navigate("/data-registrasi");
    } catch (err) {
      console.error("Gagal update data", err);
    }
  };

  const handleFileChange = (setter, fileNameSetter) => (e) => {
    const file = e.target.files[0];
    if (file) {
      setter(file);
      fileNameSetter(file.name);
    }
  };

  return (
    <ContentLayout>
      <div className="w-full h-full flex items-center justify-center overflow-x-hidden bg-slate-100">
        <div className="w-[1240px] rounded-xl p-10 flex flex-col gap-10 m-6 bg-white">
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-col items-start ">
              <Link to="/data-registrasi">
                <button className="text-blue-600 font-bold cursor-pointer">
                  Kembali
                </button>
              </Link>
            </div>
            <div className="flex items-center justify-center w-full">
              <h1 className="font-bold text-2xl">Edit Data</h1>
            </div>
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
                <label className="text-lg font-bold">Email</label>
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
                <label className="text-lg font-bold">
                  Alamat Tempat Tinggal
                </label>
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
                  <label className="font-bold text-lg">
                    Scan Akta Kelahiran
                  </label>
                  <label className="flex items-center border border-slate-200 rounded-md overflow-hidden w-full">
                    <span
                      type="button"
                      className="bg-blue-500 text-white px-5 py-4 cursor-pointer"
                    >
                      Choose file
                    </span>
                    <input
                      onChange={handleFileChange(setAkte, setAkteFileName)}
                      type="file"
                      className="hidden"
                    />
                    <span className="px-4 py-2 text-gray-500 flex-grow">
                      {akteFileName}
                    </span>
                  </label>
                </div>

                <div className="w-full flex flex-col gap-2">
                  <label className="font-bold text-lg">
                    Scan Kartu Keluarga
                  </label>
                  <label className="flex items-center border border-slate-200 rounded-md overflow-hidden w-full">
                    <span
                      type="button"
                      className="bg-blue-500 text-white px-5 py-4 cursor-pointer"
                    >
                      Choose file
                    </span>
                    <input
                      onChange={handleFileChange(
                        setFamilyRegister,
                        setFamilyRegisterFileName
                      )}
                      type="file"
                      className="hidden"
                    />
                    <span className="px-4 py-2 text-gray-500 flex-grow">
                      {familyRegisterFileName}
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
                      onChange={handleFileChange(
                        setTkCertificate,
                        setTkCertificateFileName
                      )}
                      type="file"
                      className="hidden"
                    />
                    <span className="px-4 py-2 text-gray-500 flex-grow">
                      {tkCertificateFileName}
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
                      onChange={handleFileChange(setFoto, setFotoFileName)}
                      type="file"
                      className="hidden"
                    />
                    <span className="px-4 py-2 text-gray-500 flex-grow">
                      {fotoFileName}
                    </span>
                  </label>
                </div>
              </div>

              {/* Button Kirim */}
              <div className=" text-white font-bold">
                <button className="px-20 py-4 bg-blue-500 rounded-lg cursor-pointer">
                  Kirim Formulir
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </ContentLayout>
  );
};
