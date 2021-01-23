import React from 'react';
import DashboardSidebar from '../DashboardSidebar';
import {Nav} from "react-bootstrap";
import {Link, Route, Switch} from "react-router-dom";
import HomeWorkTypePage from "../HomeWorkTypePage";


const HomeWorkSinglePage = () => (
    <div className='dashboard-page dashboard-with-sidebar'>
        <DashboardSidebar />

        <div className="dashboard-content-page">
            <div className="dsh-head-with-btn">
                <h3 className="dsh-title">Tajweed Home work</h3>
                <Nav className="dsh-head-links">
                    <Nav.Link href="#" className="main-btn main-btn-primary">Assign to</Nav.Link>
                    <Nav.Link href="/dashboard/homework/new" className="main-btn border-btn-primary">Edit this home work</Nav.Link>
                </Nav>
            </div>
            <div className="dsh-body">
                <div className="hwq-items">
                    <div className="hwq-item">
                        <p className="hwq-title">Question 1 : When the letter khaa follows a noon saakinah, which tajweed rule must be exercised? *</p>
                        <ul className="hwq-answers list-unstyled">
                            <li>Ikhfaa</li>
                            <li>Ith-haar</li>
                            <li>Iqlaab</li>
                            <li>Idghaam</li>
                        </ul>
                        <p className="hwq-correct-answer">Right answer :  Iqlaab</p>
                    </div>
                    <div className="hwq-item">
                        <p className="hwq-title">Question 2 : When the letter khaa follows a noon saakinah, which tajweed rule must be exercised? *</p>
                        <ul className="hwq-answers list-unstyled">
                            <li>When a meem saakinah is followed by another meem</li>
                            <li>When a noon saakinah is followed by yaa, waaw, noon or meem</li>
                            <li>When meem saakinah is followed by the letter baa</li>
                            <li>When a noon saakinah is followed by laam or raa</li>
                        </ul>
                        <p className="hwq-correct-answer">Right answer :  When meem saakinah is followed by the letter baa</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
)

export default HomeWorkSinglePage;