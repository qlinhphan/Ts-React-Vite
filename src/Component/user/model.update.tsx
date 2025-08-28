import React, { useState } from 'react';
import { Button, Modal, notification, Select } from 'antd';
import type { FormProps } from 'antd';
import { Checkbox, Form, Input } from 'antd';
import { Value } from 'sass';

interface Iprops {
    getData: () => void
    isUpdateModalOpen: boolean
    setIsUpdateModalOpen: any
    personExactly: {
        email: string,
        name: string,
        password: string,
        address: string,
    }
}

const ModalUpdateUser: React.FC<Iprops> = ({ getData, isUpdateModalOpen, setIsUpdateModalOpen, personExactly }) => {


    type FieldType = {
        email: string,
        name: string,
        password: string,
        address: string,
    };

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [roleId, setRoleId] = useState(2)

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const showModal = () => {
        setIsUpdateModalOpen(true);
    };

    const handleOk = async () => {
        // console.log("check rmail: ", email)
        // console.log("check name: ", name)
        // console.log("check p: ", password)
        // console.log("check ad: ", address)
        // console.log("check role: ", roleId)

        // const formData = new FormData();
        // formData.append("email", email);
        // formData.append("name", name);
        // formData.append("password", password);
        // formData.append("address", address);
        // formData.append("roleId", roleId);

        // const requestOptions = {
        //     method: 'POST',
        //     // headers: { 'Content-Type': 'application/json' },
        //     body: formData
        // };
        // const response = await fetch('http://localhost:8080/users', requestOptions);
        // const data = await response.json();
        // console.log(data)

        // if (data.data) {
        //     notification.success({
        //         message: "Thêm mới người dùng thành công"
        //     })

        //     await getData()

        //     setEmail("")
        //     setName("")
        //     setPassword("")
        //     setAddress("")
        //     setRoleId("")

        //     setIsUpdateModalOpen(false);
        // } else {
        //     notification.error({
        //         message: "Thêm mới thất bại",
        //         description: data.message
        //     })
        // }
        setIsUpdateModalOpen(false);


    };

    const handleCancel = () => {
        setEmail("")
        setName("")
        setPassword("")
        setAddress("")
        setRoleId(2)
        setIsUpdateModalOpen(false);
    };

    return (
        <>
            {/* <Button type="primary" onClick={showModal}>
                Open Modal
            </Button> */}
            <Modal
                title="Update User"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isUpdateModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                maskClosable={false}
            >

                <div>
                    <p>Email</p>
                    <Input value={personExactly.email} onChange={(event) => { setEmail(event?.target.value) }} />
                </div>

                <div>
                    <p>Name</p>
                    <Input value={personExactly.name} onChange={(event) => { setName(event?.target.value) }} />
                </div>


                <div>
                    <p>Password</p>
                    <Input value={personExactly.password} onChange={(event) => { setPassword(event?.target.value) }} />
                </div>



                <div>
                    <p>Address</p>
                    <Input value={personExactly.address} onChange={(event) => { setAddress(event?.target.value) }} />
                </div>


                {/* <div>
                    <p>Role?</p>
                    <Select
                        style={{ width: "190px" }}
                        placeholder="Select a option and change input text above"
                        value={personExactly.roleId} onChange={(value) => { setRoleId(value) }}
                    >
                        <Select.Option value="1">Admin</Select.Option>
                        <Select.Option value="2">User</Select.Option>
                    </Select>
                </div> */}


            </Modal>
        </>
    );
};

export default ModalUpdateUser;