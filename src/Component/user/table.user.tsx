// import { useEffect, useState } from 'react';
// import '../../styles/tableUser.scss'
// interface IUsers {
//     address: string,
//     email: string,
//     name: string
// }

// const TableUsers = () => {

//     const [allUsers, setAllUsers] = useState([])

//     useEffect(() => {


//         const getData = async () => {
//             const response = await fetch("http://localhost:8080/users/all", {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                 }
//             });

//             const d = await response.json()
//             console.log(d.data)
//             setAllUsers(d.data)
//         }

//         getData()
//     }, []);


//     return (
//         <div>
//             <h2>List Users: </h2>
//             <table>
//                 <tr>
//                     <th>Address</th>
//                     <th>Email</th>
//                     <th>Name</th>
//                 </tr>
//                 {allUsers.map((user: IUsers, index) => {
//                     return (
//                         <tr>
//                             <td>{user.address}</td>
//                             <td>{user.email}</td>
//                             <td>{user.name}</td>
//                         </tr>
//                     )
//                 })

//                 }

//             </table>
//         </div>
//     )
// }

// export default TableUsers

import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import ButtonPrimary from '../button/button.primary';
import ButtonDanger from '../button/button.danger';

interface DataType {
    address: string,
    email: string,
    name: string
}



const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <ButtonPrimary></ButtonPrimary>
                <ButtonDanger></ButtonDanger>
            </Space>
        ),
    },
];

const TableUsers: React.FC = () => {

    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {


        const getData = async () => {
            const response = await fetch("http://localhost:8080/users/all", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            const d = await response.json()
            console.log(d.data)
            setAllUsers(d.data)
        }

        getData()
    }, []);

    return (
        <Table<DataType> columns={columns} dataSource={allUsers} />
    )
}

export default TableUsers;