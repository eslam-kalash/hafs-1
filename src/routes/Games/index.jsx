// External dependencies
import React from 'react';

// import Header from './../../components/Header';
import Navigation from './../../components/Navigation';
import GamesPage from './../../components/GamesPage';
import Footer from './../../components/Footer';

const Contactus = () => (
        <div className="page-container">
            <Navigation page={'games'} />
            <GamesPage />
            <Footer />
        </div>
);

export default Contactus;