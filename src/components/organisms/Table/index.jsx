import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import { ButtonIcon } from "../../molecules/ButtonIcon";
import { StatusFilter } from "../../molecules/StatusFilter/index,";
import { TableHeader } from "../../molecules/TableHeader";
import { TableSearch } from "../../molecules/TableSearch";
import { Link, useNavigate } from "react-router-dom";
import { Modals } from "../Modals";

const TableData = ({
  data,
  showTableHeader = false,
  showTableSearch = false,
  showTableFilter = false,
  onDelete = () => {},
  onDetail = () => {},
  onEdit = () => {},
}) => {
  const columns = data.length > 0 ? Object.keys(data[0]) : [];

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
        console.log("name", name);
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
    console.log("filtered", filtered);

    setFilteredData(filtered);
  };

  const deleteItem = () => {
    if (selectedItem) {
      onDelete(selectedItem.id);
      closeDeleteModal();
    }
  };

  const openDeleteModal = (row) => {
    setSelectedItem(row);
    setIsDeleteOpen(true);
  };

  const closeDeleteModal = (row) => {
    setSelectedItem(null);
    setIsDeleteOpen(false);
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
          />
        </div>
      )}

      {showTableSearch && (
        <div className=" pt-10">
          <TableSearch onSearchQuery={handleSearchChange} />
        </div>
      )}

      {showTableFilter && (
        <div className="flex gap-6 bg-white">
          <StatusFilter />
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
                  {column === "name"
                    ? "Nama Lengkap"
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
                    : column}
                </th>
              ))}
              <th className="px-6 py-4 text-left font-semibold"> Status</th>{" "}
              {/* KODE BARU */}
              <th className="px-6 py-4 text-left font-semibold"> Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? "bg-white" : "bg-slate-100"}
                >
                  {columns.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      className="py-2 px-6 text-left w-auto text-medium"
                    >
                      {row[column]}
                    </td>
                  ))}
                  <td className="py-2 px-6">
                    {" "}
                    {/* KODE BARU */}
                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        row.status === "Menunggu"
                          ? "bg-yellow-500"
                          : row.status === "Diterima"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="py-2 px-6 space-x-2">
                    {" "}
                    {/* KODE BARU */}
                    <button
                      onClick={() => {
                        console.log(`On edit Click ${row.id}`);
                        onEdit(row.id);
                      }}
                      className="px-3 py-1 bg-blue-500 text-white rounded cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        console.log(`Click detail id: ${row.id}`);
                        handleDetailClick(row);
                      }}
                      className="px-3 py-1 bg-yellow-500 text-white rounded cursor-pointer"
                    >
                      {" "}
                      Detail
                    </button>
                    <button
                      onClick={() => {
                        console.log(`Click delete id: ${row.id}`);
                        openDeleteModal(row);
                      }}
                      className="px-3 py-1 bg-red-500 text-white rounded cursor-pointer"
                    >
                      {" "}
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
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
                <div
                  className={`w-20 h-20 max-md:w-14 max-md:h-14 rounded-full flex items-center justify-center`}
                >
                  <div
                    className={`w-16 h-16 max-md:w-11 max-md:h-11  rounded-full flex items-center justify-center`}
                  >
                    A
                  </div>
                </div>
                <div className="w-full flex flex-col text-center items-center justify-center">
                  <h3 className="text-xl max-md:text-base font-semibold">
                    HAPUS
                  </h3>
                  <p className="text-base max-md:text-xs text-[#64748B]">
                    Ingin menghapus?
                  </p>
                </div>
              </div>
              <div className="w-full flex gap-4 items-center justify-between">
                <button
                  onClick={closeDeleteModal}
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
              createdAt={selectedItem.createdAt}
              name={selectedItem.name}
              gender={selectedItem.gender}
              religion={selectedItem.religion}
              birthPlace={selectedItem.birthPlace}
              birthDate={selectedItem.birthDate}
              address={selectedItem.address}
              parentPhone={selectedItem.parentPhone}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TableData;
