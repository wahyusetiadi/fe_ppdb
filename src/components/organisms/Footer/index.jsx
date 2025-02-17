import React from 'react'
import footerLogo from '../../../assets/footerEdunex.svg'

const Footer = () => {
  return (
    <div
      id="kontak"
      className='bg-[#29467F] w-full h-fit px-16 py-6 gap-16 flex flex-col'
    >
      <div className="flex flex-col items-center justify-center w-full text-white gap-10">
        <div className="w-full h-auto py-6 flex items-center justify-center">
          <img src={footerLogo} alt="" />
        </div>
        <div className="w-full">

          <div className="border-b border-gray-300 gap-2"></div>
          <div className="text-white flex flex-col items-center justify-center ">
            <div className="mt-2">Copyright © 2025 All Right Reserved  |  Designed by EduNEX</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer