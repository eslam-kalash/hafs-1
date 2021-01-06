import React, { useState } from 'react';
import ArticlesCard from './ArticlesCard';
import VideoCard from './VideoCard';
import { Nav } from 'react-bootstrap';

const ArticlesContainer = () => {
    const [tab, setTab] = useState("1");

    const renderTab = tabKey => {
        switch (tabKey) {
            case "1":
                return (
                    <div className="tab-articles" id="articles">
                        <div className="row">
                            <div className="col-lg-4">
                                <ArticlesCard />
                            </div>
                            <div className="col-lg-4">
                                <ArticlesCard />
                            </div>
                            <div className="col-lg-4">
                                <ArticlesCard />
                            </div>
                        </div>
                    </div>
                );
                break;
            case "2":
                return (
                    <div className="tab-video">
                        <div className="row">
                            <div className="col-lg-4">
                                <VideoCard />
                            </div>
                            <div className="col-lg-4">
                                <VideoCard />
                            </div>
                            <div className="col-lg-4">
                                <VideoCard />
                            </div>
                        </div>
                    </div>
                );
                break;
            default:
                break;
        };
    }

    return (
        <div className="articles__container">
            <Nav variant="tabs" activeKey={tab} onSelect={eventKey => setTab(eventKey)} >
                <Nav.Item>
                    <Nav.Link eventKey="1"  href="">
                        Articles
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2" href="">
                        Video
                    </Nav.Link>
                </Nav.Item><Nav.Item>
                    <Nav.Link eventKey="3" href="">
                        Audio
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            {renderTab(tab)}
            <div className="tab-audio">
                
            </div>
        </div>
    );
}

export default ArticlesContainer;