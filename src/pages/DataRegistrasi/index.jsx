import React, { useEffect, useState } from 'react'
import { deleteDataRegistration, getAllData } from '../../api/api'
import TableData from '../../components/organisms/Table';
import { ContentLayout } from '../../components/organisms/ContentLayout';



export const DataRegistrasi = () => {
    const [isData, setIsData] = useState([]);


    const fetchAllDataRegistrasi = async () => {
        try {
            const data = await getAllData();
            console.log('dataGet', data);

            setIsData(data)
        } catch (err) {
            console.error('error fetching data');
            throw err;

        }
    }

    useEffect(() => {
        fetchAllDataRegistrasi();
    }, [])

    const handleDelete = async (id) => {
        try {
            const response = await deleteDataRegistration(id);
            const data = await getAllData();
            setIsData(data)
        } catch (error) {
            console.error('Error Delete data');
            throw error
        }
    }
    return (
        <div className=''>
            <ContentLayout>
                <div className="w-full">
                    <TableData data={isData} showTableHeader={true} showTableSearch={true} showTableFilter={true} onDelete={handleDelete} />
                </div>
            </ContentLayout>

        </div>
    )
}
