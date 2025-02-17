import React from 'react';
import { ContactCard } from '../../molecules/ContactCard';
import ImageLocation from '../../../assets/ImageLocation.png';

const ContactLocation = () => {
  return (

    <div className="w-full" id='kontak & lokasi'>
      <div className="w-full flex flex-col items-center justify-center gap-10 p-[100px] bg-white rounded-lg shadow-lg">

          <div className="w-full flex flex-col text-center gap-2 items-center justify-center">
            <h1 className='text-[40px] font-bold text-gray-900 text-nowrap'>Lokasi dan Kontak Kami</h1>
            <p className='text-gray-600 mt-2 text-xl w-[798px]'>Sekolah kami terletak di lokasi yang strategis dan mudah diakses. Gunakan Google Maps untuk menemukan rute terbaik menuju SD XYZ.</p>
          </div>

        <div className="flex gap-8">
          <div className="w-full flex flex-col gap-6">

            <ContactCard />

          </div>

          <div className="w-full">
            <img src={ImageLocation} alt="" className='w-[604px] h-[406px]' />
          </div>

        </div>




      </div>
    </div>

    // <div className="w-full max-w-6xl mx-auto p-6">
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //     <div className="space-y-6">
    //       <div className='flex flex-col items-center justify-center'>
    //         <h2 className="text-2xl font-bold mb-4">Lokasi dan Kontak Kami</h2>
    //         <p className="text-gray-600 mb-8">
    //           Sekolah kami terletak di lokasi yang strategis dan mudah diakses. Gunakan
    //           Google Maps untuk menemukan rute terbaik menuju SD XYZ.
    //         </p>
    //       </div>
    //     </div>

    // <ContactCard />


    //     {/* Right side - Map placeholder */}
    //     <div className="bg-gray-100 rounded-lg h-[400px]">
    //       {/* Map content will go here */}
    //     </div>
    //   </div>
    // </div>
  );
};

export default ContactLocation;