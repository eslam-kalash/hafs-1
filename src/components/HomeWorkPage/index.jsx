import React from 'react';
import DashboardSidebar from '../DashboardSidebar';
import {Nav} from "react-bootstrap";
import {Link, Route, Switch} from "react-router-dom";
import HomeWorkTypePage from "../HomeWorkTypePage";


const HomeWorkPage = () => (
    <div className='dashboard-page dashboard-with-sidebar'>
        <DashboardSidebar />

        <div className="dashboard-content-page">
            <div className="dsh-head-with-btn">
                <h3 className="dsh-title">HOME WORK</h3>
            </div>
            <div className="dsh-body">
                <div className="homework-types-wrapper">
                    <Link className="homework-type-box" to="/dashboard/homework/tajweed">
                        <span>Tajweed</span>
                    </Link>
                    <Link className="homework-type-box">
                        <span>
                            Quran correct
                            pronunciation
                        </span>
                    </Link>
                    <Link className="homework-type-box">
                        <span>
                            Arabic language
                        </span>
                    </Link>
                    <Link className="homework-type-box">
                        <span>
                            Quran memorization
                        </span>
                    </Link>
                </div>
                <div className="resent-homework-wrapper">
                    <h3 className="rh-title">Recent Home work</h3>
                    <ul className="resent-homework list-unstyled">
                        <Link to="/dashboard/homework/1">
                            <span className="hw-st-data">
                                <span className="hw-st-avatar single-st-avatar">
                                    <img src="/img/st.png" alt="Student Avatar"/>
                                </span>
                                <span className="st-name">Waseema Karam</span>
                            </span>
                            <span className="hw-type">Tajweed</span>
                        </Link>
                        <Link to="/dashboard/homework/2">
                            <span className="hw-st-data">
                                <span className="hw-st-avatar group-st-avatar">
                                    <img src="/img/st2.png" alt="Student Avatar"/>
                                    <img src="/img/st3.png" alt="Student Avatar"/>
                                </span>
                                <span className="st-name">Group 1</span>
                            </span>
                            <span className="hw-type">Quran correct pronunciation</span>
                        </Link>
                        <Link to="/dashboard/homework/3">
                            <span className="hw-st-data">
                                <span className="hw-st-avatar single-st-avatar">
                                    <img src="/img/st.png" alt="Student Avatar"/>
                                </span>
                                <span className="st-name">Waseema Karam</span>
                            </span>
                            <span className="hw-type">Arabic language</span>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>

    </div>
)

export default HomeWorkPage;