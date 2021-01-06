import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => (
    <section className="contact-us">
        <div className="map-container" id='map'>
            <img src="img/Rectangle 289.png" alt="map"/>
        </div>
        <div className="card">
            <div className="row">
                <div className="col-lg-5">
                    <div className="right-content">
                        <div className="right-content__container">
                            <h2 className="right-content__container--title">
                                Keep in touch Hafs
                            </h2>
                            <h3>
                                Join thousands of learners inside Hafs School
                            </h3>
                            <div className="right-content__container--details">
                                <div className="right-content__container--group">
                                    <a href=""><FontAwesomeIcon icon={faMapMarkerAlt} /> El Aslah El Zraay ,st. 63511 Fayoum, Egypt</a>
                                </div>
                                <div className="right-content__container--group">
                                    <a href=""><FontAwesomeIcon icon={faPhone} /> +201551696317</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="left-content">
                        {/* <Form>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicSubject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" placeholder="Subject" />
                            </Form.Group>
                            <Form.Group controlId="formTextarea">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button type="submit">
                                Send
                            </Button>
                        </Form> */}
                    </div>
                </div>
            </div>
        </div>
        <div className="follow-us">
            
        </div>
    </section>
)

export default ContactUs;