// Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS file for styling
import { Table } from 'antd';
import LogoutForm from './auth/LogoutForm';
import fetchData from '../features/apiService';

function Home() {

    const [data, setData] = useState([]);


    const fetchDataforTable = async () => {

        try {
            const result = await fetchData();

            setData(result.posts);

        } catch (error) {

        }
    };
    if (data.length == 0) {
        fetchDataforTable();

    }

    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Title', dataIndex: 'title', key: 'title', width: '200px' },
        { title: 'Body', dataIndex: 'body', key: 'body', textWrap: 'work-break' },
        { title: 'Tags', dataIndex: 'tags', key: 'tags', render: tags => tags.join(', ') },
    ];

    return (
        <div className='App '>

            <h1 style={{ color: 'cyan' }}>Posts</h1>
            <div className='' style={{ textAlign: 'center', margin: '2vw' }}>
                <div >


                    <Table
                        style={{ width: 'auto' }}
                        dataSource={data}
                        columns={columns}


                        rowKey="id"

                        size='middle'
                    />


                </div>

            </div>
            <LogoutForm />
        </div>
    );
}

export default Home;
