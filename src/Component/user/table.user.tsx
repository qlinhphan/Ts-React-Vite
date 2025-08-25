import { useEffect, useState } from 'react';
import '../../styles/tableUser.css'
interface IUsers {
    address: string,
    email: string,
    name: string
}

const TableUsers = () => {

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
        <div>
            <h2>List Users: </h2>
            <table>
                <tr>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Name</th>
                </tr>
                {allUsers.map((user: IUsers, index) => {
                    return (
                        <tr>
                            <td>{user.address}</td>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                        </tr>
                    )
                })

                }

            </table>
        </div>
    )
}

export default TableUsers