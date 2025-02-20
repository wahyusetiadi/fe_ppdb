import { AdjustmentsVerticalIcon, MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { ButtonIcon } from '../ButtonIcon'
import { Link } from 'react-router-dom'

export const TableSearch = () => {
  return (
    <div className=" flex justify-between items-center  bg-white">

      {/* search */}
      <div className="w-full flex flex-col justify-center py-3   gap-2.5">
        <div className="w-[400px] border border-slate-300 flex gap-4 items-center  rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
          <MagnifyingGlassIcon className="w-4 h-4 text-gray-500 ml-3" />
          <input type="text" className='w-full p-2 pl-0 pr-4  focus:outline-none text-sm' placeholder='Cari Siswa..' />
        </div>
      </div>

      {/* 
          button */}
      <div className=" w-full flex gap-3 items-center justify-end text-nowrap">
        <ButtonIcon color="SecondaryBlack" textColor="text-black" className={'px-5'} Icon={AdjustmentsVerticalIcon}>Urutkan</ButtonIcon>
        <Link to="/tambah-data">
          <ButtonIcon color="primary" textColor="text-white" className={'px-6 '} Icon={PlusIcon}>Tambahkan Data</ButtonIcon>
        </Link>
      </div>

    </div>
  )
}
