// External dependencies
import React from 'react';

// import Header from './../../components/Header';
import Navigation from './../../components/Navigation';
import ArticlesPage from '../../components/ArticlesPage';
import Footer from './../../components/Footer';

const Articles = () => (
        <div className="page-container">
            <Navigation page={'articles'} />
            <ArticlesPage />
            <Footer />
        </div>
);

export default Articles;