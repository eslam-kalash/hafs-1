// External dependencies
import React from 'react';

import Navigation from './../../components/Navigation';
import DashboardPage from './../../components/DashboardPage';
import Footer from './../../components/Footer';

const Dashboard = () => (
        <div className="page-container">
            <Navigation />
            <DashboardPage />
            <Footer />
        </div>
);

export default Dashboard;