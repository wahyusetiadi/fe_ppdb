import {
  AdjustmentsVerticalIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import { ButtonIcon } from "../../molecules/ButtonIcon";

import { TableHeader } from "../../molecules/TableHeader";
import { TableSearch } from "../../molecules/TableSearch";
import { Link, useNavigate } from "react-router-dom";
import { Modals } from "../Modals";
import { Pagination } from "../../molecules/Pagination";
import { StatusSelector } from "../../molecules/StatusSelector";
import { StatusFilter } from "../../molecules/StatusFilter";
import { formatDateIndonesia } from "../../../utils/dateUtils";

const BASE_URL = "https://ppdb.edunex.id/api/uploads/";

const TableData = ({
  data,
  showTableHeader = false,
  showTableSearch = false,
  showTableFilter = false,
  onDelete = () => {},
  onDetail = () => {},
  onEdit = () => {},
  onUpdate = () => {},
  refreshData,
}) => {
  // Filter kolom yang tidak ingin ditampilkan (isDeleted dan status dari backend)
  const columns =
    data.length > 0
      ? Object.keys(data[0]).filter(
          (column) => column !== "isDeleted" && column !== "status"
        )
      : [];

      // const formatDateIndonesia = (dateString) => {
      //   if (!dateString) return "";
      
      //   const parsedDate = new Date(dateString);
      
      //   if (isNaN(parsedDate.getTime())) return dateString;
      
      //   const day = String(parsedDate.getDate()).padStart(2, "0");
      //   const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
      //   const year = parsedDate.getFullYear();
      
       
      //   return `${day}/${month}/${year}`;
      // };

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(
    Array.isArray(data) ? data : []
  );

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    id: "",
    idRegistration: "",
    createdAt: "",
    name: "",
    email: "",
    gender: "",
    religion: "",
    birthPlace: "",
    birthDate: "",
    address: "",
    parentPhone: "",
  });

  const [isOpenModals, setIsOpenModals] = useState(false);
  const openModals = () => {
    setIsOpenModals(true);
  };

  const closeModals = () => {
    setIsOpenModals(false);
  };

  const handleDetailClick = (row) => {
    openModals();
    setSelectedItem(row);
  };

  const navigate = useNavigate();

  useEffect(() => {
    let filtered = Array.isArray(data) ? [...data] : [];
    if (searchQuery) {
      filtered = filtered.filter((item) => {
        const name = item.name ? item.name.toLowerCase() : "";
        return name.includes(searchQuery.toLowerCase());
      });
    }
    setFilteredData(filtered);
  }, [searchQuery, data]);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    const lowercasedQuery = query.toLowerCase();

    const filtered = data.filter((item) => {
      const name = item.name ? item.name.toLowerCase() : "";
      return name.includes(lowercasedQuery);
    });

    setFilteredData(filtered);
  };

  const handleSort = (key, order) => {
    const sorted = [...data].sort((a, b) => {
      return order === "asc"
        ? a[key].localeCompare(b[key])
        : b[key].localeCompare(a[key]);
    });
    setFilteredData(sorted);
  };

  const toggleDeleteModal = (row = null) => {
    setSelectedItem(row);
    setIsDeleteOpen(!!row);
  };

  const deleteItem = () => {
    if (!selectedItem) return;
    
  // Call the onDelete function from props
  onDelete(selectedItem.id);
  
  // Show success message
  setSuccessMessage(`Data "${selectedItem.name}" berhasil dihapus!`);
  setShowSuccessAlert(true);
  
  // Close delete modal
  toggleDeleteModal();
  
  // Auto hide the success alert after 3 seconds
  setTimeout(() => {
    setShowSuccessAlert(false);
  }, 3000);
  };

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [displayData, setDisplayData] = useState([]);

  // Calculate which items to display based on current page and items per page
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayData(filteredData.slice(startIndex, endIndex));
  }, [filteredData, currentPage, itemsPerPage]);

  // Handle page changes
  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    // If pageSize changed, it will be handled by the other handler
  };

  // Handle items per page changes
  const handleItemsPerPageChange = (newSize) => {
    setItemsPerPage(newSize);
    // currentPage will be reset to 1 within the Pagination component
  };

  const handleStatusChange = (status) => {
    if (status === "semua") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((item) => item.status === status));
    }
  };

  const handleDownloadExcel = () => {
    console.log("Tombol diklik!");
    fetch("https://ppdb.edunex.id/api/export/excel", {
      method: "GET",
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement("a");
        a.href = url;
        a.download = "data-registrasi.xlsx";
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch((error) => {
        console.error("Gagal download:", error);
      });
  };

  return (
    <div className="p-8 bg-white">
      <div className="p-"></div>
      {showTableHeader && (
        <div className=" ">
          <TableHeader
            title="Jumlah Pendaftar"
            showTotalSiswa={true}
            ShowButtonAttribute={true}
            onDownloadExcel={handleDownloadExcel}
          />
        </div>
      )}

        {/* Place the success alert here */}
    {showSuccessAlert && (
      <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative flex items-center">
        <div className="mr-2">
          <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="block sm:inline">{successMessage}</span>
        <button 
          onClick={() => setShowSuccessAlert(false)} 
          className="absolute top-0 bottom-0 right-0 px-4 py-3"
        >
          <span className="text-xl font-bold">&times;</span>
        </button>
      </div>
    )}

      {showTableSearch && (
        <div className=" pt-10">
          <TableSearch onSearchQuery={handleSearchChange} onSort={handleSort} />
        </div>
      )}

      {showTableFilter && (
        <div className="flex gap-6 bg-white">
          <StatusFilter onStatusChange={handleStatusChange} />
        </div>
      )}

      <div className="overflow-x-auto">
        <table
          className="table-auto w-full border-b border-slate-300 bg-white text-nowrap"
          style={{ tableLayout: "auto" }}
        >
          <thead className="border-b border-slate-300 bg-gray-100">
            <tr>
              {columns.map((column, index) => (
                <th key={index} className="px-6 py-4 text-left font-semibold">
                  {column === "id"
                    ? "No"
                    : column === "idRegistration"
                    ? "ID Pendaftaran"
                    : column === "name"
                    ? "Nama Lengkap"
                    : column === "email"
                    ? "Email Aktif"
                    : column === "gender"
                    ? "Jenis Kelamin"
                    : column === "religion"
                    ? "Agama"
                    : column === "birthPlace"
                    ? "Tempat Lahir"
                    : column === "birthDate"
                    ? "Tanggal Lahir"
                    : column === "address"
                    ? "Alamat Tempat Tinggal"
                    : column === "parentPhone"
                    ? "No. Telepon Orang Tua"
                    : column === "akte"
                    ? "Scan Akta Kelahiran"
                    : column === "familyRegister"
                    ? "Scan Kartu Keluarga"
                    : column === "tkCertificate"
                    ? "Scan Ijazah TK"
                    : column === "photo"
                    ? "Pas Foto 3x4"
                    : column === "dibuat_tanggal"
                    ? "Dibuat Tanggal"
                    : column === "dibuat_jam"
                    ? "Dibuat Jam"
                    : column === "dibuat tanggal"
                    ? "Dibuat Tanggal"
                    : column === "dibuat jam"
                    ? "Dibuat Jam"
                    : column}
                </th>
              ))}
              <th className="px-6 py-4 text-left font-semibold">Status</th>
              <th className="px-6 py-4 text-left font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {displayData.length > 0 ? (
              displayData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? "bg-white" : "bg-slate-100"}
                >
                  {columns.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      className="py-2 px-6 text-left w-auto text-medium"
                    >
                      {column === "id" ? (
                        currentPage > 1 ? (
                          rowIndex + 1 + (currentPage - 1) * itemsPerPage + 0
                        ) : (
                          rowIndex + 1
                        )
                      ) : column === "birthDate" ? (
                        formatDateIndonesia(row[column])
                      ) : column === "dibuat_tanggal" ||
                        column === "dibuat tanggal" ? (
                       formatDateIndonesia (row["dibuat tanggal"] || row.dibuat_tanggal)
                      ) : column === "dibuat_jam" || column === "dibuat jam" ? (
                        row["dibuat jam"] || row.dibuat_jam
                      ) : column === "akte" ? (
                        row[column] ? (
                          <a
                            href={`${BASE_URL}${row.akte}`}
                            download={row.akte}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                          >
                           unduh Akta
                          </a>
                        ) : (
                          "Tidak tersedia"
                        )
                      ) : column === "familyRegister" ? (
                        row[column] ? (
                          <a
                            href={`${BASE_URL}${row.familyRegister}`}
                            download={row.familyRegister}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                          >
                            unduh Kartu keluarga
                          </a>
                        ) : (
                          "Tidak tersedia"
                        )
                      ) : column === "tkCertificate" ? (
                        row[column] ? (
                          <a
                            href={`${BASE_URL}${row.tkCertificate}`}
                            download={row.tkCertificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                          >
                            unduh Ijazah
                          </a>
                        ) : (
                          "Tidak tersedia"
                        )
                      ) : column === "foto" ? (
                        row[column] ? (
                          <a
                            href={`${BASE_URL}${row.foto}`}
                            download={row.foto}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                          >
                            unduh Gambar
                          </a>
                        ) : (
                          "Tidak tersedia"
                        )
                      ) : (
                        row[column]
                      )}
                    </td>
                  ))}
                  <td className="py-2 px-6">
                    <StatusSelector id={row.id} onUpdate={refreshData} />
                  </td>
                  <td className="py-2 px-6">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          console.log(`On edit Click ${row.id}`);
                          onEdit(row.id);
                        }}
                        className="px-3 py-1 bg-blue-500 text-white rounded cursor-pointer flex items-center gap-2"
                      >
                        <PencilIcon className="w-4 h-4" />
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          console.log(`Click detail id: ${row.id}`);
                          handleDetailClick(row);
                        }}
                        className="px-3 py-1 bg-yellow-500 text-white rounded cursor-pointer flex items-center gap-2"
                      >
                        <EyeIcon className="w-4 h-4" />
                        Detail
                      </button>
                      <button
                        onClick={() => {
                          console.log(`Click delete id: ${row.id}`);
                          toggleDeleteModal(row);
                        }}
                        className="px-3 py-1 bg-red-500 text-white rounded cursor-pointer flex items-center gap-2"
                      >
                        <TrashIcon className="w-4 h-4" />
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + 2}
                  className="py-4 px-6 text-center text-gray-500"
                >
                  Tidak ada data
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {isDeleteOpen && (
          <div className="w-full fixed inset-0 flex items-center justify-center">
            <div className="w-full h-screen bg-black absolute opacity-50"></div>
            <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-[480px] max-md:w-[300px] flex items-center justify-center flex-col gap-8">
              <div className="w-full flex flex-col items-center justify-center gap-5">
                <div className="text-center">
                  <p className="font-medium text-lg">
                    ID Pendaftaran: {selectedItem?.idRegistration}
                  </p>
                  <p className="font-bold text-xl mt-2">{selectedItem?.name}</p>
                </div>
                <div className="w-full flex flex-col text-center items-center justify-center">
                  <h3 className="text-xl max-md:text-base font-semibold">
                    HAPUS
                  </h3>
                  <p className="text-base max-md:text-xs text-[#64748B]">
                    Ingin menghapus data pendaftaran ini?
                  </p>
                </div>
              </div>
              <div className="w-full flex gap-4 items-center justify-between">
                <button
                  onClick={() => toggleDeleteModal()}
                  className="w-full px-10 py-3 max-md:text-xs max-md:px-7 border text-slate-600 text-base font-semibold border-slate-600 rounded-full"
                >
                  Batal
                </button>
                <button
                  onClick={deleteItem}
                  className={`w-full px-10 py-3 bg-red-600 max-md:text-xs max-md:px-7 text-white text-base font-semibold rounded-full`}
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        )}
        {isOpenModals && (
          <div className="w-full fixed inset-0 flex items-center justify-center">
            <div className="w-full h-screen bg-black absolute opacity-10"></div>
            <Modals
              onCloseModal={closeModals}
              id={selectedItem.id}
              idRegistration={selectedItem.idRegistration}
              dibuat_tanggal={
                selectedItem["dibuat tanggal"] || selectedItem.dibuat_tanggal
              }
              dibuat_jam={selectedItem["dibuat jam"] || selectedItem.dibuat_jam}
              name={selectedItem.name}
              email={selectedItem.email}
              gender={selectedItem.gender}
              religion={selectedItem.religion}
              birthPlace={selectedItem.birthPlace}
              birthDate={selectedItem.birthDate}
              address={selectedItem.address}
              parentPhone={selectedItem.parentPhone}
              akte={selectedItem.akte}
              familyRegister={selectedItem.familyRegister}
              tkCertificate={selectedItem.tkCertificate}
              foto={selectedItem.foto}
              status={selectedItem.status}
            />
          </div>
        )}
      </div>
      <div className="py-[26.5px]">
        <Pagination
          totalItems={filteredData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>
    </div>
  );
};

export default TableData;
