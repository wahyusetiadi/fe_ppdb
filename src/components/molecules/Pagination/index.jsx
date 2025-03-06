import { useEffect, useState } from "react";

export const Pagination = ({
  totalItems,
  itemsPerPage: initialItemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage || 10);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

 
  

  // Reset to page 1 when itemsPerPage changes
  useEffect(() => {
    setCurrentPage(1);
    if (onPageChange) onPageChange(1, itemsPerPage);
  }, [itemsPerPage]);

  // Update when initialItemsPerPage prop changes
  useEffect(() => {
    if (initialItemsPerPage && initialItemsPerPage !== itemsPerPage) {
      setItemsPerPage(initialItemsPerPage);
    }
  }, [initialItemsPerPage]);

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (onPageChange) onPageChange(page, itemsPerPage);
  };

  const changeItemsPerPage = (newSize) => {
    setItemsPerPage(newSize);
    if (onItemsPerPageChange) onItemsPerPageChange(newSize);
  };

  // Generate page buttons with ellipsis for large page counts
  const renderPageButtons = () => {
    const buttons = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages + 2) {
      // Show all pages if not too many
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      // Always show first page
      buttons.push(1);

      // Calculate start and end of visible pages
      let startPage = Math.max(
        2,
        currentPage - Math.floor(maxVisiblePages / 2)
      );
      let endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 1);

      // Adjust if we're near the end
      if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(2, endPage - maxVisiblePages + 1);
      }

      // Add ellipsis if needed
      if (startPage > 2) {
        buttons.push("...");
      }

      // Add visible pages
      for (let i = startPage; i <= endPage; i++) {
        buttons.push(i);
      }

      // Add ellipsis if needed
      if (endPage < totalPages - 1) {
        buttons.push("...");
      }

      // Always show last page
      buttons.push(totalPages);
    }

    return buttons;
  };

  return (
    <div className="flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center gap-3">
        <span className="text-gray-700">
          Menampilkan{" "}
          {totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1} -
          {Math.min(currentPage * itemsPerPage, totalItems)} dari {totalItems}{" "}
          data
        </span>
        <select
          className="border border-slate-500 rounded-full px-5 py-3"
          value={itemsPerPage}
          onChange={(e) => changeItemsPerPage(Number(e.target.value))}
        >
          {[10, 20, 50, 100].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      {totalPages > 0 && (
        <div className="flex items-center space-x-2">
          <button
            className="px-3 py-1 rounded  disabled:opacity-50 hover:bg-gray-100"
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            &lt;
          </button>

          {renderPageButtons().map((page, index) =>
            page === "..." ? (
              <span key={`ellipsis-${index}`} className="px-3 py-1">
                ...
              </span>
            ) : (
              <button
                key={`page-${page}`}
                className={`px-3 py-1  rounded ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => changePage(page)}
              >
                {page}
              </button>
            )
          )}

          <button
            className="px-3 py-1 rounded disabled:opacity-50 hover:bg-gray-100"
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};
