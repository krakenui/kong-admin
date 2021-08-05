import React from 'react';
import { useEffect } from 'react';

const HomePage: React.FC = () => {
  useEffect(() => {
    console.log('load api...');
  }, []);

  return (
    <div className="home kd-page">
      <p>Hello!!!</p>
    </div>
  );
};

export default HomePage;
