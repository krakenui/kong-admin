import { Layout } from 'antd';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import AppRoutes from 'routes';

import Sidebar from '../Sidebar';
import Topbar from '../Topbar';

const { Content, Footer } = Layout;

const MainApp = () => {
  return (
    <Layout className="kd-app-layout">
      <Sidebar />
      <Layout>
        <Topbar />
        <Content className={`kd-layout-content kd-container-wrap`}>
          <AppRoutes />
          <Footer>
            <div className="kd-layout-footer-content">Copyright Company Name © 2018</div>
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainApp;
