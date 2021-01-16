import React, { useState } from 'react';
import { Button, Fade, Collapse, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Timezones from '../../constants/timezone';

const Component = props => {
    const { submitFreeSession } = props;
    const [isFormStarted, setIsFormStarted] = useState(false);
    const [currentFormGroup, setCurrentFormGroup] = useState(0);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [timeZone, setTimeZone] = useState('');
    const [availability, setAvailability] = useState('');
    const [learn, setLearn] = useState([]);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const toggleChecked = e => {
        const id = e.target.id;
        const checked = e.target.checked;

        if(checked) {
            setLearn([...learn,id]);
        }else {
            setLearn(learn.filter(i => i!=id))
        }
    }

    const checkValidation = () => (
        name!==''&&
        email!==''&&
        timeZone!==''&&
        availability!==''&&
        learn.length!==0
    );

    const handleSubmit = event => {
        event.preventDefault();
        
        const payload = {
            name,
            email,
            timeZone,
            availability,
            learn
        };
        if (checkValidation() && isFormSubmitted === false) {
            submitFreeSession(payload);
            setIsFormSubmitted(true);
        };
    }

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
                            <Button onClick={() => setIsFormStarted(true)} disabled={isFormStarted===true} className="btn btn--primary">
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
                    <Form onSubmit={handleSubmit}>
                        <Collapse in={currentFormGroup===0} unmountOnExit >
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Name *</Form.Label>
                                <Form.Text className="text-muted">
                                    Put the child's name if it is your kid.
                                </Form.Text>
                                <Form.Control 
                                    type="text" 
                                    className="mb-3" 
                                    placeholder="Type your answer" 
                                    value={name}
                                    onChange={e => setName(e.target.value)} 
                                    required
                                />
                                <Button className='btn btn--primary' disabled={name===''} onClick={() => setCurrentFormGroup(currentFormGroup+1)}>
                                    Ok&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                                </Button>
                            </Form.Group>
                        </Collapse>
                        <Collapse in={currentFormGroup===1} unmountOnExit >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email Address *</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    className="mb-3" 
                                    placeholder="email@example.com"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)} 
                                    required
                                />
                                <Button className='btn btn--grey mr-3' onClick={() => setCurrentFormGroup(currentFormGroup-1)}>
                                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>&nbsp;&nbsp;Back
                                </Button>
                                <Button className='btn btn--primary' disabled={email===''} onClick={() => setCurrentFormGroup(currentFormGroup+1)}>
                                    Ok&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                                </Button>
                            </Form.Group>
                        </Collapse>
                        <Collapse in={currentFormGroup===2} unmountOnExit >
                            <Form.Group controlId="formBasicTimezone">
                                <Form.Label>Time Zone *</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    className="mb-3" 
                                    placeholder="Type your answer"
                                    as="select" 
                                    value={timeZone}
                                    onChange={e => setTimeZone(e.target.value)} 
                                    required
                                >
                                    <option></option>
                                    {Timezones.map( tz => (
                                        <option key={tz.value} value={tz.value}>{tz.label}</option>
                                    ))}
                                </Form.Control>
                                <Button className='btn btn--grey mr-3' onClick={() => setCurrentFormGroup(currentFormGroup-1)}>
                                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>&nbsp;&nbsp;Back
                                </Button>
                                <Button className='btn btn--primary' disabled={timeZone===''} onClick={() => setCurrentFormGroup(currentFormGroup+1)}>
                                    Ok&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                                </Button>
                            </Form.Group>
                        </Collapse>
                        <Collapse in={currentFormGroup===3} unmountOnExit >
                            <Form.Group controlId="formBasicAvailability">
                                <Form.Label>When You're available (On...) (Days) *</Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Saturday"
                                    name="availability"
                                    id="saturday"
                                    onClick={() => setAvailability("saturday")}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Sunday"
                                    name="availability"
                                    id="sunday"
                                    onClick={() => setAvailability("sunday")}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Monday"
                                    name="availability"
                                    id="monday"
                                    onClick={() => setAvailability("monday")}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Tuesday"
                                    name="availability"
                                    id="tuesday"
                                    onClick={() => setAvailability("tuesday")}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Wednesday"
                                    name="availability"
                                    id="wednesday"
                                    onClick={() => setAvailability("wednesday")}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Thursday"
                                    name="availability"
                                    id="thursday"
                                    onClick={() => setAvailability("thursday")}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Friday"
                                    name="availability"
                                    id="friday"
                                    className="mb-3"
                                    onClick={() => setAvailability("friday")}
                                />
                                <Button className='btn btn--grey mr-3' onClick={() => setCurrentFormGroup(currentFormGroup-1)}>
                                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>&nbsp;&nbsp;Back
                                </Button>
                                <Button className='btn btn--primary' disabled={availability===''} onClick={() => setCurrentFormGroup(currentFormGroup+1)}>
                                    Ok&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                                </Button>
                            </Form.Group>
                        </Collapse>
                        <Collapse in={currentFormGroup===4} unmountOnExit >
                            <Form.Group controlId="formBasicLearn">
                                <Form.Label>What do you need to learn?</Form.Label>
                                <Form.Check 
                                    type='checkbox'
                                    id='pronunciation'
                                    label='Quran correct pronunciation'
                                    onChange={e => toggleChecked(e)}
                                />
                                <Form.Check 
                                    type='checkbox'
                                    id='arabic'
                                    label='Arabic Language'
                                    onChange={e => toggleChecked(e)}
                                />
                                <Form.Check 
                                    type='checkbox'
                                    id='memorization'
                                    label='Quran memorization'
                                    onChange={e => toggleChecked(e)}
                                />
                                <Form.Check 
                                    type='checkbox'
                                    id='tajweed'
                                    label='Tajweed'
                                    className='mb-3'
                                    onChange={e => toggleChecked(e)}
                                />
                                <Button className='btn btn--grey mr-3' onClick={() => setCurrentFormGroup(currentFormGroup-1)}>
                                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>&nbsp;&nbsp;Back
                                </Button>
                                <Button type="submit" disabled={learn.length===0} className='btn btn--primary'>
                                    Submit
                                </Button>
                            </Form.Group>
                        </Collapse>
                    </Form>
                </div>
            </Fade>
        </section>
    )
}

export default Component;