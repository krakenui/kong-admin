export interface IQueryItem {
  [key: string]: string;
}

export interface IArgument {
  [key: string]: string | number | boolean;
}

export class Pagination<T> {
  page: number = 0;
  pageSize: number = 10;
  query: IQueryItem | undefined;
  itemCount: number = 0;
  items: T[] = [];
}
