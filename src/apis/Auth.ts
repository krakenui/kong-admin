import { LoginRequest } from 'models';
import { from, Observable } from 'rxjs';

import http from './HttpClient';

export function login(payload: LoginRequest): Observable<any> {
    return from(http.post('/login', payload));
}
