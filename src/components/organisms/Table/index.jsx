import { AdjustmentsVerticalIcon, MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useRef } from 'react';
import { ButtonIcon } from '../../molecules/ButtonIcon';
import { StatusFilter } from '../../molecules/StatusFilter/index,';
import { TableHeader } from '../../molecules/TableHeader';


const TableData = ({ data }) => {
  const columns = data.length > 0 ? Object.keys(data[0]) : [];
  const tableRef = useRef(null);

  //auto-scroll ke kanan saat tabel panjang
  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.scrollLeft = tableRef.current.scrollWidth;
    }
  }, [data]);

  return (
    <div className="p-6 bg-blue-300">

      <div className="w-full ">
        <TableHeader />
      </div>
      <div className="flex justify-between items-center bg-white">

        {/* search */}
        <div className="w-full flex flex-col justify-center py-3 px-4  gap-2.5">
          <div className="w-[400px] border border-slate-300 flex gap-4 items-center  rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
            <MagnifyingGlassIcon className="w-4 h-4 text-gray-500 ml-3" />
            <input type="text" className='w-full p-2 pl-0 pr-4  focus:outline-none text-sm' placeholder='Cari Siswa..' />
          </div>
        </div>

        {/* 
      button */}
        <div className=" flex gap-3 text-nowrap">
          <ButtonIcon color="SecondaryBlack" textColor="text-black" className={'px-5'} Icon={AdjustmentsVerticalIcon}>Urutkan</ButtonIcon>
          <ButtonIcon color="primary" textColor="text-white" className={'px-6 '} Icon={PlusIcon}>Tambahkan Data</ButtonIcon>
        </div>

      </div>

      <div className="flex gap-6 bg-white">
        <StatusFilter />
      </div>

      <div ref={tableRef} className="overflow-x-auto">
        <table className="table-auto w-full border-b border-slate-300 bg-white text-nowrap" style={{ tableLayout: 'auto' }}>
          <thead className="border-b border-slate-300 bg-gray-100">
            <tr>
              {columns.map((column, index) => (
                <th key={index} className="px-6 py-4 text-left font-semibold">
                  {column === "name" ? "Nama Lengkap" :
                    column === "gender" ? "Jenis Kelamin" :
                      column === "religion" ? "Agama" :
                        column === "birthPlace" ? "Tempat Lahir" :
                          column === "birthDate" ? "Tanggal Lahir" :
                            column === "address" ? "Alamat Tempat Tinggal" :
                              column === "parentPhone" ? "No. Telepon Orang Tua" :
                                column === "akte" ? "Scan Akta Kelahiran" :
                                  column === "familyRegister" ? "Scan Kartu Keluarga" :
                                    column === "tkCertificate" ? "Scan Ijazah TK" :
                                      column === "photo" ? "Pas Foto 3x4" :
                                        column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-100'}>
                  {columns.map((column, colIndex) => (
                    <td key={colIndex} className="py-2 px-6 text-left w-auto text-medium">
                      {row[column]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="py-4 px-6 text-center text-gray-500">
                  Tidak ada data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableData;
