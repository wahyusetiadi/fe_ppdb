import React from 'react'
import { ButtonIcon } from '../ButtonIcon'
import { ArrowDownTrayIcon, CalendarDateRangeIcon } from '@heroicons/react/24/outline'

export const TableHeader = ({ totalPendaftar, tahunAjaran }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
        <div className="flex items-center space-x-2">
        <span className="font-semibold text-lg">Jumlah Pendaftar:</span>
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
          {totalPendaftar} Siswa
        </span>

        <div className="">

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
        {tahunAjaran}
      </ButtonIcon>

        </div>
      </div>
    </div>
  )
}
