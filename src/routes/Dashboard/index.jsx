// External dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './../../components/Navigation';
import DashboardPage from './../../components/DashboardPage';
import ClassroomPage from './../../components/ClassroomPage';
import Footer from './../../components/Footer';

const Dashboard = () => (
        <div className="page-container">
            <Navigation />
            <Switch>
                <Route exact path='/dashboard' component={DashboardPage} />
                <Route path='/dashboard/classroom' component={ClassroomPage} />
            </Switch>
            <Footer />
        </div>
);

export default Dashboard;