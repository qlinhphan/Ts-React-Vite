import React from 'react';
import { Button, Flex } from 'antd';

const ButtonDanger: React.FC = () => (
    <Flex wrap gap="small" className="site-button-ghost-wrapper">
        <Button type="primary" danger ghost>
            Danger
        </Button>
    </Flex>
);

export default ButtonDanger;