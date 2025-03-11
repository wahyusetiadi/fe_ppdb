import React from 'react';

export const Cards = ({ title, textItem, className, showTotalPendaftar = false, totalPendaftar }) => {
  return (
    <div className={`${className} w-full flex flex-col gap-2 rounded-2xl p-6`}>
      <p className='text-sm'>{title}</p>
      <h1 className='text-2xl font-bold'>{textItem}</h1>
      {showTotalPendaftar && (
        <h1 className='text-2xl font-bold'>{totalPendaftar} Siswa</h1>
      )}
    </div>
  );
};
