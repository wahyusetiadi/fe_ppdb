import { ArrowLeftEndOnRectangleIcon, Cog6ToothIcon, Squares2X2Icon, UsersIcon } from '@heroicons/react/24/outline'
import React from 'react'

export const SideBar = () => {
    return (
        <div className='flex flex-col w-1/6 h-dvh bg-white text-slate-500 px-6 pt-10 text-base overflow-y-auto gap-10'>

            <div className="w-full text-nowrap">
                <ul className='w-fit flex flex-col gap-4'>
                    <p className='px-10'>Menu</p>
                    <li className='w-full px-4'>
                        <button className='w-full px-10 flex gap-2 items-center justify-start cursor-pointer '>
                            <Squares2X2Icon className='size-5' />
                            <p className=''>Dashboard</p>
                        </button>
                    </li>

                    <li className='w-full px-4'>
                        <button className='w-full px-10 flex gap-2 items-center justify-start cursor-pointer '>
                            <UsersIcon className='size-5' />
                            <p className=''>Pendaftar</p>
                        </button>
                    </li>
                </ul>

            </div>


            <div className="w-full text-nowrap">
                <ul className='w-fit flex flex-col gap-4'>
                    <p className='px-10'>Support</p>
                    <li className='w-full px-4'>
                        <button className='w-full px-10 flex gap-2 items-center justify-start cursor-pointer '>
                            <Cog6ToothIcon className='size-5' />
                            <p className=''>Pengaturan</p>
                        </button>
                    </li>

                    <li className='w-full px-4'>
                        <button className='w-full px-10 flex gap-2 items-center justify-start cursor-pointer text-red-500 '>
                            <ArrowLeftEndOnRectangleIcon className='size-5 ' />
                            <p className=''>Logout</p>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
