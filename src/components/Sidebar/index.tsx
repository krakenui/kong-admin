import './index.less';

import { Drawer, Layout } from 'antd';
import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCollapsedSideNav, updateWindowWidth } from 'store/actions';
import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE,
} from 'store/ActionTypes';

import SidebarContent from './SidebarContent';

const { Sider } = Layout;

const Sidebar = () => {
  const dispatch = useDispatch();

  let { locale, width, themeType, navStyle } = useSelector((state: any) => state.settings);
  let { navCollapsed, pathname } = useSelector((state: any) => state.common);

  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch(updateWindowWidth(window.innerWidth));
    });
  }, [dispatch]);

  const drawerStyle = classNames(
    {
      'kd-collapsed-sidebar':
        (navStyle === NAV_STYLE_FIXED ||
          navStyle === NAV_STYLE_MINI_SIDEBAR ||
          navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) &&
        width < TAB_SIZE,
    },
    {
      'kd-mini-sidebar':
        navStyle === NAV_STYLE_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
    },
    {
      'kd-mini-custom-sidebar': navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
    },
    {
      'kd-custom-sidebar': navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
    }
  );

  return (
    <Sider
      className={`kd-app-sidebar ${drawerStyle}`}
      trigger={null}
      collapsed={
        width < TAB_SIZE
          ? false
          : navStyle === NAV_STYLE_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR
      }
      collapsible
    >
      {navStyle === NAV_STYLE_DRAWER || width < TAB_SIZE ? (
        <Drawer
          className={`kd-drawer-sidebar`}
          placement="left"
          closable={false}
          visible={navCollapsed}
          onClose={() => dispatch(toggleCollapsedSideNav(!navCollapsed))}
        >
          <SidebarContent />
        </Drawer>
      ) : (
        <SidebarContent />
      )}
    </Sider>
  );
};
export default Sidebar;
