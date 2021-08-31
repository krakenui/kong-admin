import asyncComponent from 'components/AsyncComponent';
import AsyncRoute from 'components/AsyncRoute';
import useIntlMessage from 'hooks/UseIntlMessage';
import { UserRole } from 'models/UserRoles';
import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

const PostListPage = asyncComponent(() => import('pages/Posts'));
const UserListPage = asyncComponent(() => import('pages/Users'));

const AppRoutes: React.FC<any> = () => {
    const match = useRouteMatch();

    return (
        <div className="kdr-main-content-wrapper">
            <Switch>
                <Route path={`${match.url}`} exact>
                    <Redirect to={`${match.url}/posts`} />
                </Route>

                {/* Staff */}

                <AsyncRoute
                    path={`${match.url}/posts`}
                    protect
                    roles={[UserRole.Staff, UserRole.Admin]}
                    asyncComponent={PostListPage}
                    title={useIntlMessage('page.meta.title.post.list')}
                    description={useIntlMessage(
                        'page.meta.description.post.list'
                    )}
                />

                {/* Admin */}

                <AsyncRoute
                    path={`${match.url}/users`}
                    protect
                    roles={[UserRole.Admin]}
                    asyncComponent={UserListPage}
                    title={useIntlMessage('page.meta.title.user.list')}
                    description={useIntlMessage(
                        'page.meta.description.user.list'
                    )}
                />
            </Switch>
        </div>
    );
};

export default AppRoutes;
