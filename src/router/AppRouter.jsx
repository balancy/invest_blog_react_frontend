import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from './routes';

const AppRouter = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route
                        component={route.component}
                        exact
                        path={route.path}
                    />
                )}
                <Redirect to="/courses" />
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route
                        component={route.component}
                        exact
                        path={route.path}
                    />
                )}
                <Redirect to="/login" />
            </Switch>
    )
}

export default AppRouter
