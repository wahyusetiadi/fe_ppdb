import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import React from 'react'


export const ContactCard = () => {
  return (
    <div className="w-full">
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex items-center justify-start bg-blue-900 p-6 rounded-lg">
        <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center">
          <EnvelopeIcon className="text-blue-900 size-6" />
        </div>
        <div className="pl-6 text-white">
          <h1 className="text-xl font-bold">Email</h1>
          <p className="text-base">misterx@edunex.id</p>
        </div>
      </div>

      <div className="w-full flex items-center justify-start bg-blue-900 p-6 rounded-lg">
        <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center">
          <PhoneIcon className="text-blue-900 size-6" />
        </div>
        <div className="pl-6 text-white">
          <h1 className="text-xl font-bold">Telepon/Whatsapp</h1>
          <p className="text-base">+62 822-6576-8589</p>
        </div>
      </div>

      <div className="w-full flex items-center justify-start bg-blue-900 p-6 rounded-lg">
        <div className="bg-blue-50 rounded-full w-22 h-16 flex items-center justify-center">
          <MapPinIcon className="text-blue-900 size-6" />
        </div>
        <div className="pl-6 text-white">
          <h1 className="text-xl font-bold">Alamat</h1>
          <p className="text-base">
            EdunexSpace, Jl. Unknown No. xx, Banjarmasin, Kalimantan
            Selatan, 74512
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}
