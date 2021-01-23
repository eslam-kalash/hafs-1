// External dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './../../components/Navigation';
import DashboardPage from '../../components/DashboardPage';
import ClassroomPage from './../../components/ClassroomPage';
import SchedulePage from './../../components/SchedulePage';
import HomeWorkPage from './../../components/HomeWorkPage';
import Footer from './../../components/Footer';
import HomeWorkTypePage from "../../components/HomeWorkTypePage";
import HomeWorkNewPage from "../../components/HomeWorkNewPage";
import HomeWorkSinglePage from "../../components/HomeWorkSinglePage";

const Dashboard = () => (
        <div className="page-container">
            <Navigation />
            <div className="dashboard">
                <Switch>
                    <Route exact path='/dashboard' component={DashboardPage} />
                    <Route path='/dashboard/classroom' component={ClassroomPage} />
                    <Route path='/dashboard/schedule' component={SchedulePage} />
                    <Route path='/dashboard/homework/new' component={HomeWorkNewPage} />
                    <Route path='/dashboard/homework/tajweed' component={HomeWorkTypePage} />
                    <Route path='/dashboard/homework/:id' component={HomeWorkSinglePage} />
                    <Route path='/dashboard/homework' component={HomeWorkPage} />
                </Switch>
            </div>
            <Footer />
        </div>
);

export default Dashboard;