import { Avatar, Popover } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logOut } from 'store/actions';

const UserInfo = () => {
    const dispatch = useDispatch();
    const history = useHistory();

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

    return (
        <Popover
          overlayClassName="kdr-popover-horizantal"
          placement="bottomRight"
          content={userMenuOptions}
          trigger="click"
        >
            <Avatar
              src="https://via.placeholder.com/150x150"
              className="kdr-avatar kdr-pointer"
              alt=""
            />
        </Popover>
    );
};

export default UserInfo;
