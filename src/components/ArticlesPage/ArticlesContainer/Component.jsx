import React, { useState, useEffect } from 'react';
import ArticlesCard from './ArticlesCard';
import VideoCard from './VideoCard';
import { Nav } from 'react-bootstrap';

const Component = props => {
    const { view, articles, getAllArticles } = props;
    const [loaded, setLoaded] = useState(false);
    const [tab, setTab] = useState("1");

    useEffect(() => {
        getAllArticles();
    },[loaded]);

    const renderTab = tabKey => {
        switch (tabKey) {
            case "1":
                if (view==='short') {
                    return (
                        <div className="tab-articles" id="articles">
                            <div className="row">
                                {articles.slice(0,3).map(article => {
                                    return (
                                        <div className="col-lg-4 mb-5">
                                            <ArticlesCard article={article} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    );
                }else {
                    return (
                        <div className="tab-articles" id="articles">
                            <div className="row">
                                {articles.map(article => {
                                    return (
                                        <div className="col-lg-4 mb-5">
                                            <ArticlesCard article={article} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    );
                }
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

export default Component;