// External dependencies
import React from 'react';

// import Header from './../../components/Header';
import Navigation from './../../components/Navigation';
import ContactusPage from './../../components/ContactusPage';
import Footer from './../../components/Footer';

const Contactus = () => (
        <div className="page-container">
            <Navigation page={'contact-us'} />
            <ContactusPage />
            <Footer />
        </div>
);

export default Contactus;