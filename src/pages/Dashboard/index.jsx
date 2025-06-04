import React, { useCallback, useEffect, useState } from "react";
import { ContentLayout } from "../../components/organisms/ContentLayout";
import { TableHeader } from "../../components/molecules/TableHeader";
import { Cards } from "../../components/molecules/Cards";
import TableData from "../../components/organisms/Table";
import { deleteDataRegistration, getAllData } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [isData, setIsData] = useState([]);
  const [statistik, setStatistik] = useState({
    totalMenunggu: 0,
    totalDitolak: 0,
    totalDiterima: 0,
    totalPendaftar: 0,
  });
  
  const navigate = useNavigate();

  const fetchAllData = async () => {
    try {
      const data = await getAllData();

      const totalMenunggu = data.filter(item => item.status === "menunggu").length;
      const totalDitolak = data.filter(item => item.status === "ditolak").length;
      const totalDiterima = data.filter(item => item.status === "diterima").length;
      const totalPendaftar = data.length;

      const filteredMenunggu = data.filter(item => item.status === "menunggu");

      setStatistik({ totalMenunggu, totalDitolak, totalDiterima, totalPendaftar });
      setIsData(filteredMenunggu);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDataRegistration(id);
      fetchAllData();
    } catch (err) {
      console.error("Error Delete data", err);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-data/${id}`);
  };

  return (
    <ContentLayout>
      <div className="p-4"></div>

      <div className="flex flex-col gap-8">
        <TableHeader title="Dashboard" />
        <div className="grid grid-cols-3 gap-4">
          <div className="grid">
            <Cards
              title={"Selamat Datang"}
              textItem={"Admin Sekolah Dasar XYZ"}
              className={"bg-blue-600 text-white"}
            />
          </div>
          <div className="grid grid-rows-2 gap-2">
            <Cards
              title="Total Pendaftar"
              showTotalPendaftar
              totalPendaftar={statistik.totalPendaftar}
              className={"bg-slate-100 "}
            />
            <Cards
              title="Siswa DIterima"
              showTotalPendaftar
              totalPendaftar={statistik.totalDiterima}
              className={"bg-slate-100 "}
            />
          </div>
          <div className="grid grid-rows-2 gap-2">
            <Cards
              title="Menunggu Proses"
              showTotalPendaftar
              totalPendaftar={statistik.totalMenunggu}
              className={"bg-slate-100 "}
            />
            <Cards
              title="Siswa Ditolak"
              showTotalPendaftar
              totalPendaftar={statistik.totalDitolak}
              className={"bg-slate-100 "}
            />
          </div>
        </div>

       

        <div className="w-full flex justify-between">
          <p>Menunggu Diproses</p>

          <Link to="/data-registrasi">
          <button className="text-blue-600 cursor-pointer">
            Lihat Semua Data
          </button>
          </Link>
        </div>
      </div>
      <TableData
        data={isData}
        onDelete={handleDelete}
        onEdit={handleEdit}
       refreshData={fetchAllData}
      />
    </ContentLayout>
  );
};
