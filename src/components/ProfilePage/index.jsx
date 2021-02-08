import React, { useState } from 'react';
import DashboardSidebar from '../DashboardSidebar';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVideo } from '@fortawesome/free-solid-svg-icons';

import Timezones from '../../constants/timezone';
import Countries from '../../constants/countries';

const ProfilePage = () => {
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState('Username');
    const [email, setEmail] = useState('email@gmail.com');
    const [password, setPassword] = useState('00000000');
    const [gender, setGender] = useState('male');
    const [country, setCountry] = useState('Egypt');
    const [timeZone, setTimeZone] = useState('Africa/Cairo');
    const [avatarId, setAvatarId] = useState('1');
    const [aboutMe, setAboutMe] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
    }


    return (
        <div className='profile'>
            <div className="row">
                <div className="col-lg-2">
                    <DashboardSidebar />
                </div>
                <div className="col-lg-10">
                    <div className="profile__main">       
                        <h2 className='mb-5'>Profile</h2>
                        <Form noValidate onSubmit={handleSubmit}>
                            <div className="avatar-group">
                                <h3>Your Avatar</h3>
                                {(gender) === 'male' && (
                                    <div className="avatars__group">
                                        <div 
                                            className={(avatarId==='1') ? "avatars__group--icon selected":"avatars__group--icon"}
                                            id='1'
                                            onClick={()=> setAvatarId('1')}
                                        >
                                            <img src="/img/av1.svg" alt="avatar 1"/>
                                        </div>
                                        <div 
                                            className={(avatarId==='2') ? "avatars__group--icon selected":"avatars__group--icon"}
                                            id='2'
                                            onClick={()=> setAvatarId('2')}
                                        >
                                            <img src="/img/av2.svg" alt="avatar 2"/>
                                        </div>
                                        <div 
                                            className={(avatarId==='3') ? "avatars__group--icon selected":"avatars__group--icon"}
                                            id='3'
                                            onClick={()=> setAvatarId('3')}
                                        >
                                            <img src="/img/av3.svg" alt="avatar 3"/>
                                        </div>
                                        <div 
                                            className={(avatarId==='4') ? "avatars__group--icon selected":"avatars__group--icon"}
                                            id='4'
                                            onClick={()=> setAvatarId('4')}
                                        >
                                            <img src="/img/av4.svg" alt="avatar 4"/>
                                        </div>
                                        <div 
                                            className={(avatarId==='5') ? "avatars__group--icon selected":"avatars__group--icon"}
                                            id='5'
                                            onClick={()=> setAvatarId('5')}
                                        >
                                            <img src="/img/av5.svg" alt="avatar 5"/>
                                        </div>
                                        <div 
                                            className={(avatarId==='6') ? "avatars__group--icon selected":"avatars__group--icon"}
                                            id='6'
                                            onClick={()=> setAvatarId('6')}
                                        >
                                            <img src="/img/av6.svg" alt="avatar 6"/>
                                        </div>
                                        <div 
                                            className={(avatarId==='7') ? "avatars__group--icon selected":"avatars__group--icon"}
                                            id='7'
                                            onClick={()=> setAvatarId('7')}
                                        >
                                            <img src="/img/av7.svg" alt="avatar 7"/>
                                        </div>
                                        <div 
                                            className={(avatarId==='8') ? "avatars__group--icon selected":"avatars__group--icon"}
                                            id='8'
                                            onClick={()=> setAvatarId('8')}
                                        >
                                            <img src="/img/av8.svg" alt="avatar 8"/>
                                        </div>
                                        <div 
                                            className={(avatarId==='9') ? "avatars__group--icon selected":"avatars__group--icon"}
                                            id='9'
                                            onClick={()=> setAvatarId('9')}
                                        >
                                            <img src="/img/av9.svg" alt="avatar 9"/>
                                        </div>
                                    </div>
                                )}
                                {(gender) === 'female' && (
                                    <div className="avatars__group">
                                        <div 
                                            className={(avatarId==='1') ? "avatars__group--icon selected":"avatars__group--icon"}
                                            id='1'
                                            onClick={()=> setAvatarId('1')}
                                        >
                                            <img src="/img/f-av1.svg" alt="avatar 1"/>
                                        </div>
                                        <div 
                                            className={(avatarId==='2') ? "avatars__group--icon selected":"avatars__group--icon"}
                                            id='2'
                                            onClick={()=> setAvatarId('2')}
                                        >
                                            <img src="/img/f-av2.svg" alt="avatar 2"/>
                                        </div>
                                        <div 
                                            className={(avatarId==='3') ? "avatars__group--icon selected":"avatars__group--icon"}
                                            id='3'
                                            onClick={()=> setAvatarId('3')}
                                        >
                                            <img src="/img/f-av3.svg" alt="avatar 3"/>
                                        </div>
                                        <div 
                                            className={(avatarId==='4') ? "avatars__group--icon selected":"avatars__group--icon"}
                                            id='4'
                                            onClick={()=> setAvatarId('4')}
                                        >
                                            <img src="/img/f-av4.svg" alt="avatar 4"/>
                                        </div>
                                        <div 
                                            className={(avatarId==='5') ? "avatars__group--icon selected":"avatars__group--icon"}
                                            id='5'
                                            onClick={()=> setAvatarId('5')}
                                        >
                                            <img src="/img/f-av5.svg" alt="avatar 5"/>
                                        </div>
                                        <div 
                                            className={(avatarId==='6') ? "avatars__group--icon selected":"avatars__group--icon"}
                                            id='6'
                                            onClick={()=> setAvatarId('6')}
                                        >
                                            <img src="/img/f-av6.svg" alt="avatar 6"/>
                                        </div>
                                        <div 
                                            className={(avatarId==='7') ? "avatars__group--icon selected":"avatars__group--icon"}
                                            id='7'
                                            onClick={()=> setAvatarId('7')}
                                        >
                                            <img src="/img/f-av7.svg" alt="avatar 7"/>
                                        </div>
                                        <div 
                                            className={(avatarId==='8') ? "avatars__group--icon selected":"avatars__group--icon"}
                                            id='8'
                                            onClick={()=> setAvatarId('8')}
                                        >
                                            <img src="/img/f-av8.svg" alt="avatar 8"/>
                                        </div>
                                        <div 
                                            className={(avatarId==='9') ? "avatars__group--icon selected":"avatars__group--icon"}
                                            id='9'
                                            onClick={()=> setAvatarId('9')}
                                        >
                                            <img src="/img/f-av9.svg" alt="avatar 9"/>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="info-group">
                                <h3>Personal Info</h3>
                                <Form.Group controlId="formBasicName">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Name *" 
                                        required 
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        isInvalid={validated && name===''} 
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Email address *" 
                                        value={email} 
                                        onChange={e => setEmail(e.target.value)} 
                                        isInvalid={validated && email===''} 
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your email.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Password *" 
                                        isInvalid={validated && password===''}  
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        disabled
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your password.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formBasicGender">
                                    <Form.Label className='mr-5'>Gender</Form.Label>
                                    <Form.Check
                                        type="radio"
                                        label="male"
                                        className="mr-5"
                                        name="gender"
                                        id="male"
                                        isInvalid={validated && gender===''}  
                                        onClick={() => setGender("male")}
                                        inline
                                        checked={gender==='male'}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="female"
                                        name="gender"
                                        id="female"
                                        isInvalid={validated && gender===''}  
                                        onClick={() => setGender("female")}
                                        inline
                                        checked={gender==='female'}
                                    />
                                </Form.Group>
                            </div>
                            <div className="location-group">
                                <h3>Location</h3>
                                <Form.Group controlId="formBasicCountry">
                                    <Form.Control 
                                        type="text" 
                                        className="mb-3" 
                                        placeholder="Type your answer"
                                        as="select" 
                                        value={country}
                                        onChange={e => setCountry(e.target.value)} 
                                        required
                                    >
                                        <option></option>
                                        {Countries.map( c => (
                                            <option key={c.code} value={c.name}>{c.name}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formBasicTimezone">
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
                                </Form.Group>
                            </div>
                            <div className="recitation-sample">
                                <h3>Recitation Sample</h3>
                                <p>You didn't add recitation yet , you can upload audio or video</p>
                                <div className="recitation-sample__new mr-3">
                                    <FontAwesomeIcon icon={faVolumeUp}></FontAwesomeIcon>
                                    <span>Audio</span>
                                </div>
                                <div className="recitation-sample__new">
                                    <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>
                                    <span>Video</span>
                                </div>
                            </div>
                            <div className="teaching-info">
                                <h3>Teaching Info</h3>
                                <Form.Group controlId="formBasicTeach">
                                    <Form.Label>I Can Teach: </Form.Label>
                                    <div>
                                        <Form.Check 
                                            type='checkbox'
                                            id='pronunciation'
                                            label='Quran correct pronunciation'
                                        />
                                        <Form.Check 
                                            type='checkbox'
                                            id='arabic'
                                            label='Arabic Language'
                                        />
                                        <Form.Check 
                                            type='checkbox'
                                            id='memorization'
                                            label='Quran memorization'
                                        />
                                        <Form.Check 
                                            type='checkbox'
                                            id='tajweed'
                                            label='Tajweed'
                                        />
                                    </div>
                                </Form.Group>
                            </div>
                            <div className="certifications">
                                <h3>Certifications</h3>
                                <p>You didn't add certifications yet , you one now</p>
                                <div className="certifications__new">
                                    <img src="/img/cert.svg" alt="certifications"/>
                                    <span>Upload</span>
                                </div>
                            </div>
                            <div className="about-me">
                                <h3>About me</h3>
                                <Form.Group controlId="formBasicAboutme">
                                    <Form.Control 
                                        as="textarea" 
                                        placeholder="about me" 
                                        rows={5} 
                                        value={aboutMe}
                                        onChange={e => setAboutMe(e.target.value)} 
                                    />
                                </Form.Group>
                            </div>
                            <Button className="btn btn--primary">Save Changes</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;