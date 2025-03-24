import React, { useState, useEffect } from "react";
import { getAllData, statusDataRegistration } from "../../../api/api";

export const StatusSelector = ({ id, onUpdate }) => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const statusOptions = [
    { label: "menunggu", value: "menunggu", color: "bg-yellow-500" },
    { label: "diterima", value: "diterima", color: "bg-green-500" },
    { label: "ditolak", value: "ditolak", color: "bg-red-500" },
  ];

  useEffect(() => {
    const fetchStatus = async () => {
      setLoading(true);
      try {
        // console.log(`Fetching data for ID: ${id}`); // Log ID sebelum fetch

        const response = await getAllData();
        // console.log("All data received:", response); // Log semua data dari backend

        const data = response.find((item) => item.id === id);
        // console.log(`Found data for ID ${id}:`, data); // Log data yang ditemukan

        setStatus(data?.status || "menunggu");
      } catch (error) {
        console.error("Error fetching status:", error);
        setError("Gagal mengambil status.");
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, [id]);

  const handleUpdateStatus = async (newStatus) => {
    console.log(`Updating status for ID ${id} to: ${newStatus}`);
    setStatus(newStatus);
    setLoading(true);
    setError("");

    try {
      await statusDataRegistration(id, newStatus);
      console.log(`Status updated successfully for ID ${id}`);
      if(onUpdate) {
        onUpdate();
      }
    } catch (error) {
      console.error("Error updating status:", error);
      setError("Gagal memperbarui status. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="inline-block">
      {loading ? (
        <p className="text-gray-500">Memuat status...</p>
      ) : (
        <select
          className={`px-4 py-2 rounded-full text-white font-semibold focus:outline-none focus:ring ${
            statusOptions.find((opt) => opt.value === status)?.color
          } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          value={status}
          onChange={(e) => handleUpdateStatus(e.target.value)}
          disabled={loading}
        >
          {statusOptions.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-white text-black"
            >
              {option.label}
            </option>
          ))}
        </select>
      )}
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};
