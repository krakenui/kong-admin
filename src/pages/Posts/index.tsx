import { Table } from 'antd';
import { getAllPosts } from 'apis/Posts';
import { notifyError } from 'components/Notification';
import useApi from 'hooks/UseApi';
import React, { useEffect, useState } from 'react';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Content',
        dataIndex: 'body',
        key: 'body',
    },
];

const PostListPage: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [data, error] = useApi(
        () => {
            setLoading(true);
            return getAllPosts(0, 20);
        },
        () => {
            setLoading(false);
        },
        []
    );

    useEffect(() => {
        if (error != null) {
            notifyError('Load all posts error.');
        }
    }, [error]);

    return (
        <div className="products base-page">
            <Table
                columns={columns}
                dataSource={data}
                loading={loading}
                rowKey="id"
            />
        </div>
    );
};

export default PostListPage;
