import './index.less';

import { Avatar, Popover } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logOut } from 'store/actions';

const UserProfile = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { user } = useSelector((state: any) => state.auth);

    const onLogOut = useCallback(() => {
        dispatch(logOut());
        history.push('/login');
    }, [dispatch]);

    const userMenuOptions = (
        <ul className="kdr-user-popover">
            <li>My Account</li>
            <li>Connections</li>
            <li onClick={onLogOut}>Logout</li>
        </ul>
    );

    const parseUserRole = (user: any) => {
        if (user == null || user.roles == null || user.roles.length === 0) {
            return '';
        }

        const firstRole = user.roles.split(',')[0] || '';
        return firstRole.replace(/[_,-]/gi, ' ');
    };

    return (
        <div className="kdr-user-profile kdr-flex-row kdr-align-items-center kdr-avatar-row kdr-justify-content-center">
            <Popover
                placement="bottomRight"
                content={userMenuOptions}
                trigger="click"
                className="kdr-align-items-center kdr-flex-row kdr-justify-content-center"
            >
                <div className="userName kdr-flex-column kdr-align-items-end kdr-justify-content-center kdr-pr-2">
                    <span className="kdr-user-account kdr-fs-lg kdr-text-capitalize">
                        {user?.name}
                    </span>
                    <span className="kdr-user-account kdr-text-capitalize kdr-fs-sm">
                        {parseUserRole(user)}
                    </span>
                </div>

                <Avatar
                    src="https://via.placeholder.com/150x150"
                    className="kdr-size-40 kdr-pointer"
                    alt={user?.name}
                />
            </Popover>
        </div>
    );
};

export default UserProfile;
