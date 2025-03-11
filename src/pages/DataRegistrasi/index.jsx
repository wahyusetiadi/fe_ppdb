import React, { useEffect, useState } from "react";
import { deleteDataRegistration, getAllData } from "../../api/api";
import TableData from "../../components/organisms/Table";
import { ContentLayout } from "../../components/organisms/ContentLayout";
import { useNavigate } from "react-router-dom";

export const DataRegistrasi = () => {
  const [isData, setIsData] = useState([]);
  const navigate = useNavigate();

  const fetchAllDataRegistrasi = async () => {
    try {
      const data = await getAllData();
      console.log("dataGet", data);

      setIsData(data);
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
  
  const handleUpdate = async () => {
    try {
      const data = await getAllData();
      console.log("dataGet", data);

      setIsData(data);
    } catch (err) {
      console.error("error fetching data");
      throw err;
    }
  }
  return (
    <div className="">
      <ContentLayout>
        <div className="w-full">
          <TableData
            data={isData}
            showTableHeader={true}
            showTableSearch={true}
            showTableFilter={true}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onUpdate={handleUpdate}
          />
        </div>
      </ContentLayout>
    </div>
  );
};
