import { DashboardOutlined, SkinOutlined, SnippetsOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import CustomScrollbars from 'components/CustomScrollbar';
import IntlMessages from 'components/IntlMessages';
import UserProfile from 'components/UserProfile';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import SidebarLogo from './SidebarLogo';

const SidebarContent: React.FC = () => {
  let { pathname } = useSelector((state: any) => state.common);

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];

  return (
    <>
      <SidebarLogo />
      <div className="kd-sidebar-content">
        <div className={`kd-sidebar-notifications`}>
          <UserProfile />
        </div>
        <CustomScrollbars className="kd-layout-sider-scrollbar">
          <Menu defaultOpenKeys={[defaultOpenKeys]} selectedKeys={[selectedKeys]} mode="inline">
            <Menu.Item key="">
              <Link to="/">
                <DashboardOutlined />
                <span>
                  <IntlMessages id="sidebar.dashboardPage" />
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="sample">
              <Link to="/sample">
                <SnippetsOutlined />
                <span>
                  <IntlMessages id="sidebar.samplePage" />
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="products">
              <Link to="/products">
                <SkinOutlined />
                <span>
                  <IntlMessages id="sidebar.productListPage" />
                </span>
              </Link>
            </Menu.Item>
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

export default SidebarContent;
