import React, { useState } from 'react'
import Logo from '../../../assets/Logo.svg';
import { useEffect } from 'react';

export const TopBar = () => {
  const [username, setUsername] = useState(null);
  
  useEffect(() => {
    const userName = localStorage.getItem("username")
    if (userName){
      setUsername(userName)
    }
  })

  return (
    <div className='w-full h-[80px] bg-white flex items-center justify-between pl-16 pr-20 border-b border-slate-200'>
        <div className="">
            <img src={Logo} alt="w-fit" />
        </div>

        <div className="w-full flex gap-2 justify-end">
            <div className="w-10 h-10 rounded-full bg-slate-900"></div>
            <div className="">
                <p>{username}</p>
                <p>maulana@gmail.com</p>
            </div>
        </div>
    </div>
  )
}
