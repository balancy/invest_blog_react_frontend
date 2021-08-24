import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from './routes';

const AppRouter = () => {
    const { isAuth } = useContext(AuthContext)
    let routes = isAuth ? privateRoutes : publicRoutes

    return (
        <Switch>
            {
                routes.map(route =>
                    <Route
                        key={route.path}
                        component={route.component}
                        exact
                        path={route.path}
                    />
                )
            }
            <Redirect to="/courses" />
        </Switch>
    )
}

export default AppRouter
