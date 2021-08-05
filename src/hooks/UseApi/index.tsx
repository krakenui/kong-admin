import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

const useApi = (doFetch$: () => Observable<any>, doCompleted: () => void = () => {}) => {
  const [data, setData] = useState();
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
};

export default useApi;
