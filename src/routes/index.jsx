// Routes/index.js
// Top level react routing for the application

// Created by: Karim Essam
// Creation date: 1 January 2021

// External dependencies
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// internal imports
import Home from './Home';
import Articles from './Articles';
import Pricing from './Pricing';
import history from './history';

// Create a Router context and <Switch> component to render first matched <Route>
export default () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/articles" component={Articles} />
                <Route path="/pricing" component={Pricing} />
            </Switch>
        </Router>
    );
};
