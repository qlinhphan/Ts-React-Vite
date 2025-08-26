import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: (
            <NavLink to={"/"}>Home</NavLink>
        ),
        key: 'home',
        icon: <MailOutlined />,
    },
    {
        key: 'users',
        label: (
            // <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            //     Navigation Four - Link
            // </a>
            <NavLink to={"/users"}>Users</NavLink>
        ),
        icon: < SettingOutlined />,
    },
];

const Menus: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Menus;