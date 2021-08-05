import { Avatar, Popover } from 'antd';
import React from 'react';

const UserProfile = () => {
  const userMenuOptions = (
    <ul className="kd-user-popover">
      <li>My Account</li>
      <li>Connections</li>
      <li>Logout</li>
    </ul>
  );

  return (
    <div className="kd-flex-row kd-align-items-center kd-mb-4 kd-avatar-row">
      <Popover placement="bottomRight" content={userMenuOptions} trigger="click">
        <Avatar src="https://via.placeholder.com/150x150" className="kd-size-40 kd-pointer kd-mr-3" alt="" />
        <span className="kd-avatar-name">
          Rob Farnandies
          <i className="icon icon-chevron-down kd-fs-xxs kd-ml-2" />
        </span>
      </Popover>
    </div>
  );
};

export default UserProfile;
