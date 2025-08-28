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
import { Button, Flex, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import ButtonPrimary from '../button/button.primary';
import ButtonDanger from '../button/button.danger';
import ModalCreateUser from './modal.create';
import ModalUpdateUser from './model.update';

interface DataType {
    address: string,
    email: string,
    name: string
    id: number
}






const TableUsers: React.FC = () => {

    const [allUsers, setAllUsers] = useState([])

    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

    const [personExactly, setPersonExactly] = useState({
        email: "",
        name: "",
        password: "",
        address: "",
    })



    const getData = async () => {
        const response = await fetch("http://localhost:8080/users/all", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        const d = await response.json()
        setAllUsers(d.data)
    }

    useEffect(() => {
        getData()
    }, []);


    const viewExactly = async (id: number) => {

        setIsUpdateModalOpen(true)

        const response = await fetch(`http://localhost:8080/user/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        const d = await response.json()
        console.log(d.data)
        setPersonExactly(d.data)
        // alert(`view ${id}`)
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
                    <Flex wrap gap="small" className="site-button-ghost-wrapper">
                        <Button type="primary" ghost onClick={() => { viewExactly(record.id) }}>
                            Update user {record.id}
                        </Button>
                    </Flex>
                </Space>
            ),
        },
    ];

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2>List users: </h2>
                <ModalCreateUser getData={getData}></ModalCreateUser>
                <ModalUpdateUser getData={getData} isUpdateModalOpen={isUpdateModalOpen} setIsUpdateModalOpen={setIsUpdateModalOpen}
                    personExactly={personExactly}
                ></ModalUpdateUser>
            </div>

            <Table<DataType> columns={columns} dataSource={allUsers} pagination={false} />
        </>

    )
}

export default TableUsers;