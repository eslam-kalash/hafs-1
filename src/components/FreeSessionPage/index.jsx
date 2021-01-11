import React, { useState } from 'react';
import { Button, Fade, Collapse, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const FreeSession = () => {
    const [isFormStarted, setIsFormStarted] = useState(false);
    const [currentFormGroup, setCurrentFormGroup] = useState(0);

    return (
        <section className="free-session">
            <Fade in={!isFormStarted} unmountOnExit>
                <div className="row m-0">
                    <div className="col-lg-6 position-relative p-0">
                        <div className="free-session__container">
                            <div className="free-session__title">
                                Want to have a free session? <br />Sign up to be a part of our Quran community.
                            </div>
                            <p>It's easier than you think!</p>
                            <Button onClick={() => setIsFormStarted(true)} className="btn btn--primary">
                                Start now &nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                            </Button>
                        </div>
                    </div>
                    <div className="col-lg-6 p-0">
                        <img src="img/Group 390.png" alt="free session"/>
                    </div>
                </div>
            </Fade>
            <Fade in={isFormStarted} unmountOnExit>
                <div className='form-container'>
                    <Form>
                        <Collapse in={currentFormGroup==0} unmountOnExit >
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Name *</Form.Label>
                                <Form.Text className="text-muted">
                                    Put the child's name if it is your kid.
                                </Form.Text>
                                <Form.Control type="text" className="mb-3" placeholder="Type your answer" required />
                                <Button className='btn btn--primary' onClick={() => setCurrentFormGroup(currentFormGroup+1)}>
                                    Ok&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                                </Button>
                            </Form.Group>
                        </Collapse>
                        <Collapse in={currentFormGroup==1} unmountOnExit >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email Address *</Form.Label>
                                <Form.Control type="text" className="mb-3" placeholder="email@example.com" required />
                                <Button className='btn btn--primary' onClick={() => setCurrentFormGroup(currentFormGroup+1)}>
                                    Ok&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                                </Button>
                            </Form.Group>
                        </Collapse>
                        <Collapse in={currentFormGroup==2} unmountOnExit >
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Time Zone *</Form.Label>
                                <Form.Control type="text" className="mb-3" placeholder="Type your answer" required />
                                <Button className='btn btn--primary' onClick={() => setCurrentFormGroup(currentFormGroup+1)}>
                                    Ok&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                                </Button>
                            </Form.Group>
                        </Collapse>
                        <div className="form-actions">
                            
                        </div>
                    </Form>
                </div>
            </Fade>
        </section>
    )
}


export default FreeSession;