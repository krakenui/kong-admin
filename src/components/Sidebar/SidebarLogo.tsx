import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import wlogo from 'assets/images/w-logo.png';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleCollapsedSideNav, toggleNavStyleChange } from 'store/actions';
import { NAV_STYLE_DRAWER, NAV_STYLE_FIXED, NAV_STYLE_MINI_SIDEBAR, TAB_SIZE } from 'store/ActionTypes';

const SidebarLogo = () => {
  const dispatch = useDispatch();

  let { width, navStyle } = useSelector((state: any) => state.settings);
  let { navCollapsed } = useSelector((state: any) => state.common);

  if (width < TAB_SIZE && navStyle === NAV_STYLE_FIXED) {
    navStyle = NAV_STYLE_DRAWER;
  }

  const toggleCollapseSideNav$ = () => {
    dispatch(toggleCollapsedSideNav(!navCollapsed));
    if (navStyle === NAV_STYLE_FIXED) {
      dispatch(toggleNavStyleChange(NAV_STYLE_MINI_SIDEBAR));
    } else {
      dispatch(toggleNavStyleChange(NAV_STYLE_FIXED));
    }
  };

  return (
    <div className="kd-layout-sider-header">
      {navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR ? (
        <div className="kd-linebar">
          {navStyle === NAV_STYLE_MINI_SIDEBAR ? (
            <MenuUnfoldOutlined onClick={toggleCollapseSideNav$} />
          ) : (
            <MenuFoldOutlined onClick={toggleCollapseSideNav$} />
          )}
        </div>
      ) : null}

      <Link to="/" className="kd-site-logo">
        <img alt="" src={wlogo} />
      </Link>
    </div>
  );
};

export default SidebarLogo;
