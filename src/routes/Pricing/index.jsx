// External dependencies
import React from 'react';

// import Header from './../../components/Header';
import Navigation from './../../components/Navigation';
import PricingPage from '../../components/PricingPage';
import Footer from './../../components/Footer';

const Pricing = () => (
        <div className="page-container">
            <Navigation page={'pricing'} />
            <PricingPage />
            <Footer />
        </div>
);

export default Pricing;