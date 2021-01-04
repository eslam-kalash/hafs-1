// Routes/index.js
// Top level react routing for the application

// Created by: Karim Essam
// Creation date: 1 January 2021

// External dependencies
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// internal imports
import Home from './Home';
import history from './history';

// Create a Router context and <Switch> component to render first matched <Route>
export default () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    );
};
