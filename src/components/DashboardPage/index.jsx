import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';

const DashboardPage = () => {
    const [tab, setTab] = useState("1");

    return (
        <div className="dashboard">
            <div className="dashboard__sidebar">
                <Nav className="flex-column" activeKey={tab} onSelect={eventKey => setTab(eventKey)} >
                    <Nav.Item>
                        <Nav.Link eventKey="1">
                             My Dashboard
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="2">
                             Classroom
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="3">
                             Schedule
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="4">
                             Home Work
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="5">
                            My Profile
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    )
}

export default DashboardPage;