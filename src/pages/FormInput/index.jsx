import React, { useEffect, useState } from "react";
import { ContentLayout } from "../../components/organisms/ContentLayout";
import { createDataRegistration } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";

// Constants
const RELIGION_OPTIONS = [
  { value: "", label: "Pilih Agama" },
  { value: "islam", label: "Islam" },
  { value: "kristen", label: "Kristen" },
  { value: "katolik", label: "Katolik" },
  { value: "hindu", label: "Hindu" },
  { value: "buddha", label: "Buddha" },
  { value: "konghucu", label: "Konghucu" }
];

const GENDER_OPTIONS = [
  { value: "laki-laki", label: "Laki-laki" },
  { value: "perempuan", label: "Perempuan" }
];

const FILE_FIELDS = [
  { key: "akte", label: "Scan Akta Kelahiran", placeholder: "Upload File" },
  { key: "familyRegister", label: "Scan Kartu Keluarga", placeholder: "upload file" },
  { key: "tkCertificate", label: "Scan Ijazah TK", placeholder: "upload file" },
  { key: "foto", label: "Pas Foto 3x4 Latar Biru", placeholder: "upload foto" }
];

const FORM_FIELDS = {
  REQUIRED_TEXT: ["name", "email", "birthPlace", "address", "parentPhone"],
  REQUIRED_SELECT: ["gender", "religion", "birthDate"],
  FILES: ["akte", "familyRegister", "tkCertificate", "foto"]
};

// Custom Hooks
const useFormData = () => {
  const [formData, setFormData] = useState({
    idRegistration: "",
    name: "",
    email: "",
    gender: "",
    religion: "",
    birthPlace: "",
    birthDate: "",
    address: "",
    parentPhone: "",
    akte: null,
    familyRegister: null,
    tkCertificate: null,
    foto: null
  });

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return { formData, updateField, setFormData };
};

// Utility Functions
const generateRegistrationId = () => {
  const date = new Date();
  const randomNumber = Math.floor(Math.random() * 1000000);
  return `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}${randomNumber}`;
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateForm = (data) => {
  // Check required text fields
  const requiredFields = [...FORM_FIELDS.REQUIRED_TEXT, ...FORM_FIELDS.REQUIRED_SELECT];
  const emptyFields = requiredFields.filter(field => !data[field]);
  
  if (emptyFields.length > 0) {
    return { isValid: false, message: "Harap isi semua bidang yang wajib diisi!" };
  }

  // Validate email format
  if (!validateEmail(data.email)) {
    return { isValid: false, message: "Format email tidak valid. Harap masukkan email yang benar." };
  }

  // Check required files
  const missingFiles = FORM_FIELDS.FILES.filter(field => !data[field]);
  if (missingFiles.length > 0) {
    return { isValid: false, message: "Harap unggah semua dokumen yang diperlukan!" };
  }

  return { isValid: true };
};

const createFormData = (data) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.set(key, value);
  });
  return formData;
};

// Components
const TextInput = ({ label, value, onChange, type = "text", placeholder, ...props }) => (
  <div className="w-full flex flex-col gap-2">
    <label className="text-lg font-bold">{label}</label>
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={type}
      className="w-full rounded-lg p-4 border border-slate-200"
      placeholder={placeholder}
      {...props}
    />
  </div>
);

const TextArea = ({ label, value, onChange, placeholder, rows = 4 }) => (
  <div className="w-full flex flex-col gap-2">
    <label className="text-lg font-bold">{label}</label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full p-4 gap-2.5 border border-slate-200 rounded-md"
    />
  </div>
);

