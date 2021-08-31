import {
    ContainerOutlined,
    SettingOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import { Menu, Popover } from 'antd';
import CustomScrollbars from 'components/CustomScrollbar';
import IntlMessages from 'components/IntlMessages';
import { languageData } from 'locales';
import { isAdmin } from 'models/UserRoles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { switchLanguage } from 'store/actions';

import SidebarLogo from './SidebarLogo';

const SidebarContent: React.FC = () => {
    const { pathname } = useSelector((state: any) => state.common);
    const dispatch = useDispatch();
    const { locale } = useSelector((state: any) => state.settings);
    const { user } = useSelector((state: any) => state.auth);

    const selectedKeys = pathname;
    const defaultOpenKeys = selectedKeys.split('/')[2];

    const languageMenu = () => (
        <CustomScrollbars className="kdr-popover-lang-scroll">
            <ul className="kdr-sub-popover">
                {languageData.map((language) => (
                    <li
                        className="kdr-media kdr-pointer"
                        key={JSON.stringify(language)}
                        onClick={() => dispatch(switchLanguage(language))}
                    >
                        <i className={`flag-icon flag-icon-${language.icon}`} />
                        <span className="kdr-language-text kdr-ml-2">
                            {language.name}
                        </span>
                    </li>
                ))}
            </ul>
        </CustomScrollbars>
    );

    return (
        <>
            <SidebarLogo />
            <div className="kdr-sidebar-content">
                <CustomScrollbars className="kdr-layout-sider-scrollbar">
                    <Menu
                        defaultOpenKeys={[defaultOpenKeys]}
                        selectedKeys={[selectedKeys]}
                        theme="dark"
                        mode="inline"
                    >
                        <Menu.SubMenu
                            key="posts"
                            icon={<ContainerOutlined />}
                            title={<IntlMessages id="sidebar.post.list" />}
                        >
                            <Menu.Item key="/portal/posts">
                                <Link to="/portal/posts">
                                    <IntlMessages id="sidebar.post.list.active" />
                                </Link>
                            </Menu.Item>
                        </Menu.SubMenu>

                        {isAdmin(user?.roles) && (
                            <Menu.SubMenu
                                key="users"
                                icon={<TeamOutlined />}
                                title={<IntlMessages id="sidebar.user.list" />}
                            >
                                <Menu.Item key="/portal/users">
                                    <Link to="/portal/users">
                                        <IntlMessages id="sidebar.user.list.active" />
                                    </Link>
                                </Menu.Item>
                            </Menu.SubMenu>
                        )}
                    </Menu>
                </CustomScrollbars>

                <Menu theme="dark" mode="inline" className="bottom-menu">
                    <Menu.Item key="langs">
                        <Popover
                            overlayClassName="kdr-popover-horizontal"
                            placement="bottomRight"
                            content={languageMenu()}
                        >
                            <span className="anticon kdr-pointer">
                                <i
                                    className={`flag-icon flag-icon-${locale.icon}`}
                                />
                            </span>

                            <span className="kdr-pointer">{locale.name}</span>
                        </Popover>
                    </Menu.Item>
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
