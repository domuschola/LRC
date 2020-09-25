import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import { routes } from './Pages.js';

export class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}
                        />
                    ))}
                </Switch>
            </div>
        )
    }
}

export default Routes
