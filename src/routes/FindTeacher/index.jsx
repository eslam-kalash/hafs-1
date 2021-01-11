// External dependencies
import React from 'react';

// import Header from './../../components/Header';
import Navigation from './../../components/Navigation';
import FindTeacherPage from './../../components/FindTeacherPage';
import Footer from './../../components/Footer';

const FindTeacher = () => (
        <div className="page-container">
            <Navigation page={'find-teacher'} />
            <FindTeacherPage />
            <Footer />
        </div>
);

export default FindTeacher;