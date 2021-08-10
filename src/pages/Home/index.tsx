import React from 'react';
import { useEffect } from 'react';
import { useIntl } from 'react-intl';

const HomePage: React.FC<any> = () => {
  const intl = useIntl();
  console.log(intl.locale);

  useEffect(() => {
    console.log('load api...');
  }, []);

  return (
    <div className="home base-page">
      <p>Home!!!</p>
    </div>
  );
};

export default HomePage;
