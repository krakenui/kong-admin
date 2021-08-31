import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { getAllUsers } from 'apis/Users';
import DynamicTable from 'components/DynamicTable';
import IntlMessages from 'components/IntlMessages';
import { notifyError } from 'components/Notification';
import PageContent from 'components/PageContent';
import useApi from 'hooks/UseApi';
import useIntlMessage from 'hooks/UseIntlMessage';
import React, { FC, useEffect, useState } from 'react';

const UserListPage: FC<any> = () => {
    const [loading, setLoading] = useState(false);
    const [posts, getPostsError] = useApi(
        () => {
            setLoading(true);

            return getAllUsers();
        },
        () => {
            setLoading(false);
        },
        []
    );

    useEffect(() => {
        if (getPostsError != null) {
            notifyError('Fetch post list error');
        }
    }, [getPostsError]);

    const columns: any[] = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Roles',
            dataIndex: 'roles',
            key: 'roles',
        },
    ];

    return (
        <>
            <Breadcrumb className="kdr-page-breadcrumbs">
                <Breadcrumb.Item href="/">
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <IntlMessages id="sidebar.user.list" />
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <IntlMessages id="sidebar.user.list.active" />
                </Breadcrumb.Item>
            </Breadcrumb>

            <PageContent className="survey-list-page">
                <DynamicTable
                    primaryTitle={useIntlMessage('sidebar.user.list.active')}
                    loading={loading}
                    dataSource={posts}
                    columns={columns}
                    rowKey="id"
                    scroll={{ x: 'max-content' }}
                />
            </PageContent>
        </>
    );
};

export default UserListPage;
