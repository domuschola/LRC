import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Padlet from './pages/Padlet';
import Policy1 from './pages/Policy1';
import LRCTeam from './pages/LRCTeam';
import ContactUs from './pages/ContactUs';

const routes = [
    {
        path: "/",
        exact:true,
        main: () => <Home />
    },
    {
        path: "/home",
        exact:true,
        main: () => <Home />
    },
    {
        path: "/padlet",
        main: () => <Padlet />
    },
    {
        path: "/policy1",
        main: () => <Policy1 />
    },
    {
        path: "/team",
        main: () => <LRCTeam />
    },
    {
        path: "/contactus",
        main: () => <ContactUs />
    }
]

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
