import React, { useEffect, useState } from "react";
import { ContentLayout } from "../../components/organisms/ContentLayout";
import { TableHeader } from "../../components/molecules/TableHeader";
import { Cards } from "../../components/molecules/Cards";
import TableData from "../../components/organisms/Table";
import { Modals } from "../../components/organisms/Modals";
import { deleteDataRegistration, getAllData } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";
import { error } from "pdf-lib";

export const Dashboard = () => {
  const [isData, setIsData] = useState([]);
  const navigate = useNavigate();

  const [totalMenunggu, setTotalMenunggu] = useState(0);
  const [totalDitolak, setTotalDitolak] = useState(0);
  const [totalTerdaftar, setTotalTerdaftar] = useState(0);
  const [totalDiterima, setTotalDiterima] = useState(0);
  

  useEffect(() => {
    const fetchData = async () => {
    try {
        const data = await getAllData();
        const menunggu = data.filter(item => item.status === "Menunggu").length;
        const ditolak = data.filter(item => item.status === "Ditolak").length;
        const pendaftar = data.length;
        const diterima = data.filter(item => item.status === "Diterima").length;

        setTotalMenunggu(menunggu);
        setTotalDitolak(ditolak);
        setTotalTerdaftar(pendaftar);
        setTotalDiterima(diterima);
    } catch (err) {
      console.error("Error Fetching Data", err);
      
    }
  };

fetchData();
}, []);

  const fetchAllDataRegistrasi = async () => {
    try {
      const data = await getAllData();
      const filteredData = data.filter(item => item.status === "Menunggu");
      console.log(filteredData);

      setIsData(filteredData);
    } catch (err) {
      console.error("error fetching data");
      throw err;
    }
  };

  useEffect(() => {
    fetchAllDataRegistrasi();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await deleteDataRegistration(id);
      const data = await getAllData();
      setIsData(data);
    } catch (error) {
      console.error("Error Delete data");
      throw error;
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
              title={"Total Pendaftar"}
              showTotalPendaftar={true}
              totalPendaftar={totalTerdaftar}
              className={"bg-slate-100 "}
            />
            <Cards
              title={"Siswa DIterima"}
              showTotalPendaftar={true}
              totalPendaftar={totalDiterima}
              className={"bg-slate-100 "}
            />
          </div>
          <div className="grid grid-rows-2 gap-2">
            <Cards
              title={"Menunggu Proses"}
              showTotalPendaftar={true}
              totalPendaftar={totalMenunggu}
              className={"bg-slate-100 "}
            />
            <Cards
              title={"Siswa Ditolak"}
              showTotalPendaftar={true}
              totalPendaftar={totalDitolak}
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
        refreshData={fetchAllDataRegistrasi}
      />
    </ContentLayout>
  );
};
