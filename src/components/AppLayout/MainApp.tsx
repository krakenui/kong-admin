import { Layout } from 'antd';
import React from 'react';
import AppRoutes from 'routes';

import Sidebar from '../Sidebar';
import Topbar from '../Topbar';

const { Content, Footer } = Layout;

const MainApp = () => (
    <Layout className="kdr-app-layout">
        <Sidebar />
        <Layout>
            <Topbar />
            <Content className="kdr-layout-content kdr-container-wrap">
                <AppRoutes />
                <Footer>
                    <div className="kdr-layout-footer-content kdr-text-center">
                        React Admin Dashboard | Copyright ©{' '}
                        {new Date().getFullYear()}{' '}
                        <a className="kdr-link" href="https://blogs.kongd.io/">
                            Kongd.io
                        </a>
                    </div>
                </Footer>
            </Content>
        </Layout>
    </Layout>
);
export default MainApp;
