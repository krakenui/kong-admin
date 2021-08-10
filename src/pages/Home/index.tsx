import React from 'react';
import { useEffect } from 'react';

const HomePage: React.FC = () => {
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
