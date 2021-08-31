import React from 'react';
import { useEffect } from 'react';
import { useIntl } from 'react-intl';

const HomePage: React.FC<any> = () => {
    const intl = useIntl();

    useEffect(() => {
        console.log('load api...');
    }, []);

    return (
        <div className="home base-page">
            <p>Home!!!</p>
            <p>{intl.formatDate(new Date())}</p>
        </div>
    );
};

export default HomePage;
