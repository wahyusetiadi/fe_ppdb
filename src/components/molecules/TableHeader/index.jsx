import React from 'react'
import { ButtonIcon } from '../ButtonIcon'
import { ArrowDownTrayIcon, CalendarDateRangeIcon } from '@heroicons/react/24/outline'

export const TableHeader = ({ totalPendaftar, tahunAjaran }) => {
  return (
    <div className="flex bg-white">
        <div className="w-full flex items-center space-x-2 gap-4 justify-between"> 

          <div className="w-full flex gap-2 ">
        <span className="font-semibold text-lg">Jumlah Pendaftar:</span>
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
          {totalPendaftar} Siswa
        </span>

          </div>

        <div className="w-full flex items-center justify-end gap-3 ">

          <ButtonIcon id="download-button"
          color="white" 
          textColor="black"
          Icon={ArrowDownTrayIcon}
          iconPosition="left"
          className="border border-gray-300 px-4 py-2 rounded-md">
            Download Data
          </ButtonIcon>

      <ButtonIcon  id="tahun-ajaran-button"
          color="white" 
          textColor="black"
          Icon={CalendarDateRangeIcon}
          iconPosition="left"
          className="border border-gray-300 px-4 py-2 rounded-md">
        {/* {tahunAjaran} */} Tahun Ajaran 2024/2025
      </ButtonIcon>

        </div>
      </div>
    </div>
  )
}
