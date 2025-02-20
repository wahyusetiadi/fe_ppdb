import { AdjustmentsVerticalIcon, MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useRef } from 'react';
import { ButtonIcon } from '../../molecules/ButtonIcon';
import { StatusFilter } from '../../molecules/StatusFilter/index,';
import { TableHeader } from '../../molecules/TableHeader';
import { TableSearch } from '../../molecules/TableSearch';


const TableData = ({ data, showTableHeader = false, showTableSearch = false , showTableFilter = false }) => {
  const columns = data.length > 0 ? Object.keys(data[0]) : [];
  const tableRef = useRef(null);

  //auto-scroll ke kanan saat tabel panjang
  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.scrollLeft = tableRef.current.scrollWidth;
    }
  }, [data]);

  return (
    <div className="p-8 bg-white">

      <div className='p-'>

      </div>
{showTableHeader && (
      <div className=" ">
        <TableHeader title="Jumlah Pendaftar" showTotalSiswa={true} ShowButtonAttribute={true}/>
      </div>

)}

{showTableSearch && (
     <div className="">
      <TableSearch />
     </div>

)}


{showTableFilter && (
      <div className="flex gap-6 bg-white">
        <StatusFilter />
      </div>

)}

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
