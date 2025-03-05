import { useState } from "react";

export const Pagination = ({ totalItems, itemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="flex items-center space-x-4 justify-between">
      <div className="flex  gap-3">
        <span className="text-gray-700 flex items-center ">
          Menampilkan {(currentPage - 1) * itemsPerPage + 1} -
          {Math.min(currentPage * itemsPerPage, totalItems)} dari {totalItems}{" "}
          data
        </span>
          <select
            className="border border-slate-500 rounded-full px-5 py-3"
            value={itemsPerPage}
            onChange={(e) =>
              console.log("Items per page changed to", e.target.value)
            }
          >
            {[10, 20, 50, 100].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="px-3 py-1 rounded disabled:opacity-50"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {[...Array(totalPages).keys()].slice(0, 10).map((page) => (
          <button
            key={page + 1}
            className={`px-3 py-1 border rounded ${
              currentPage === page + 1 ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => changePage(page + 1)}
          >
            {page + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 rounded disabled:opacity-50"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
