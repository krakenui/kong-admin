import 'flag-icon-css/less/flag-icon.less';
import './index.less';

import { MenuOutlined } from '@ant-design/icons';
import { Layout, Popover } from 'antd';
import wlogo from 'assets/images/w-logo.png';
import Auxiliary from 'components/Auxiliary';
import CustomScrollbars from 'components/CustomScrollbar';
import UserInfo from 'components/UserInfo';
import { languageData } from 'locales';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  TAB_SIZE,
} from 'store/ActionTypes';
import { switchLanguage, toggleCollapsedSideNav } from 'store/actions';

const { Header } = Layout;

const Topbar = () => {
  const { locale, width, navStyle } = useSelector((state: any) => state.settings);
  const { navCollapsed } = useSelector((state: any) => state.common);
  const dispatch = useDispatch();

  const languageMenu = () => (
    <CustomScrollbars className="base-popover-lang-scroll">
      <ul className="base-sub-popover">
        {languageData.map((language) => (
          <li
            className="base-media base-pointer"
            key={JSON.stringify(language)}
            onClick={(e) => dispatch(switchLanguage(language))}
          >
            <i className={`flag-icon flag-icon-${language.icon}`} />
            <span className="base-language-text base-ml-2">{language.name}</span>
          </li>
        ))}
      </ul>
    </CustomScrollbars>
  );

  return (
    <Header className="base-default-header">
      {navStyle === NAV_STYLE_DRAWER ||
      ((navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) &&
        width < TAB_SIZE) ? (
        <div className="base-linebar base-mr-3">
          <MenuOutlined
            onClick={() => {
              dispatch(toggleCollapsedSideNav(!navCollapsed));
            }}
          />
        </div>
      ) : null}
      <Link to="/" className="base-d-block base-d-lg-none base-pointer">
        <img alt="" className="base-sm-logo" src={wlogo} />
      </Link>

      <ul className="base-header-notifications base-ml-auto">
        <li className="base-language">
          <Popover
            overlayClassName="base-popover-horizontal"
            placement="bottomRight"
            content={languageMenu()}
          >
            <span className="base-pointer base-flex-row base-align-items-center">
              <i className={`flag-icon flag-icon-${locale.icon}`} />
              <span className="base-pl-2 base-language-name">{locale.name}</span>
              <i className="icon icon-chevron-down base-pl-2" />
            </span>
          </Popover>
        </li>

        {width < TAB_SIZE && (
          <Auxiliary>
            <li className="base-user-nav">
              <UserInfo />
            </li>
          </Auxiliary>
        )}
      </ul>
    </Header>
  );
};

export default Topbar;
