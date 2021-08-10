import { Avatar, Popover } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

const UserInfo = () => {
  const dispatch = useDispatch();

  const userMenuOptions = (
    <ul className="base-user-popover">
      <li>My Account</li>
      <li>Connections</li>
    </ul>
  );

  return (
    <Popover overlayClassName="base-popover-horizantal" placement="bottomRight" content={userMenuOptions} trigger="click">
      <Avatar src={'https://via.placeholder.com/150x150'} className="base-avatar base-pointer" alt="" />
    </Popover>
  );
};

export default UserInfo;
