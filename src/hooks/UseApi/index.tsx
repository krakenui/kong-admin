import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

export default function useApi<T>(
    doFetch$: () => Observable<T>,
    doCompleted: () => void = () => {},
    deps?: any
): [T | undefined, any] {
    const [data, setData] = useState<T>();
    const [error, setError] = useState();

    useEffect(() => {
        const sub = doFetch$().subscribe({
            next: setData,
            error: setError,
            complete: doCompleted,
        });

        sub.add(() => {
            doCompleted();
        });

        return () => sub.unsubscribe();
    }, [...deps]);

    return [data, error];
}
