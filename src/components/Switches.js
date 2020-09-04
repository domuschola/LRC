import React, { Component } from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
// import Home from './pages/Home'

export class Switches extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/">
                        {/* <Home /> */}
                    </Route>
                    <Route path="/dashboard">
                        {/* <Dashboard /> */}
                    </Route>
                    <Route path="/users">
                        {/* <Users /> */}
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Switches
