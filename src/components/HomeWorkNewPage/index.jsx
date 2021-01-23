import React from 'react';
import DashboardSidebar from '../DashboardSidebar';
import {Form, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";


const HomeWorkNewPage = () => (
    <div className='dashboard-page dashboard-with-sidebar'>
        <DashboardSidebar />
        <div className="dashboard-content-page">
            <div className="dsh-head-with-btn">
                <h3 className="dsh-title">Tajweed Home work</h3>
            </div>
            <div className="dsh-body">

                <div className="hw-questions-control">
                    <div className="hw-questions-list">
                        <div className="hw-questions-item">
                            <Form>
                                <div className="d-flex align-items-baseline justify-content-between">
                                    <Form.Group controlId="exampleForm.ControlInput1" className="hw-the-question">
                                        <Form.Label>Question 1</Form.Label>
                                        <Form.Control type="email" placeholder="Type question here" />
                                    </Form.Group>
                                    <button className="hwq-delete main-btn danger-btn">delete</button>
                                </div>
                                <ul className="hw-question-answers list-unstyled">
                                    <li className="hw-question-answer">
                                        <Form.Group controlId="exampleForm.ControlInput11">
                                            <Form.Label>Choice 1</Form.Label>
                                            <Form.Control type="email" placeholder="Question Answer" className="hw-question-input" />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput21" className="hw-correct-answer-check">
                                            <Form.Check type="checkbox" id="autoSizingCheck21" label="Right answer" custom />
                                        </Form.Group>
                                    </li>
                                    <li className="hw-question-answer">
                                        <Form.Group controlId="exampleForm.ControlInput12">
                                            <Form.Label>Choice 2</Form.Label>
                                            <Form.Control type="email" placeholder="Question Answer" className="hw-question-input" />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput22" className="hw-correct-answer-check">
                                            <Form.Check type="checkbox" id="autoSizingCheck22" label="Right answer" custom />
                                        </Form.Group>
                                    </li>
                                    <li className="hw-question-answer">
                                        <Form.Group controlId="exampleForm.ControlInput13">
                                            <Form.Label>Choice 3</Form.Label>
                                            <Form.Control type="email" placeholder="Question Answer" className="hw-question-input" />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput23" className="hw-correct-answer-check">
                                            <Form.Check type="checkbox" id="autoSizingCheck23" label="Right answer" custom />
                                        </Form.Group>
                                    </li>
                                    <li className="hw-question-answer">
                                        <Form.Group controlId="exampleForm.ControlInput14">
                                            <Form.Label>Choice 4</Form.Label>
                                            <Form.Control type="email" placeholder="Question Answer" className="hw-question-input" />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput24" className="hw-correct-answer-check">
                                            <Form.Check type="checkbox" id="autoSizingCheck24" label="Right answer" custom />
                                        </Form.Group>
                                    </li>
                                </ul>
                            </Form>

                        </div>
                    </div>
                    <Nav className="hw-questions-actions">
                        <button className="main-btn border-btn-primary">Add another one</button>
                        <button href="/dashboard/homework/new" className="main-btn border-btn-primary ml-auto">Cancel</button>
                        <button href="/dashboard/homework/new" className="main-btn main-btn-primary mr-0">Save</button>
                    </Nav>
                </div>
            </div>
        </div>
    </div>
)

export default HomeWorkNewPage;