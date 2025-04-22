import React from 'react'

const getColor = (color) => {
    switch (color) {
        case 'primary':
            return 'bg-blue-500 hover:bg-blue-600';
        case 'success':
            return 'bg-green-500 hover:bg-green-600';
        case 'warning':
            return 'bg-orange-500 hover:bg-orange-600';
        case 'secondary':
            return 'bg-white border border-blue-600';
        case 'SecondaryBlack':
            return 'border border-black';
    }
}

export default function Button({ id, color, textColor, children, className, onClick }) {
    return (
        <button id={id} onClick={onClick} className={`w-auto h-auto py-3 rounded-lg cursor-pointer ${textColor} ${getColor(color)} ${className}`}>
            {children}
        </button>
    )
}