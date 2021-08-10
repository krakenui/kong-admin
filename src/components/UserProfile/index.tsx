import { Avatar, Popover } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './index.less';
import React from 'react';

const UserProfile = () => {
  const userMenuOptions = (
    <ul className="base-user-popover">
      <li>My Account</li>
      <li>Connections</li>
      <li>Logout</li>
    </ul>
  );

  return (
    <div className="base-flex-row base-align-items-center base-mb-4 base-avatar-row">
      <Popover placement="bottomRight" content={userMenuOptions} trigger="click">
        <Avatar
          src="https://via.placeholder.com/150x150"
          className="base-size-40 base-pointer base-mr-2"
          alt=""
        />
        <span className="base-avatar-name">
          Nikola Tesla <DownOutlined className="base-ml-1" />
        </span>
      </Popover>
    </div>
  );
};

export default UserProfile;
