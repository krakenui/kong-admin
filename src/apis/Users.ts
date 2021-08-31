import { from, Observable } from 'rxjs';

import http from './SafeHttpClient';

export function getAllUsers(page = 0, pageSize = 20): Observable<any> {
    return from(http.post(`/users?page=${page}&size=${pageSize}`));
}
