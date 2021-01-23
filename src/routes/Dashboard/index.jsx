// External dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './../../components/Navigation';
import DashboardPage from '../../components/DashboardPage';
import ClassroomPage from './../../components/ClassroomPage';
import SchedulePage from './../../components/SchedulePage';
import ProfilePage from './../../components/ProfilePage';
import Footer from './../../components/Footer';

const Dashboard = () => (
        <div className="page-container">
            <Navigation />
            <div className="dashboard">
                <Switch>
                    <Route exact path='/dashboard' component={DashboardPage} />
                    <Route path='/dashboard/classroom' component={ClassroomPage} />
                    <Route path='/dashboard/schedule' component={SchedulePage} />
                    <Route path='/dashboard/profile' component={ProfilePage} />
                </Switch>
            </div>
            <Footer />
        </div>
);

export default Dashboard;