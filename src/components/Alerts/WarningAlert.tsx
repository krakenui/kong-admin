import { Col, Result, Row } from 'antd';
import React from 'react';

export interface WarningAlertProps {
    title: string;
    subTitle: string;
}

const WarningAlert: React.FC<WarningAlertProps> = ({
    title,
    subTitle,
    children,
}) => (
    <Row justify="center" align="middle">
        <Col span={24}>
            <Result
                status="warning"
                title={title}
                subTitle={subTitle}
                extra={children}
            />
        </Col>
    </Row>
);

export default WarningAlert;
