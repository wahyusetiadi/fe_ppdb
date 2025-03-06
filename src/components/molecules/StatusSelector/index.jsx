import React, { useState } from 'react'

export const StatusSelector = () => {
    const [status, setStatus] = useState("Menunggu");

    const statusOptions = [
      { label: "Menunggu", value: "Menunggu", color: "bg-yellow-500" },
      { label: "Diterima", value: "Diterima", color: "bg-green-500" },
      { label: "Ditolak", value: "Ditolak", color: "bg-red-500" },
    ];
  
    return (
      <div className=" inline-block">
        <select
          className={`px-4 py-2 rounded-full text-white font-semibold focus:outline-none focus:ring ${statusOptions.find(opt => opt.value === status)?.color}`}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value} className='bg-white text-black'>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
