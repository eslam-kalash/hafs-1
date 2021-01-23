import React, {useState} from 'react';
import DashboardSidebar from '../DashboardSidebar';
import {Carousel, Form, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";


const DashboardPage = () => {
    const [tab, setTab] = useState("1");
    const renderTab = tabKey => {
        switch (tabKey) {
            case "1":
                return (
                    <div className="mydash-rec-wrapper">
                        <div className="recommended-students">
                            <div className="st-item-card">
                                <div className="st-card-head">
                                    <div className="st-info">
                                        <div className="st-avatar-box">
                                            <Link to="#">
                                                <img className="img-fluid" src="/img/st5.png" alt="Student Avatar"/>
                                            </Link>
                                        </div>
                                        <div className="st-info-details">
                                            <h5 className="mb-0">
                                                <Link to="#" className="st-name">
                                                    Hamza Mohamed
                                                </Link>
                                            </h5>
                                            <span className="st-gender">Male</span>
                                        </div>
                                    </div>
                                    <div className="st-actions-list d-flex align-items-baseline">
                                        <button className="main-btn trans-main-btn mr-2">Send invitation</button>
                                        <Link to="#" className="main-icon-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
                                                <path data-name="Path 2107" d="M14.525,0H5.456A5.533,5.533,0,0,0,0,5.859v6.282A5.533,5.533,0,0,0,5.456,18h9.061a5.522,5.522,0,0,0,4-1.773A5.6,5.6,0,0,0,19.989,12.1V5.859A5.557,5.557,0,0,0,14.525,0ZM5.456,1.528h9.052A4,4,0,0,1,17.4,2.816a4.064,4.064,0,0,1,1.072,3v6.327A4.1,4.1,0,0,1,17.4,15.184a4,4,0,0,1-2.894,1.287H5.456a4.018,4.018,0,0,1-3.939-4.331V5.859A4.018,4.018,0,0,1,5.456,1.528Zm10.568,4.11a.755.755,0,0,0-1.066-.119l-4.1,3.3-.118.083A1.379,1.379,0,0,1,9.16,8.818l-4.129-3.3-.093-.064a.755.755,0,0,0-.973.187.768.768,0,0,0,.123,1.074l4.134,3.3.161.118a2.889,2.889,0,0,0,3.416-.114l4.107-3.311.082-.077A.768.768,0,0,0,16.024,5.638Z" fill="#fff" fill-rule="evenodd"/>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="st-wants">
                                    <p>Want to Teach :</p>
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item">
                                            <span className="ct-name">Quran memorization</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span className="ct-name">Tajweed</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span className="ct-name">Arabic</span>
                                        </li>
                                    </ul>
                                </div>
                                <ul className="st-info-list list-unstyled d-flex">
                                    <li>
                                        <span>Age :</span>
                                        <span>10 years old</span>
                                    </li>
                                    <li>
                                        <span>Country :</span>
                                        <span>Egypt</span>
                                    </li>
                                    <li>
                                        <span>Time zone :</span>
                                        <span>10.00$</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="st-item-card">
                                <div className="st-card-head">
                                    <div className="st-info">
                                        <div className="st-avatar-box">
                                            <Link to="#">
                                                <img className="img-fluid" src="/img/st4.png" alt="Student Avatar"/>
                                            </Link>
                                        </div>
                                        <div className="st-info-details">
                                            <h5 className="mb-0">
                                                <Link to="#" className="st-name">
                                                    Mona Ahmed
                                                </Link>
                                            </h5>
                                            <span className="st-gender">Male</span>
                                        </div>
                                    </div>
                                    <div className="st-actions-list d-flex align-items-baseline">
                                        <button className="main-btn trans-main-btn mr-2">Send invitation</button>
                                        <Link to="#" className="main-icon-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
                                                <path data-name="Path 2107" d="M14.525,0H5.456A5.533,5.533,0,0,0,0,5.859v6.282A5.533,5.533,0,0,0,5.456,18h9.061a5.522,5.522,0,0,0,4-1.773A5.6,5.6,0,0,0,19.989,12.1V5.859A5.557,5.557,0,0,0,14.525,0ZM5.456,1.528h9.052A4,4,0,0,1,17.4,2.816a4.064,4.064,0,0,1,1.072,3v6.327A4.1,4.1,0,0,1,17.4,15.184a4,4,0,0,1-2.894,1.287H5.456a4.018,4.018,0,0,1-3.939-4.331V5.859A4.018,4.018,0,0,1,5.456,1.528Zm10.568,4.11a.755.755,0,0,0-1.066-.119l-4.1,3.3-.118.083A1.379,1.379,0,0,1,9.16,8.818l-4.129-3.3-.093-.064a.755.755,0,0,0-.973.187.768.768,0,0,0,.123,1.074l4.134,3.3.161.118a2.889,2.889,0,0,0,3.416-.114l4.107-3.311.082-.077A.768.768,0,0,0,16.024,5.638Z" fill="#fff" fill-rule="evenodd"/>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="st-wants">
                                    <p>Want to Teach :</p>
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item">
                                            <span className="ct-name">Quran memorization</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span className="ct-name">Tajweed</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span className="ct-name">Arabic</span>
                                        </li>
                                    </ul>
                                </div>
                                <ul className="st-info-list list-unstyled d-flex">
                                    <li>
                                        <span>Age :</span>
                                        <span>10 years old</span>
                                    </li>
                                    <li>
                                        <span>Country :</span>
                                        <span>Egypt</span>
                                    </li>
                                    <li>
                                        <span>Time zone :</span>
                                        <span>10.00$</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            case "2":
                return (
                    <div className="mydash-booking-wrapper booking-students">
                        <div className="booking-student-card">
                            <div className="st-avatar">
                                <img className="img-fluid" src="/img/st6.png" alt="Student Avatar"/>
                            </div>
                            <p className="st-booking-details">
                                <strong>Idris Kalil</strong> has booked a <span>Tajweed</span> <br/> class with you &nbsp; from <span>1.00pm</span>  to <span>1.30pm</span>
                                <small className="d-block mt-1">On Sat ,20 Nov</small>
                            </p>
                            <Link to="#" className="main-icon-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
                                    <path data-name="Path 2107" d="M14.525,0H5.456A5.533,5.533,0,0,0,0,5.859v6.282A5.533,5.533,0,0,0,5.456,18h9.061a5.522,5.522,0,0,0,4-1.773A5.6,5.6,0,0,0,19.989,12.1V5.859A5.557,5.557,0,0,0,14.525,0ZM5.456,1.528h9.052A4,4,0,0,1,17.4,2.816a4.064,4.064,0,0,1,1.072,3v6.327A4.1,4.1,0,0,1,17.4,15.184a4,4,0,0,1-2.894,1.287H5.456a4.018,4.018,0,0,1-3.939-4.331V5.859A4.018,4.018,0,0,1,5.456,1.528Zm10.568,4.11a.755.755,0,0,0-1.066-.119l-4.1,3.3-.118.083A1.379,1.379,0,0,1,9.16,8.818l-4.129-3.3-.093-.064a.755.755,0,0,0-.973.187.768.768,0,0,0,.123,1.074l4.134,3.3.161.118a2.889,2.889,0,0,0,3.416-.114l4.107-3.311.082-.077A.768.768,0,0,0,16.024,5.638Z" fill="#fff" fill-rule="evenodd"/>
                                </svg>
                            </Link>
                        </div>
                        <div className="booking-student-card">
                            <div className="st-avatar">
                                <img className="img-fluid" src="/img/st7.png" alt="Student Avatar"/>
                            </div>
                            <p className="st-booking-details">
                                <strong>Samir Omer</strong>  has booked a <span>Tajweed</span> <br/> class with you &nbsp; from <span>1.00pm</span>  to <span>1.30pm</span>
                                <small className="d-block mt-1">On Sat ,20 Nov</small>
                            </p>
                            <Link to="#" className="main-icon-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
                                    <path data-name="Path 2107" d="M14.525,0H5.456A5.533,5.533,0,0,0,0,5.859v6.282A5.533,5.533,0,0,0,5.456,18h9.061a5.522,5.522,0,0,0,4-1.773A5.6,5.6,0,0,0,19.989,12.1V5.859A5.557,5.557,0,0,0,14.525,0ZM5.456,1.528h9.052A4,4,0,0,1,17.4,2.816a4.064,4.064,0,0,1,1.072,3v6.327A4.1,4.1,0,0,1,17.4,15.184a4,4,0,0,1-2.894,1.287H5.456a4.018,4.018,0,0,1-3.939-4.331V5.859A4.018,4.018,0,0,1,5.456,1.528Zm10.568,4.11a.755.755,0,0,0-1.066-.119l-4.1,3.3-.118.083A1.379,1.379,0,0,1,9.16,8.818l-4.129-3.3-.093-.064a.755.755,0,0,0-.973.187.768.768,0,0,0,.123,1.074l4.134,3.3.161.118a2.889,2.889,0,0,0,3.416-.114l4.107-3.311.082-.077A.768.768,0,0,0,16.024,5.638Z" fill="#fff" fill-rule="evenodd"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                );

            default:
                break;
        }
    }
    return (
    <div className='dashboard-page dashboard-with-sidebar'>
        <DashboardSidebar />
        <div className="dashboard-content-page p-0">
            <div className="mydsh-wrapper">
                {/*<div className="mydash-classes d-flex justify-content-center align-items-center">*/}
                {/*    <div className="no-classes">*/}
                {/*        <h5>Classes</h5>*/}
                {/*        <p>Nobody has hired you yet</p>*/}
                {/*        <Link to="#" className="main-btn main-btn-primary">Find students</Link>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="mydash-classes">
                    <div className="dsh-head-with-btn">
                        <h3 className="dsh-title">Upcoming Classes</h3>
                        <Form>
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <Form.Group>
                                        <Form.Control as="select">
                                            <option>Tajweed</option>
                                            <option>Tajweed</option>
                                        </Form.Control>
                                    </Form.Group>
                                </li>
                                <li className="list-inline-item">
                                    <Form.Group>
                                        <Form.Control as="select">
                                            <option>This Week</option>
                                            <option>Last Week</option>
                                        </Form.Control>
                                    </Form.Group>
                                </li>
                            </ul>
                        </Form>
                    </div>
                    <div className="upcoming-classes">
                        <div className="upc-st-box">
                            <div className="upc-st-info">
                                <div className="st-vector">
                                    <img className="img-fluid" src="/img/st4.png" alt="Student Vector"/>
                                </div>
                                <div className="upc-details">
                                    <h5 className="mb-0">
                                        <Link to="#" className="st-name">
                                            Mona Mohamed
                                        </Link>
                                    </h5>
                                    <p>
                                        <span className="sc-type">Tajweed</span>
                                        <span className="cls-start">Class start in </span>
                                        <span className="cls-date">10 h 50 min</span>
                                    </p>
                                </div>
                            </div>
                            <div className="upc-actions">
                                <Link to="#" className="main-icon-btn mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
                                        <path data-name="Path 2107" d="M14.525,0H5.456A5.533,5.533,0,0,0,0,5.859v6.282A5.533,5.533,0,0,0,5.456,18h9.061a5.522,5.522,0,0,0,4-1.773A5.6,5.6,0,0,0,19.989,12.1V5.859A5.557,5.557,0,0,0,14.525,0ZM5.456,1.528h9.052A4,4,0,0,1,17.4,2.816a4.064,4.064,0,0,1,1.072,3v6.327A4.1,4.1,0,0,1,17.4,15.184a4,4,0,0,1-2.894,1.287H5.456a4.018,4.018,0,0,1-3.939-4.331V5.859A4.018,4.018,0,0,1,5.456,1.528Zm10.568,4.11a.755.755,0,0,0-1.066-.119l-4.1,3.3-.118.083A1.379,1.379,0,0,1,9.16,8.818l-4.129-3.3-.093-.064a.755.755,0,0,0-.973.187.768.768,0,0,0,.123,1.074l4.134,3.3.161.118a2.889,2.889,0,0,0,3.416-.114l4.107-3.311.082-.077A.768.768,0,0,0,16.024,5.638Z" fill="#fff" fill-rule="evenodd"/>
                                    </svg>
                                </Link>
                                <Link to="#" class="danger-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13.274" height="12.928" viewBox="0 0 13.274 12.928">
                                        <g id="Group_566" data-name="Group 566" transform="translate(0.5 0.5)">
                                            <path id="Path_2142" data-name="Path 2142" d="M8.666,3.749v-.6A2.376,2.376,0,0,0,6.29.772H3.147A2.376,2.376,0,0,0,.772,3.147v7.176A2.376,2.376,0,0,0,3.147,12.7H6.3A2.369,2.369,0,0,0,8.666,10.33V9.722" transform="translate(-0.772 -0.772)" fill="none" stroke="#f50e26" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                            <path id="Path_2143" data-name="Path 2143" d="M15.532,10.021H7.768" transform="translate(-3.258 -4.058)" fill="none" stroke="#f50e26" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                            <path id="Path_2144" data-name="Path 2144" d="M16.881,7.106l1.888,1.879-1.888,1.88" transform="translate(-6.495 -3.022)" fill="none" stroke="#f50e26" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                        </g>
                                    </svg>
                                    Exit
                                </Link>
                            </div>
                        </div>
                        <div className="upc-st-box">
                            <div className="upc-st-info">
                                <div className="st-vector">
                                    <img className="img-fluid" src="/img/st5.png" alt="Student Vector"/>
                                </div>
                                <div className="upc-details">
                                    <h5 className="mb-0">
                                        <Link to="#" className="st-name">
                                            Hamza Mohamed
                                        </Link>
                                    </h5>
                                    <p>
                                        <span className="sc-type">Tajweed</span>
                                        <span className="cls-date">You can start class now</span>
                                    </p>
                                </div>
                            </div>
                            <div className="upc-actions">
                                <button className="main-btn light-green-btn mr-2">Start class</button>
                                <Link to="#" className="main-icon-btn mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
                                        <path data-name="Path 2107" d="M14.525,0H5.456A5.533,5.533,0,0,0,0,5.859v6.282A5.533,5.533,0,0,0,5.456,18h9.061a5.522,5.522,0,0,0,4-1.773A5.6,5.6,0,0,0,19.989,12.1V5.859A5.557,5.557,0,0,0,14.525,0ZM5.456,1.528h9.052A4,4,0,0,1,17.4,2.816a4.064,4.064,0,0,1,1.072,3v6.327A4.1,4.1,0,0,1,17.4,15.184a4,4,0,0,1-2.894,1.287H5.456a4.018,4.018,0,0,1-3.939-4.331V5.859A4.018,4.018,0,0,1,5.456,1.528Zm10.568,4.11a.755.755,0,0,0-1.066-.119l-4.1,3.3-.118.083A1.379,1.379,0,0,1,9.16,8.818l-4.129-3.3-.093-.064a.755.755,0,0,0-.973.187.768.768,0,0,0,.123,1.074l4.134,3.3.161.118a2.889,2.889,0,0,0,3.416-.114l4.107-3.311.082-.077A.768.768,0,0,0,16.024,5.638Z" fill="#fff" fill-rule="evenodd"/>
                                    </svg>
                                </Link>
                                <Link to="#" class="danger-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13.274" height="12.928" viewBox="0 0 13.274 12.928">
                                        <g id="Group_566" data-name="Group 566" transform="translate(0.5 0.5)">
                                            <path id="Path_2142" data-name="Path 2142" d="M8.666,3.749v-.6A2.376,2.376,0,0,0,6.29.772H3.147A2.376,2.376,0,0,0,.772,3.147v7.176A2.376,2.376,0,0,0,3.147,12.7H6.3A2.369,2.369,0,0,0,8.666,10.33V9.722" transform="translate(-0.772 -0.772)" fill="none" stroke="#f50e26" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                            <path id="Path_2143" data-name="Path 2143" d="M15.532,10.021H7.768" transform="translate(-3.258 -4.058)" fill="none" stroke="#f50e26" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                            <path id="Path_2144" data-name="Path 2144" d="M16.881,7.106l1.888,1.879-1.888,1.88" transform="translate(-6.495 -3.022)" fill="none" stroke="#f50e26" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                        </g>
                                    </svg>
                                    Exit
                                </Link>
                            </div>
                        </div>
                        <div className="upc-st-box">
                            <div className="upc-st-info">
                                <div className="st-vector">
                                    <img className="img-fluid" src="/img/st6.png" alt="Student Vector"/>
                                </div>
                                <div className="upc-details">
                                    <h5 className="mb-0">
                                        <Link to="#" className="st-name">
                                            Hamza Mohamed
                                        </Link>
                                    </h5>
                                    <p>
                                        <span className="sc-type">Tajweed</span>
                                        <span className="cls-start">Class start in </span>
                                        <span className="cls-date">10 h 50 min</span>
                                    </p>
                                </div>
                            </div>
                            <div className="upc-actions">
                                <Link to="#" className="main-icon-btn mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
                                        <path data-name="Path 2107" d="M14.525,0H5.456A5.533,5.533,0,0,0,0,5.859v6.282A5.533,5.533,0,0,0,5.456,18h9.061a5.522,5.522,0,0,0,4-1.773A5.6,5.6,0,0,0,19.989,12.1V5.859A5.557,5.557,0,0,0,14.525,0ZM5.456,1.528h9.052A4,4,0,0,1,17.4,2.816a4.064,4.064,0,0,1,1.072,3v6.327A4.1,4.1,0,0,1,17.4,15.184a4,4,0,0,1-2.894,1.287H5.456a4.018,4.018,0,0,1-3.939-4.331V5.859A4.018,4.018,0,0,1,5.456,1.528Zm10.568,4.11a.755.755,0,0,0-1.066-.119l-4.1,3.3-.118.083A1.379,1.379,0,0,1,9.16,8.818l-4.129-3.3-.093-.064a.755.755,0,0,0-.973.187.768.768,0,0,0,.123,1.074l4.134,3.3.161.118a2.889,2.889,0,0,0,3.416-.114l4.107-3.311.082-.077A.768.768,0,0,0,16.024,5.638Z" fill="#fff" fill-rule="evenodd"/>
                                    </svg>
                                </Link>
                                <Link to="#" class="danger-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13.274" height="12.928" viewBox="0 0 13.274 12.928">
                                        <g id="Group_566" data-name="Group 566" transform="translate(0.5 0.5)">
                                            <path id="Path_2142" data-name="Path 2142" d="M8.666,3.749v-.6A2.376,2.376,0,0,0,6.29.772H3.147A2.376,2.376,0,0,0,.772,3.147v7.176A2.376,2.376,0,0,0,3.147,12.7H6.3A2.369,2.369,0,0,0,8.666,10.33V9.722" transform="translate(-0.772 -0.772)" fill="none" stroke="#f50e26" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                            <path id="Path_2143" data-name="Path 2143" d="M15.532,10.021H7.768" transform="translate(-3.258 -4.058)" fill="none" stroke="#f50e26" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                            <path id="Path_2144" data-name="Path 2144" d="M16.881,7.106l1.888,1.879-1.888,1.88" transform="translate(-6.495 -3.022)" fill="none" stroke="#f50e26" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                        </g>
                                    </svg>
                                    Exit
                                </Link>
                            </div>
                        </div>
                        <div className="upc-st-box">
                            <div className="upc-st-info">
                                <div className="st-vector">
                                    <img className="img-fluid" src="/img/st7.png" alt="Student Vector"/>
                                </div>
                                <div className="upc-details">
                                    <h5 className="mb-0">
                                        <Link to="#" className="st-name">
                                            Hamza Mohamed
                                        </Link>
                                    </h5>
                                    <p>
                                        <span className="sc-type">Tajweed</span>
                                        <span className="cls-start">Class start in </span>
                                        <span className="cls-date">10 h 50 min</span>
                                    </p>
                                </div>
                            </div>
                            <div className="upc-actions">
                                <Link to="#" className="main-icon-btn mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
                                        <path data-name="Path 2107" d="M14.525,0H5.456A5.533,5.533,0,0,0,0,5.859v6.282A5.533,5.533,0,0,0,5.456,18h9.061a5.522,5.522,0,0,0,4-1.773A5.6,5.6,0,0,0,19.989,12.1V5.859A5.557,5.557,0,0,0,14.525,0ZM5.456,1.528h9.052A4,4,0,0,1,17.4,2.816a4.064,4.064,0,0,1,1.072,3v6.327A4.1,4.1,0,0,1,17.4,15.184a4,4,0,0,1-2.894,1.287H5.456a4.018,4.018,0,0,1-3.939-4.331V5.859A4.018,4.018,0,0,1,5.456,1.528Zm10.568,4.11a.755.755,0,0,0-1.066-.119l-4.1,3.3-.118.083A1.379,1.379,0,0,1,9.16,8.818l-4.129-3.3-.093-.064a.755.755,0,0,0-.973.187.768.768,0,0,0,.123,1.074l4.134,3.3.161.118a2.889,2.889,0,0,0,3.416-.114l4.107-3.311.082-.077A.768.768,0,0,0,16.024,5.638Z" fill="#fff" fill-rule="evenodd"/>
                                    </svg>
                                </Link>
                                <Link to="#" class="danger-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13.274" height="12.928" viewBox="0 0 13.274 12.928">
                                        <g id="Group_566" data-name="Group 566" transform="translate(0.5 0.5)">
                                            <path id="Path_2142" data-name="Path 2142" d="M8.666,3.749v-.6A2.376,2.376,0,0,0,6.29.772H3.147A2.376,2.376,0,0,0,.772,3.147v7.176A2.376,2.376,0,0,0,3.147,12.7H6.3A2.369,2.369,0,0,0,8.666,10.33V9.722" transform="translate(-0.772 -0.772)" fill="none" stroke="#f50e26" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                            <path id="Path_2143" data-name="Path 2143" d="M15.532,10.021H7.768" transform="translate(-3.258 -4.058)" fill="none" stroke="#f50e26" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                            <path id="Path_2144" data-name="Path 2144" d="M16.881,7.106l1.888,1.879-1.888,1.88" transform="translate(-6.495 -3.022)" fill="none" stroke="#f50e26" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                        </g>
                                    </svg>
                                    Exit
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recommended--booking">
                    <Nav className="recommended--booking-tabs" variant="tabs" activeKey={tab} onSelect={eventKey => setTab(eventKey)}>
                        <Nav.Item>
                            <Nav.Link eventKey="1"  href="">
                                Recommended Students
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="2" href="">
                                Booking
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>

                    {renderTab(tab)}
                </div>
            </div>
        </div>
    </div>
    );
}

export default DashboardPage;