import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import wlogo from 'assets/images/w-logo.png';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleNavStyleChange } from 'store/actions';
import {
    NAV_STYLE_DRAWER,
    NAV_STYLE_FIXED,
    NAV_STYLE_MINI_SIDEBAR,
    TAB_SIZE,
} from 'store/ActionTypes';

const SidebarLogo = () => {
    const dispatch = useDispatch();

    const { width } = useSelector((state: any) => state.common);
    let { navStyle } = useSelector((state: any) => state.common);

    if (width < TAB_SIZE && navStyle === NAV_STYLE_FIXED) {
        navStyle = NAV_STYLE_DRAWER;
    }

    const toggleCollapseSideNav$ = () => {
        if (navStyle === NAV_STYLE_FIXED) {
            dispatch(toggleNavStyleChange(NAV_STYLE_MINI_SIDEBAR));
        } else {
            dispatch(toggleNavStyleChange(NAV_STYLE_FIXED));
        }
    };

    return (
        <div className="kdr-layout-sider-header">
            {navStyle === NAV_STYLE_FIXED ||
            navStyle === NAV_STYLE_MINI_SIDEBAR ? (
                <div className="kdr-linebar">
                    {navStyle === NAV_STYLE_MINI_SIDEBAR ? (
                        <MenuUnfoldOutlined onClick={toggleCollapseSideNav$} />
                    ) : (
                        <MenuFoldOutlined onClick={toggleCollapseSideNav$} />
                    )}
                </div>
            ) : null}

            <Link to="/" className="kdr-site-logo">
                <img alt="" src={wlogo} />
            </Link>
        </div>
    );
};

export default SidebarLogo;
