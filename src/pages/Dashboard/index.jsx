import React, { useState } from 'react'
import { ContentLayout } from '../../components/organisms/ContentLayout'
import { TableHeader } from '../../components/molecules/TableHeader'
import { Cards } from '../../components/molecules/Cards'
import TableData from '../../components/organisms/Table'
import { Modals } from '../../components/organisms/Modals'

export const Dashboard = () => {
  const [isOpenModals, setIsOpenModals] = useState(false)
  const openModals = () => {
    setIsOpenModals(true)
  }
  return (
    <ContentLayout>
        <div className='p-4'></div>


<div className="flex flex-col gap-8">
        <TableHeader title="Dashboard"/>
        <div className="grid grid-cols-3 gap-4">
          <div className="grid">
            <Cards title={'Selamat Datang'} textItem={'Admin Sekolah Dasar XYZ'} className={'bg-blue-600 text-white'} />
          </div>
          <div className="grid grid-rows-2 gap-2">
            <Cards title={'Total Pendaftar'} textItem={`${'200'} Siswa`} className={'bg-slate-100 '} />
            <Cards title={'Siswa DIterima'} textItem={`${'500'} Siswa`} className={'bg-slate-100 '} />
          </div>
          <div className="grid grid-rows-2 gap-2">
            <Cards title={'Menunggu Proses'} textItem={`${'120'} Siswa`} className={'bg-slate-100 '}/>
            <Cards title={'Siswa Ditolak'} textItem={`${'30'} Siswa`} className={'bg-slate-100 '}/>
          </div>
        </div>

          <button onClick={openModals}>Open Modal</button>
          {isOpenModals && (
          <div className="w-full fixed inset-0 flex items-center justify-center">
              <div className="w-full h-screen bg-black absolute opacity-10">
              </div>
                <Modals />
          </div>
          )}


        <div className="w-full flex justify-between">
          <p>Menunggu Diproses</p>
          <button className='text-blue-600 cursor-pointer'>Lihat Semua Data </button>
        </div>
</div>
      <TableData data={[]}/>
    </ContentLayout>
  )
}
