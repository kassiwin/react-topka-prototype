// Libs
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Page && Component
import {PrivateRoute} from "./components";

// Data
import {privateRoutes, publicRoutes} from "./Routes";

// Helpers

// Styles
import "./style/tailwind.css";
import "./style/fonts.css";

import "./style/tailwind.css";
import "./style/fonts.css";
import "./style/custom.css";



export default class App extends Component {
    state = {}

    render() {
        return (
            <div className="max-w-md w-full mx-auto bg-black font-inter">
                <Router>
                    <Switch>
                        {publicRoutes.map(route => {
                            return (
                                <Route
                                    exact
                                    path={route.path}
                                    component={route.component}
                                    key={route.path}
                                />
                            );
                        })}
                        {privateRoutes.map(route => {
                            return (
                                <PrivateRoute
                                    path={route.path}
                                    component={route.component}
                                    key={route.path}
                                />
                            );
                        })}
                    </Switch>
                </Router>
            </div>
        );
    }
}