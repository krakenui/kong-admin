import './index.less';
import 'flag-icon-css/less/flag-icon.less';

import { MenuOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import wlogo from 'assets/images/logo.png';
import Auxiliary from 'components/Auxiliary';
import UserInfo from 'components/UserInfo';
import UserProfile from 'components/UserProfile';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleCollapsedSideNav } from 'store/actions';
import {
    NAV_STYLE_DRAWER,
    NAV_STYLE_FIXED,
    NAV_STYLE_MINI_SIDEBAR,
    TAB_SIZE,
} from 'store/ActionTypes';

const { Header } = Layout;

const Topbar = () => {
    const { navStyle } = useSelector((state: any) => state.common);
    const { width, navCollapsed } = useSelector((state: any) => state.common);
    const dispatch = useDispatch();

    return (
        <Header className="kdr-default-header kdr-topbar-menu">
            {navStyle === NAV_STYLE_DRAWER ||
            ((navStyle === NAV_STYLE_FIXED ||
                navStyle === NAV_STYLE_MINI_SIDEBAR) &&
                width < TAB_SIZE) ? (
                <div className="kdr-linebar kdr-mr-3">
                    <MenuOutlined
                        onClick={() => {
                            dispatch(toggleCollapsedSideNav(!navCollapsed));
                        }}
                    />
                </div>
            ) : null}
            <Link to="/" className="kdr-d-block kdr-d-lg-none kdr-pointer">
                <img alt="" className="kdr-sm-logo" src={wlogo} />
            </Link>

            <ul className="kdr-header-notifications kdr-ml-auto">
                {width < TAB_SIZE ? (
                    <Auxiliary>
                        <li className="kdr-user-nav">
                            <UserInfo />
                        </li>
                    </Auxiliary>
                ) : (
                    <li className="kdr-user-profile">
                        <UserProfile />
                    </li>
                )}
            </ul>
        </Header>
    );
};

export default Topbar;
