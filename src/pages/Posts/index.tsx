import { PaginationProps, Table } from 'antd';
import { getAllPosts } from 'apis/Posts';
import useApi from 'hooks/UseApi';
import { Pagination, Post } from 'models';
import React from 'react';
import { useEffect, useState } from 'react';

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
    const [pagination, setPagination] = useState<PaginationProps>({
        current: 0,
        pageSize: 20,
    });
    const defaultPagination = new Pagination<Post>();
    defaultPagination.page = 0;
    defaultPagination.pageSize = 20;

    const [data, error] = useApi(
        () => {
            setLoading(true);
            return getAllPosts(
                pagination.current || 0,
                pagination.pageSize || 20
            );
        },
        () => {
            setLoading(false);
        }
    );

    return (
        <div className="products base-page">
            <Table columns={columns} dataSource={data} rowKey="id"></Table>
        </div>
    );
};

export default PostListPage;
