import React, { useEffect, useState } from 'react'
import { ButtonIcon } from '../ButtonIcon'
import { ArrowDownTrayIcon, CalendarDateRangeIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { getAllData } from '../../../api/api'

export const TableHeader = ({ tahunAjaran, title, showTotalSiswa = false, ShowButtonAttribute = false, onDownloadExcel }) => {
  const [countData, setCountData] = useState(0)
  const fetchAllDataRegistrasi = async () => {
      try {
        const data = await getAllData();
        // console.log("dataGet", data.length);
  
        setCountData(data.length);
      } catch (err) {
        console.error("error fetching data");
        throw err;
      }
    };

    useEffect(() => {
        fetchAllDataRegistrasi();
      }, []);

      

  return (
    <div className="flex flex-col gap-2 bg-white">
      <div className="w-full flex items-center space-x-2 gap-4 justify-between">

        <div className="w-full flex gap-2 ">
          <span className="font-semibold text-lg">{title}</span>
          {showTotalSiswa && (
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
              {countData} Siswa
            </span>

          )}

        </div>

        <div className="w-full flex items-center justify-end gap-3 ">



          {ShowButtonAttribute && (
          <ButtonIcon id="download-button"
            color="white"
            textColor="black"
            Icon={ArrowDownTrayIcon}
            iconPosition="left"
            className="border border-gray-300 px-4 py-2 rounded-md"
            onClick={onDownloadExcel}>
            Download Data
          </ButtonIcon>

          )}
            <ButtonIcon id="tahun-ajaran-button"
              color="white"
              textColor="black"
              Icon={CalendarDateRangeIcon}
              iconPosition="left"
              className="border border-gray-300 px-4 py-2 rounded-md">
               Tahun Ajaran 2024/2025
            </ButtonIcon>

        </div>
      </div>
      <hr className='text-slate-300'/>
    </div>
  )
}
