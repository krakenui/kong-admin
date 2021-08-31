import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const ForbiddenPage: React.FC<any> = () => (
    <div className="login-page kdr-mt-4 kdr-pt-4 kdr-flex-column kdr-align-items-center">
        <h1 className="kdr-fs-icon-lg">403</h1>
        <p className="kdr-text-uppercase">access not granted</p>
        <Button type="primary">
            <Link to="/">Back to Home</Link>
        </Button>
    </div>
);

export default ForbiddenPage;
