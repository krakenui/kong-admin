import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

export default function useApi<T>(
  doFetch$: () => Observable<T>,
  doCompleted: () => void = () => {}
): [T | undefined, any] {
  const [data, setData] = useState<T>();
  const [error, setError] = useState();

  useEffect(() => {
    const sub = doFetch$().subscribe({
      next: setData,
      error: setError,
      complete: doCompleted,
    });

    return () => sub.unsubscribe();
  }, []);

  return [data, error];
}
