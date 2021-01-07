import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactusPage = () => (
    <section className="contact-us">
        <div className="map-container" id='map'>
            <img src="img/Rectangle 289.png" alt="map"/>
        </div>
        <div className="card">
            <div className="row">
                <div className="col-lg-6">
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
                <div className="col-lg-6">
                    <div className="left-content">
                        <Form>
                            <Form.Group controlId="formBasicName">
                                <Form.Control type="text" placeholder="Name" />
                                <Form.Label>Name</Form.Label>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email address" />
                                <Form.Label>Email address</Form.Label>
                            </Form.Group>
                            <Form.Group controlId="formBasicSubject">
                                <Form.Control type="text" placeholder="Subject" />
                                <Form.Label>Subject</Form.Label>
                            </Form.Group>
                            <Form.Group controlId="formTextarea">
                                <Form.Control as="textarea" placeholder="Message" rows={3} />
                                <Form.Label>Message</Form.Label>
                            </Form.Group>
                            <Button className="btn btn--primary" type="submit">
                                Send
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
        <div className="follow-us">
            <div className="follow-us__title">
                Follow us
            </div>
            <div className="follow-us__icons">
                <a href=""><img src="img/fb.svg" alt="facebook"/></a>
                <a href=""><img src="img/yt.svg" alt="youtube"/></a>
                <a href=""><img src="img/tw.svg" alt="twitter"/></a>
                <a href=""><img src="img/ins.svg" alt="instgram"/></a>
            </div>
        </div>
    </section>
)

export default ContactusPage;