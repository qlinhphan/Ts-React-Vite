import React, { useState } from 'react';
import { Button, Modal, notification, Select } from 'antd';
import type { FormProps } from 'antd';
import { Checkbox, Form, Input } from 'antd';
import { Value } from 'sass';

interface Iprops {
    getData: () => void
}

const ModalCreateUser: React.FC<Iprops> = ({ getData }) => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    type FieldType = {
        email: string,
        name: string,
        password: string,
        address: string,
        roleId: number
    };

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [roleId, setRoleId] = useState("")

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const showModal = () => {
        setIsCreateModalOpen(true);
    };

    const handleOk = async () => {
        console.log("check rmail: ", email)
        console.log("check name: ", name)
        console.log("check p: ", password)
        console.log("check ad: ", address)
        console.log("check role: ", roleId)

        const formData = new FormData();
        formData.append("email", email);
        formData.append("name", name);
        formData.append("password", password);
        formData.append("address", address);
        formData.append("roleId", roleId);

        const requestOptions = {
            method: 'POST',
            // headers: { 'Content-Type': 'application/json' },
            body: formData
        };
        const response = await fetch('http://localhost:8080/users', requestOptions);
        const data = await response.json();
        console.log(data)

        if (data.data) {
            notification.success({
                message: "Thêm mới người dùng thành công"
            })

            await getData()

            setEmail("")
            setName("")
            setPassword("")
            setAddress("")
            setRoleId("")

            setIsCreateModalOpen(false);
        } else {
            notification.error({
                message: "Thêm mới thất bại",
                description: data.message
            })
        }


    };

    const handleCancel = () => {
        setEmail("")
        setName("")
        setPassword("")
        setAddress("")
        setRoleId("")
        setIsCreateModalOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal
                title="Create User"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isCreateModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                maskClosable={false}
            >

                <div>
                    <p>Email</p>
                    <Input value={email} onChange={(event) => { setEmail(event?.target.value) }} />
                </div>

                <div>
                    <p>Name</p>
                    <Input value={name} onChange={(event) => { setName(event?.target.value) }} />
                </div>


                <div>
                    <p>Password</p>
                    <Input value={password} onChange={(event) => { setPassword(event?.target.value) }} />
                </div>



                <div>
                    <p>Address</p>
                    <Input value={address} onChange={(event) => { setAddress(event?.target.value) }} />
                </div>


                <div>
                    <p>Role?</p>
                    <Select
                        style={{ width: "190px" }}
                        placeholder="Select a option and change input text above"
                        value={roleId} onChange={(value) => { setRoleId(value) }}
                    >
                        <Select.Option value="1">Admin</Select.Option>
                        <Select.Option value="2">User</Select.Option>
                    </Select>
                </div>


            </Modal>
        </>
    );
};

export default ModalCreateUser;