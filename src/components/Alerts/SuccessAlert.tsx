import { Col, Result, Row } from 'antd';
import React from 'react';

export interface SuccessAlertProps {
    title: string;
    subTitle: string;
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({
    title,
    subTitle,
    children,
}) => (
    <Row justify="center" align="middle">
        <Col span={24}>
            <Result
              status="success"
              title={title}
              subTitle={subTitle}
              extra={children}
            />
        </Col>
    </Row>
);

export default SuccessAlert;
