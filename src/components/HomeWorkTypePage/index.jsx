import React from 'react';
import DashboardSidebar from '../DashboardSidebar';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";


const HomeWorkTypePage = () => (
    <div className='dashboard-page dashboard-with-sidebar'>
        <DashboardSidebar />
        <div className="dashboard-content-page">
            <div className="dsh-head-with-btn">
                <h3 className="dsh-title">Tajweed</h3>
                <Nav className="dsh-head-links">
                    <Nav.Link href="/dashboard/homework/new" className="main-btn border-btn-primary">Add a new home work</Nav.Link>
                </Nav>
            </div>
            <div className="dsh-body">
                <div className="resent-homework-wrapper rhw-noborder">
                    <h3 className="rh-title">Recent Home work</h3>
                    <ul className="resent-homework list-unstyled">
                        <Link to="/dashboard/homework/3">
                            <span className="hw-st-data">
                                <span className="hw-st-avatar single-st-avatar">
                                    <img src="/img/st.png" alt="Student Avatar"/>
                                </span>
                                <span className="st-name">Waseema Karam</span>
                            </span>
                            <span className="hw-type">Tajweed</span>
                        </Link>
                        <Link to="/dashboard/homework/3">
                            <span className="hw-st-data">
                                <span className="hw-st-avatar group-st-avatar">
                                    <img src="/img/st2.png" alt="Student Avatar"/>
                                    <img src="/img/st3.png" alt="Student Avatar"/>
                                </span>
                                <span className="st-name">Group 1</span>
                            </span>
                            <span className="hw-type">Tajweed</span>
                        </Link>
                        <Link to="/dashboard/homework/3">
                            <span className="hw-st-data">
                                <span className="hw-st-avatar single-st-avatar">
                                    <img src="/img/st.png" alt="Student Avatar"/>
                                </span>
                                <span className="st-name">Waseema Karam</span>
                            </span>
                            <span className="hw-type">Tajweed</span>
                        </Link>
                        <Link to="/dashboard/homework/3">
                            <span className="hw-st-data">
                                <span className="hw-st-avatar single-st-avatar">
                                    <img src="/img/st.png" alt="Student Avatar"/>
                                </span>
                                <span className="st-name">Waseema Karam</span>
                            </span>
                            <span className="hw-type">Tajweed</span>
                        </Link>
                        <Link to="/dashboard/homework/3">
                            <span className="hw-st-data">
                                <span className="hw-st-avatar group-st-avatar">
                                    <img src="/img/st2.png" alt="Student Avatar"/>
                                    <img src="/img/st3.png" alt="Student Avatar"/>
                                </span>
                                <span className="st-name">Group 1</span>
                            </span>
                            <span className="hw-type">Tajweed</span>
                        </Link>
                        <Link to="/dashboard/homework/3">
                            <span className="hw-st-data">
                                <span className="hw-st-avatar single-st-avatar">
                                    <img src="/img/st.png" alt="Student Avatar"/>
                                </span>
                                <span className="st-name">Waseema Karam</span>
                            </span>
                            <span className="hw-type">Tajweed</span>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)

export default HomeWorkTypePage;