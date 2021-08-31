import PageLayout, { PageMetaTag } from 'components/PageLayout';
import { hasRole, UserRole } from 'models/UserRoles';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface AsyncRouteProps extends RouteProps {
    title?: string;
    description?: string;
    metaTags?: PageMetaTag[];
    asyncComponent: React.FC<any>;
    protect?: boolean;
    roles?: UserRole[];
}

const AsyncRoute: React.FC<AsyncRouteProps> = ({
    title,
    description,
    metaTags,
    asyncComponent: AsyncComponent,
    exact,
    protect,
    path,
    roles: acceptRoles,
    ...defaultProps
}) => {
    const { user } = useSelector((state: any) => state.auth);

    if (protect == null) {
        protect = true;
    }

    if (user == null && protect) {
        return <Redirect to="/login" />;
    }

    if (protect && acceptRoles != null) {
        const validRole = hasRole(user?.roles, acceptRoles);

        if (!validRole) {
            return <Redirect to="/island" />;
        }
    }

    if (metaTags == null) {
        metaTags = [];
    }

    if (description != null) {
        metaTags.push({
            name: 'description',
            content: description,
        });
    }

    return (
        <Route
            path={path}
            exact={exact}
            {...defaultProps}
            component={() => (
                <PageLayout title={title} metaTags={metaTags} {...defaultProps}>
                    <AsyncComponent {...defaultProps} />
                </PageLayout>
            )}
        />
    );
};

export default AsyncRoute;
