import 'nprogress/nprogress.css';
import 'react-placeholder/lib/reactPlaceholder.css';

import CircularProgress from 'components/CircularProgress';
import Nprogress from 'nprogress';
import React, { Component } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ReactPlaceholder from 'react-placeholder';
import { from } from 'rxjs';

export default function asyncComponent(importComponent: any) {
  const asyncLoad: React.FC<any> = ({ props }) => {
    const [component, setComponent] = useState<any>(null);

    useEffect(() => {
      Nprogress.start();
      const sub = from(importComponent()).subscribe({
        next: (comp: any) => {
          setComponent(comp);
        },
        complete: () => {
          Nprogress.done();
        },
      });

      return () => sub.unsubscribe();
    }, []);

    const renderComponent = () => {
      const { default: Component } = component;

      return <Component {...props}></Component>;
    };

    return (
      <ReactPlaceholder type="text" rows={7} ready={Component !== null}>
        {component == null ? <CircularProgress /> : renderComponent()}
      </ReactPlaceholder>
    );
  };

  return asyncLoad;
}
