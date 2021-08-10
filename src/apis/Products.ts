import { Pagination, Product } from 'models';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import http from './HttpClient';

export function getAllProducts(page: number, pageSize: number): Observable<Product[]> {
  return from(http.get(`products?page=${page}&pageSize=${pageSize}`)).pipe(
    map((payload: any) => {
      if (payload == null || payload.length === 0) {
        return [];
      }

      return payload.map((p: any) => new Product().fromJson(p));
    })
  );
}

export function pagingProducts(pagination: Pagination<Product>): Observable<Product[]> {
  console.log(pagination);
  const { page, pageSize } = pagination;

  return from(http.get(`products?page=${page}&pageSize=${pageSize}`)).pipe(
    map((payload: any) => {
      if (payload == null || payload.length === 0) {
        return [];
      }

      return payload.map((p: any) => new Product().fromJson(p));
    })
  );
}
