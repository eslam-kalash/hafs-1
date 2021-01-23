import React, {useState} from 'react';
import {Nav, Form, Carousel} from "react-bootstrap";

import VideoCall from './VideoCall';
import ArticlesCard from "../ArticlesPage/ArticlesContainer/ArticlesCard";
import VideoCard from "../ArticlesPage/ArticlesContainer/VideoCard";

const ClassroomPage = () => {
    const [tab, setTab] = useState("1");

    const renderTab = tabKey => {
        switch (tabKey) {
            case "1":
                return (
                    <div className="quran-wrapper">
                        <h2 className="surah-name">سورة الفاتحة</h2>
                        <div className="surah-content">
                            <img className="img-fluid" src="/img/al-fatiha.jpg" alt="AL Fatiha"/>
                        </div>
                    </div>
                );
            case "2":
                return (
                    <div className="noorani-qaida-wrapper">
                        <Carousel interval={null}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/img/noorani.jpg"
                                    alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/img/noorani.jpg"
                                    alt="Third slide"
                                />


                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/img/noorani.jpg"
                                    alt="Third slide"
                                />


                            </Carousel.Item>
                        </Carousel>
                    </div>
                );
            case "3":
                return (
                    <div className="upload-file-wrapper">
                        <p className="upload-file-info">
                            During a classroom session, files which you upload will be
                            shown here and shared with the student
                        </p>
                        <Form>
                            <Form.Group>
                                <Form.File
                                    id="uploadFile"
                                    label="Upload file"
                                    custom
                                />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect7">
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>
                        </Form>
                    </div>
                );
            default:
                break;
        };
    }
    const renderToolsMenu = tabKey => {
        switch (tabKey) {
            case "1":
                return (
                    <div className="tools-options-menu">
                        <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Surah:</Form.Label>
                                <Form.Control as="select">
                                    <option>1 - Al-Fatiha</option>
                                    <option>2 - Al-Baqarah</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Ayah:</Form.Label>
                                <Form.Control as="select">
                                    <option>option 1</option>
                                    <option>option 2</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect3">
                                <Form.Label>Juz:</Form.Label>
                                <Form.Control as="select">
                                    <option>option 1</option>
                                    <option>option 2</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect4">
                                <Form.Label>Text:</Form.Label>
                                <Form.Control as="select">
                                    <option>option 1</option>
                                    <option>option 2</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect5">
                                <Form.Label>Font:</Form.Label>
                                <Form.Control as="select">
                                    <option>option 1</option>
                                    <option>option 2</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect6">
                                <Form.Label>Size:</Form.Label>
                                <Form.Control as="select">
                                    <option>14</option>
                                    <option>16</option>
                                    <option>18</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </div>
                );
                break;
            case "2":
                return (
                    <div className="tools-options-menu">
                        <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Qaida:</Form.Label>
                                <Form.Control as="select">
                                    <option>19</option>
                                    <option>20</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </div>
                );
                break;
            default:
                break;
        };
    }
    return (
        <div className="dashboard-container-fluid">
            <div className="dashboard-main classroom-wrapper d-flex">
                <div className="video-call-wrapper">
                    <VideoCall />
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect8" className="send-message-input">
                            <Form.Control type="text" placeholder="Type your message" />
                            <button type="submit" className="submit-btn-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19.517" height="19.517" viewBox="0 0 19.517 19.517">
                                    <path id="Path_2132" data-name="Path 2132" d="M13.855,6.121l-5.664,5.7L1.561,7.741A1.182,1.182,0,0,1,1.847,5.6L17.5,1.047a1.176,1.176,0,0,1,1.447,1.471L14.3,18.158a1.168,1.168,0,0,1-2.123.274l-3.989-6.61" transform="translate(-0.245 -0.238)" fill="none" stroke="#bfe9ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                </svg>
                            </button>
                        </Form.Group>
                    </Form>
                </div>
                <div className="teacher-tools">
                    <Nav className="teacher-tools-tabs" variant="tabs" activeKey={tab} onSelect={eventKey => setTab(eventKey)}>
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
                    {renderTab(tab)}


                    <ul className="list-inline text-center mt-5">
                        <li className="list-inline-item">
                            <button className="main-btn primary-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14.695" height="14.421" viewBox="0 0 14.695 14.421">
                                    <path id="Path_2201" data-name="Path 2201" d="M5.889.573A.579.579,0,0,0,5.3,0H4L3.838,0A3.137,3.137,0,0,0,.829,3.111v1.5l.005.078A.585.585,0,0,0,2,4.607v-1.5l0-.124a1.986,1.986,0,0,1,2-1.84H5.305l.079-.005A.577.577,0,0,0,5.889.573ZM15.52,2.959A3.156,3.156,0,0,0,12.351,0H11.07l-.079.005a.577.577,0,0,0-.5.568.579.579,0,0,0,.584.573h1.28l.126,0a1.992,1.992,0,0,1,1.879,1.964V4.607l.005.078a.585.585,0,0,0,1.163-.078V3.114Zm-.58,4.312a.581.581,0,0,1,.579.5l.005.078v3.463a3.149,3.149,0,0,1-3.016,3.111l-.158,0H11.07a.573.573,0,0,1-.079-1.141l.079-.005h1.28a2,2,0,0,0,2-1.844l0-.124V7.844A.579.579,0,0,1,14.94,7.271Zm-12.948.5a.585.585,0,0,0-1.163.078V11.31l0,.155A3.144,3.144,0,0,0,4,14.421H5.3l.079-.005a.573.573,0,0,0-.079-1.141H4l-.126,0A1.98,1.98,0,0,1,2,11.31V7.844Z" transform="translate(-0.829)" fill-rule="evenodd"/>
                                </svg>
                                Full screen
                            </button>
                        </li>
                        <li className="list-inline-item">
                            <button className="main-btn danger-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13.274" height="12.928" viewBox="0 0 13.274 12.928">
                                    <g id="Group_566" data-name="Group 566" transform="translate(0.5 0.5)">
                                        <path id="Path_2142" data-name="Path 2142" d="M8.666,3.749v-.6A2.376,2.376,0,0,0,6.29.772H3.147A2.376,2.376,0,0,0,.772,3.147v7.176A2.376,2.376,0,0,0,3.147,12.7H6.3A2.369,2.369,0,0,0,8.666,10.33V9.722" transform="translate(-0.772 -0.772)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                        <path id="Path_2143" data-name="Path 2143" d="M15.532,10.021H7.768" transform="translate(-3.258 -4.058)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                        <path id="Path_2144" data-name="Path 2144" d="M16.881,7.106l1.888,1.879-1.888,1.88" transform="translate(-6.495 -3.022)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                    </g>
                                </svg>
                                END SESSION
                            </button>
                        </li>
                    </ul>
                </div>
                {renderToolsMenu(tab)}
            </div>
        </div>
    );
}

export default ClassroomPage;