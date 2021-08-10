import moment from 'moment';
import { IQueryItem } from './Pagination';

export class Product {
  id: string | undefined;
  name: string | undefined;
  description: string | undefined;
  quantity: number | undefined;
  lastModifiedTime: Date | undefined;

  fromJson(json: any): Product {
    if (json == null) {
      return this;
    }

    this.id = json.id;
    this.name = json.name;
    this.description = json.description;
    this.quantity = +json.quantity;
    this.lastModifiedTime = json.lastModifiedTime
      ? moment(json.lastModifiedTime).toDate()
      : undefined;

    return this;
  }
}
