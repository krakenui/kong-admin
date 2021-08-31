import loaderImg from 'assets/images/loader.svg';
import classNames from 'classnames';
import React from 'react';

const CircularProgress: React.FC<any> = ({ className }) => {
    const loaderCls = classNames('loader', className);

    return <div className={loaderCls}>...</div>;
};

export default CircularProgress;
