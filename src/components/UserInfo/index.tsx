import { Avatar, Popover } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

const UserInfo = () => {
  const dispatch = useDispatch();

  const userMenuOptions = (
    <ul className="kd-user-popover">
      <li>My Account</li>
      <li>Connections</li>
    </ul>
  );

  return (
    <Popover overlayClassName="kd-popover-horizantal" placement="bottomRight" content={userMenuOptions} trigger="click">
      <Avatar src={'https://via.placeholder.com/150x150'} className="kd-avatar kd-pointer" alt="" />
    </Popover>
  );
};

export default UserInfo;
