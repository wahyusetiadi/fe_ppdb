import React, { useState } from 'react'

export const StatusFilter = () => {
    const [selectedStatus, setSelectedStatus] = useState('semua')

    const statuses = [
        {id: 'semua', label: 'Semua'},
        {id: 'menunggu', label: 'Menunggu'},
        {id: 'diterima', label: 'Diterima'},
        {id: 'ditolak', label: 'Ditolak'},
    ]

  return (
    <div className=" px-4 py-2 inline-flex items-center gap-4">
            <span className="font-bold text-sm">Tampilkan Status:</span>
            {statuses.map((status) => (
                <label key={status.id} className="flex items-center gap-1 text-sm">
                    <input
                        type="radio"
                        name="status"
                        value={status.id}
                        checked={selectedStatus === status.id}
                        onChange={() => setSelectedStatus(status.id)}
                        className="accent-blue-500"
                    />
                    {status.label}
                </label>
            ))}
        </div>
  )
}
