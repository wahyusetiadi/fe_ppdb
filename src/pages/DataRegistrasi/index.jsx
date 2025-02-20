import React, { useEffect, useState } from 'react'
import { getAllData } from '../../api/api'
import TableData from '../../components/organisms/Table';
import { ContentLayout } from '../../components/organisms/ContentLayout';



export const DataRegistrasi = () => {
    const [isData, setIsData] = useState([]);


    const fetchAllDataRegistrasi = async () => {
        try {
            const data = await getAllData();
            setIsData(data)
        } catch (err) {
            console.error('error fetching data');
            throw err;

        }
    }

    useEffect(() => {
        fetchAllDataRegistrasi();
    }, [])
    return (
        <div className=''>
            <ContentLayout>
                <div className="w-full">
                    <TableData data={isData} showTableHeader={true} showTableSearch={true} showTableFilter={true} />
                </div>
            </ContentLayout>

        </div>
    )
}
