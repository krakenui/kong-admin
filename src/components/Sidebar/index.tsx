import './index.less';

import { Drawer, Layout } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCollapsedSideNav } from 'store/actions';
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

    const { width } = useSelector((state: any) => state.common);
    const { navStyle } = useSelector((state: any) => state.common);
    const { navCollapsed } = useSelector((state: any) => state.common);

    const drawerStyle = classNames(
        {
            'kdr-collapsed-sidebar':
                (navStyle === NAV_STYLE_FIXED ||
                    navStyle === NAV_STYLE_MINI_SIDEBAR ||
                    navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) &&
                width < TAB_SIZE,
        },
        {
            'kdr-mini-sidebar':
                navStyle === NAV_STYLE_MINI_SIDEBAR ||
                navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
        },
        {
            'kdr-mini-custom-sidebar':
                navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
        },
        {
            'kdr-custom-sidebar':
                navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
        }
    );

    return (
        <Sider
          className={`kdr-app-sidebar ${drawerStyle} kdr-layout-sider-dark`}
          trigger={null}
          collapsed={
                width < TAB_SIZE
                    ? false
                    : navStyle === NAV_STYLE_MINI_SIDEBAR ||
                      navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR
            }
          collapsible
        >
            {navStyle === NAV_STYLE_DRAWER || width < TAB_SIZE ? (
                <Drawer
                  className="kdr-drawer-sidebar kdr-drawer-sidebar-dark"
                  placement="left"
                  closable={false}
                  visible={navCollapsed}
                  onClose={() =>
                        dispatch(toggleCollapsedSideNav(!navCollapsed))}
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
