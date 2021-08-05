import 'flag-icon-css/less/flag-icon.less';

import { Layout, Popover } from 'antd';
import wlogo from 'assets/images/w-logo.png';
import Auxiliary from 'components/Auxiliary';
import UserInfo from 'components/UserInfo';
import { languageData } from 'locales';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { NAV_STYLE_DRAWER, NAV_STYLE_FIXED, NAV_STYLE_MINI_SIDEBAR, TAB_SIZE } from 'store/ActionTypes';
import CustomScrollbars from 'components/CustomScrollbar';

const { Header } = Layout;

const Topbar = () => {
  const { locale, width, navStyle } = useSelector((state: any) => state.settings);
  const { navCollapsed } = useSelector((state: any) => state.common);
  const dispatch = useDispatch();

  const languageMenu = () => (
    <CustomScrollbars className="kd-popover-lang-scroll">
      <ul className="kd-sub-popover">
        {languageData.map((language) => (
          <li className="kd-media kd-pointer" key={JSON.stringify(language)}>
            <i className={`flag-icon flag-icon-${language.icon}`} />
            <span className="kd-language-text">{language.name}</span>
          </li>
        ))}
      </ul>
    </CustomScrollbars>
  );

  return (
    <Header className="kd-default-header">
      {navStyle === NAV_STYLE_DRAWER ||
      ((navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) && width < TAB_SIZE) ? (
        <div className="kd-linebar kd-mr-3">
          <i className="kd-icon-btn icon icon-menu" />
        </div>
      ) : null}
      <Link to="/" className="kd-d-block kd-d-lg-none kd-pointer">
        <img alt="" src={wlogo} />
      </Link>

      <ul className="kd-header-notifications kd-ml-auto">
        <li className="kd-language">
          <Popover
            overlayClassName="kd-popover-horizontal"
            placement="bottomRight"
            content={languageMenu()}
            trigger="click"
          >
            <span className="kd-pointer kd-flex-row kd-align-items-center">
              <i className={`flag-icon flag-icon-${locale.icon}`} />
              <span className="kd-pl-2 kd-language-name">{locale.name}</span>
              <i className="icon icon-chevron-down kd-pl-2" />
            </span>
          </Popover>
        </li>

        {width < TAB_SIZE && (
          <Auxiliary>
            <li className="kd-user-nav">
              <UserInfo />
            </li>
          </Auxiliary>
        )}
      </ul>
    </Header>
  );
};

export default Topbar;
