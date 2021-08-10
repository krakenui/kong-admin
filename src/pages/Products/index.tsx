import { PaginationProps } from 'antd';
import { getAllProducts, pagingProducts } from 'apis/Products';
import useApi from 'hooks/UseApi';
import usePaginationApi from 'hooks/UsePaginationApi';
import { IQueryItem, Pagination, Product } from 'models';
import React from 'react';
import { useEffect, useState } from 'react';
import { from } from 'rxjs';

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState<PaginationProps>({
    current: 0,
    pageSize: 20,
  });
  const defaultPagination = new Pagination<Product>();
  defaultPagination.page = 0;
  defaultPagination.pageSize = 20;

  const [data, error, setPage$, setPasize$, setQuery$, query$] = usePaginationApi<Product>(
    (pag: Pagination<Product>) => {
      setLoading(true);
      return from(pagingProducts(pag));
    },
    () => {
      setLoading(false);
    },
    defaultPagination
  );

  return (
    <div className="products kd-page">
      <p>Products!!!</p>
    </div>
  );
};

export default HomePage;