const SelectInput = ({ label, value, onChange, options }) => (
  <div className="w-full flex flex-col gap-2">
    <label className="text-lg font-bold">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-4 gap-2.5 border border-slate-200 rounded-md"
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const RadioGroup = ({ label, value, onChange, options, name }) => (
  <div className="w-full flex flex-col gap-2">
    <label className="text-lg font-bold">{label}</label>
    <div className="flex items-center justify-start gap-10 p-4 border border-slate-200 rounded-md">
      {options.map(option => (
        <div key={option.value} className="flex gap-2">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            className="mr-2 gap-2"
            onChange={(e) => onChange(e.target.value)}
          />
          <span>{option.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const FileInput = ({ label, file, onChange, placeholder }) => (
  <div className="w-full flex flex-col gap-2">
    <label className="font-bold text-lg">{label}</label>
    <label className="flex items-center border border-slate-200 rounded-md overflow-hidden w-full">
      <span className="bg-blue-500 text-white px-5 py-4 cursor-pointer">
        Choose file
      </span>
      <input
        onChange={(e) => {
          const selectedFile = e.target.files[0];
          if (selectedFile) onChange(selectedFile);
        }}
        type="file"
        className="hidden"
      />
      <span className="px-4 py-2 text-gray-500 flex-grow">
        {file ? file.name : placeholder}
      </span>
    </label>
  </div>
);

const FormInput = () => {
  const { formData, updateField, setFormData } = useFormData();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    updateField("idRegistration", generateRegistrationId());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validation = validateForm(formData);
    if (!validation.isValid) {
      alert(validation.message);
      return;
    }

    const submitData = createFormData(formData);

    try {
      setIsSubmitting(true);
      const result = await createDataRegistration(submitData);
      console.log("data berhasil dibuat", result);
      setTimeout(() => {
        navigate("/data-registrasi");
      }, 500);
    } catch (err) {
      console.error("error get api", err);
      alert("Terjadi kesalahan saat mengirim data");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContentLayout>
      <div className="w-full h-full flex items-center justify-center overflow-x-hidden bg-slate-100">
        <div className="w-[1240px] rounded-xl p-10 flex flex-col gap-10 m-6 bg-white">
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-col items-start">
              <Link to="/data-registrasi">
                <button className="text-blue-600 font-bold cursor-pointer">
                  Kembali
                </button>
              </Link>
            </div>
            <div className="flex items-center justify-center w-full">
              <h1 className="font-bold text-2xl">Tambah Data</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full grid grid-cols-2 gap-10">
            {/* Left Column */}
            <div className="w-full flex flex-col gap-6">
              <TextInput
                label="Nama Lengkap"
                value={formData.name}
                onChange={(value) => updateField("name", value)}
                placeholder="Masukkan Nama Lengkap"
              />

              <TextInput
                label="Email Aktif"
                value={formData.email}
                onChange={(value) => updateField("email", value)}
                type="email"
                placeholder="Masukkan Email Aktif"
              />

              <RadioGroup
                label="Jenis Kelamin"
                value={formData.gender}
                onChange={(value) => updateField("gender", value)}
                options={GENDER_OPTIONS}
                name="gender"
              />

              <SelectInput
                label="Agama"
                value={formData.religion}
                onChange={(value) => updateField("religion", value)}
                options={RELIGION_OPTIONS}
              />

              <TextInput
                label="Tempat Lahir"
                value={formData.birthPlace}
                onChange={(value) => updateField("birthPlace", value)}
                placeholder="Masukkan Tempat Lahir"
              />

              <TextInput
                label="Tanggal Lahir"
                value={formData.birthDate}
                onChange={(value) => updateField("birthDate", value)}
                type="date"
              />

              <TextArea
                label="Alamat Tempat Tinggal"
                value={formData.address}
                onChange={(value) => updateField("address", value)}
                placeholder="Masukkan Alamat Lengkap"
              />
            </div>

            {/* Right Column */}
            <div className="w-full flex flex-col items-end justify-between">
              <div className="w-full flex flex-col gap-6">
                <TextInput
                  label="No. Telepon Orang Tua"
                  value={formData.parentPhone}
                  onChange={(value) => updateField("parentPhone", value)}
                  placeholder="Masukkan No. Telepon Orang Tua"
                />

                {FILE_FIELDS.map((field) => (
                  <FileInput
                    key={field.key}
                    label={field.label}
                    file={formData[field.key]}
                    onChange={(file) => updateField(field.key, file)}
                    placeholder={field.placeholder}
                  />
                ))}
              </div>

              {/* Submit Button */}
              <div className="text-white font-bold">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-20 py-4 rounded-lg font-bold text-white ${
                    isSubmitting
                      ? "bg-blue-300 cursor-not-allowed"
                      : "bg-blue-400 hover:bg-blue-800"
                  }`}
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Formulir"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </ContentLayout>
  );
};

export default FormInput;