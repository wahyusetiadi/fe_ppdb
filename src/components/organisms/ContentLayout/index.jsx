import React from 'react'
import { SideBar } from '../SideBar'
import { TopBar } from '../TopBar'

export const ContentLayout = ({ children }) => {
    return (
        <div className='w-full flex flex-col h-screen'>
            <div className="w-full sticky top-0">
                <TopBar />
            </div>

            <div className="flex">
                <SideBar />

                <div className="w-5/6 h-fit bg-slate-800 p-6 overflow-x-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}
