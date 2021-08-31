import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

export interface RestrictedRouteProps extends RouteProps {
    accepts: string[];
}

const RestrictedRoute: React.FC<RestrictedRouteProps> = ({
    component,
    location,
    accepts,
    ...rest
}) => {
    // if have not permission
    // back to login page

    return <Route component={component} location={location} {...rest}></Route>;
};

export default RestrictedRoute;
