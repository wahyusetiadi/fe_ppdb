import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { ButtonIcon } from "../ButtonIcon";
import { Link } from "react-router-dom";

export const TableSearch = ({ searchQuery, onSearchQuery, onSort }) => {
  const [showSortOptions, setShowSortOptions] = useState(false);

  const handleSort = (key, order) => {
    if (onSort) {
      onSort(key, order); // Mengirim event sorting ke komponen induk
    }
    setShowSortOptions(false); // Tutup dropdown setelah klik sort
  };

  return (
    <div className="flex justify-between items-center bg-white">
      {/* Search */}
      <div className="w-full flex flex-col justify-center py-3 gap-2.5">
        <div className="w-[400px] border border-slate-300 flex gap-4 items-center rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
          <MagnifyingGlassIcon className="w-4 h-4 text-gray-500 ml-3" />
          <input
            value={searchQuery}
            onChange={(e) => onSearchQuery(e.target.value)}
            type="text"
            className="w-full p-2 pl-0 pr-4 focus:outline-none text-sm"
            placeholder="Cari Siswa.."
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full flex gap-3 items-center justify-end text-nowrap">
        <div className="">
          <button
            onClick={() => setShowSortOptions(!showSortOptions)}
            className="flex items-center gap-2 border border-slate-400 rounded-lg px-3 py-2 cursor-pointer"
          >
            <AdjustmentsVerticalIcon className=" size-6 text-2xl" /> Urutkan
          </button>

          {showSortOptions && (
            <div className="absolute mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-48">
              <button
                className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
                onClick={() => handleSort("name", "asc")}
              >
                Nama (A-Z)
              </button>
              <button
                className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
                onClick={() => handleSort("name", "desc")}
              >
                Nama (Z-A)
              </button>
            </div>
          )}
        </div>
        <Link to="/tambah-data">
          <ButtonIcon
            color="primary"
            textColor="text-white"
            className={"px-6 "}
            Icon={PlusIcon}
          >
            Tambahkan Data
          </ButtonIcon>
        </Link>
      </div>
    </div>
  );
};
