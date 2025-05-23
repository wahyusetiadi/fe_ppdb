import React from 'react'

export const formatDateIndonesia = (dateString) => {
    if (!dateString) return "";

    const parseDate = new Date(dateString);

    if (isNaN(parseDate.getTime())) return dateString;

    const day = String(parseDate.getDate()).padStart(2, "0");
    const month = String(parseDate.getMonth() + 1).padStart(2, "0");
    const year = parseDate.getFullYear();

  return `${day}-${month}-${year}`;
};
