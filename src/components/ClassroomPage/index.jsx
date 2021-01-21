import React from 'react';
import {Nav} from "react-bootstrap";

import VideoCall from './VideoCall';

const ClassroomPage = () => {
    return (
        <div className="dashboard-container-fluid">
            <div className="dashboard-main classroom-wrapper d-flex">
                <div className="video-call-wrapper">
                    <VideoCall />
                </div>
                <div className="teacher-tools">
                    <Nav className="teacher-tools-tabs" variant="tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="1"  href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19.411" height="15.985" viewBox="0 0 19.411 15.985">
                                    <g data-name="Group 592" transform="translate(-105 -262.89)">
                                        <path data-name="Path 2150" d="M105,262.89v15.985h19.411V262.89Zm1.142,14.844v-1.713h5.709a2.288,2.288,0,0,1,2.211,1.713Zm5.709-2.855h-5.709V264.032h7.993v11.722a3.411,3.411,0,0,0-2.284-.875Zm11.418,2.855h-7.92a2.288,2.288,0,0,1,2.211-1.713h5.709Zm-5.709-2.855a3.411,3.411,0,0,0-2.284.875V264.032h7.993v10.847Zm0,0" />
                                        <path data-name="Path 2151" d="M150.176,308.066v5.709h5.709v-5.709Zm4.567,4.567h-3.425v-3.425h3.425Zm0,0" transform="translate(-42.892 -42.892)" />
                                        <rect data-name="Rectangle 416" width="5.709" height="1.142" transform="translate(107.284 272.024)"/>
                                        <rect data-name="Rectangle 417" width="5.709" height="1.142" transform="translate(116.418 269.741)"/>
                                        <rect data-name="Rectangle 418" width="5.709" height="1.142" transform="translate(116.418 272.024)"/>
                                        <rect data-name="Rectangle 419" width="5.709" height="1.142" transform="translate(116.418 267.457)"/>
                                        <rect data-name="Rectangle 420" width="5.709" height="1.142" transform="translate(116.418 265.174)"/>
                                    </g>
                                </svg>
                                Quran
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="2" href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15.685" height="16.665" viewBox="0 0 15.685 16.665">
                                    <g data-name="Group 594" transform="translate(-116 -229.89)">
                                        <path data-name="Path 2155" d="M116,229.89v16.665h15.685V229.89Zm14.7.98v10.783h-1.47v-5.882h-.98v5.882h-1.47V230.87Zm-4.9,0v10.783h-1.47v-5.882h-.98v5.882h-1.47V230.87Zm-4.9,0v10.783h-1.47v-5.882h-.98v5.882h-1.47V230.87Zm-3.921,14.7v-2.941H120.9v2.941Zm4.9,0v-2.941H125.8v2.941Zm4.9,0v-2.941H130.7v2.941Zm0,0"/>
                                        <rect data-name="Rectangle 426" width="1.961" height="0.98" transform="translate(117.961 233.811)"/>
                                        <rect data-name="Rectangle 427" width="1.961" height="0.98" transform="translate(117.961 243.614)"/>
                                        <rect data-name="Rectangle 428" width="1.961" height="0.98" transform="translate(117.961 231.851)"/>
                                        <rect data-name="Rectangle 429" width="1.961" height="0.98" transform="translate(122.862 233.811)"/>
                                        <rect data-name="Rectangle 430" width="1.961" height="0.98" transform="translate(122.862 243.614)"/>
                                        <rect data-name="Rectangle 431" width="1.961" height="0.98" transform="translate(122.862 231.851)"/>
                                        <rect data-name="Rectangle 432" width="1.961" height="0.98" transform="translate(127.763 233.811)"/>
                                        <rect data-name="Rectangle 433" width="1.961" height="0.98" transform="translate(127.763 243.614)"/>
                                        <rect data-name="Rectangle 434" width="1.961" height="0.98" transform="translate(127.763 231.851)"/>
                                    </g>
                                </svg>
                                Noorani Qaida
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="3" href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16.007" height="19.437" viewBox="0 0 16.007 19.437">
                                    <g data-name="Group 595" transform="translate(-139 -229.89)">
                                        <path data-name="Path 2156" d="M155.007,229.89H141.858v2.287H139v17.15h13.72v-1.143h2.287Zm-3.43,18.294H140.143V233.32h11.434Zm2.287-1.143H152.72V232.177H143v-1.143h10.862Zm0,0" transform="translate(0 0)"/>
                                        <rect data-name="Rectangle 435" width="9.147" height="1.143" transform="translate(141.287 244.754)"/>
                                        <rect data-name="Rectangle 436" width="9.147" height="1.143" transform="translate(141.287 242.467)"/>
                                        <rect data-name="Rectangle 437" width="9.147" height="1.143" transform="translate(141.287 240.18)"/>
                                        <rect data-name="Rectangle 438" width="9.147" height="1.143" transform="translate(141.287 237.893)"/>
                                        <rect data-name="Rectangle 439" width="4.002" height="1.143" transform="translate(141.287 235.607)"/>
                                    </g>
                                </svg>
                                Upload
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className="quran-wrapper">
                        <h2 className="surah-name">سورة الفاتحة</h2>
                        <div className="surah-content">
                            <img className="img-fluid" src="/img/al-fatiha.jpg" alt="AL Fatiha"/>
                        </div>
                    </div>
                </div>
                <div className="tools-options-menu">

                </div>
            </div>
        </div>
    );
}

export default ClassroomPage;