import React from 'react';
import { Button, Flex } from 'antd';



const ButtonPrimary = () => (
    <Flex wrap gap="small" className="site-button-ghost-wrapper">
        <Button type="primary" ghost>
            Primary
        </Button>
    </Flex>
);

export default ButtonPrimary;