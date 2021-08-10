import { IQueryItem, Pagination } from 'models';
import { useEffect, useState } from 'react';
import { BehaviorSubject, Observable } from 'rxjs';

type NumberSet = (arg: number) => void;
type QuerySet = (arg: IQueryItem) => void;
type ExecuteSet = () => void;

export default function usePaginationApi<T>(
  doFetch$: (payload: Pagination<T>) => Observable<T[]>,
  doCompleted: () => void = () => {},
  defaultPagination: Pagination<T>
): [T[] | undefined, any, NumberSet, NumberSet, QuerySet, ExecuteSet] {
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState();
  const [pagination, setPagination] = useState<Pagination<T>>(defaultPagination);
  const querySubject$: BehaviorSubject<any> = new BehaviorSubject<any>(doFetch$(pagination));

  const setPage$ = (page: number) => {
    setPagination({
      ...pagination,
      page,
    });
  };

  const setPasize$ = (pageSize: number) => {
    setPagination({
      ...pagination,
      pageSize,
    });
  };

  const setQuery$ = (query: IQueryItem) => {
    setPagination({
      ...pagination,
      query,
    });
  };

  const query$ = () => {
    querySubject$.next(pagination);
  };

  useEffect(() => {
    const sub = querySubject$.subscribe({
      next: setData,
      error: setError,
      complete: doCompleted,
    });

    return () => sub.unsubscribe();
  }, []);

  return [data, error, setPage$, setPasize$, setQuery$, query$];
}
