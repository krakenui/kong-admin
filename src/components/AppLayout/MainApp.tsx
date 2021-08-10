import { Layout } from 'antd';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import AppRoutes from 'routes';

import Sidebar from '../Sidebar';
import Topbar from '../Topbar';

const { Content, Footer } = Layout;

const MainApp = () => {
  return (
    <Layout className="base-app-layout">
      <Sidebar />
      <Layout>
        <Topbar />
        <Content className={`base-layout-content base-container-wrap`}>
          <AppRoutes />
          <Footer>
            <div className="base-layout-footer-content">Copyright Company Name © 2018</div>
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainApp;
