import { Layout } from 'antd';
import React from 'react';
import FlatternRoutes from 'routes/FlatternRoutes';

const FlatternApp = () => (
    <Layout className="kdr-app-layout">
        <FlatternRoutes />
    </Layout>
);
export default FlatternApp;
