import {
  DashboardOutlined,
  SettingOutlined,
  SkinOutlined,
  SnippetsOutlined,
} from '@ant-design/icons';
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
      <div className="base-sidebar-content">
        <div className={`base-sidebar-notifications`}>
          <UserProfile />
        </div>
        <CustomScrollbars className="base-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme="dark"
            mode="inline"
          >
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

        <Menu theme="dark" mode="inline" className="bottom-menu">
          <Menu.Item key="settings">
            <Link to="/settings">
              <SettingOutlined />
              <span>
                <IntlMessages id="sidebar.settingPage" />
              </span>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};

export default SidebarContent;
