import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './containers/Dashboard'
import Login from './containers/Auth/Login'
import Homepage from './containers/Homepage'

import { isAuthenticated } from './utils'


//Public routes
function PublicRoute(props) {
    const { component: Component, restricted = false, ...rest } = props
    //Auth and restricted check
    const render = props => {
        if (isAuthenticated && restricted) {
            return <Redirect to="/login" />
        }
        return <Component {...props} />
    }
    return <Route {...rest} render={render} />
}

//Private routes
function PrivateRoute(props) {
    const { component: Component, ...rest } = props;
    //Auth check
    const render = props => {
        if (!isAuthenticated) {
            return <Redirect to="/login" />
        }
        return <Component {...props} />
    }
    return <Route {...rest} render={render} />
}


export default function Routes() {
    return (
        <Router>
            <Switch>
                <PublicRoute path="/" exact component={Homepage} />
                <PublicRoute path="/login" exact component={Login} />
                <PrivateRoute path="/dashboard" exact component={Dashboard} />
            </Switch>
        </Router>
    )
}