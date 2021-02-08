import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';


const Signup = props => {
    const { signupModal, closeSignupModal } = props;
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [gender, setGender] = useState('male');
    const [avatarId, setAvatarId] = useState('1');

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
    }

    return (
        <Modal
        show={signupModal}
        onHide={() => {
            setValidated(false);
            closeSignupModal();
        }}
        aria-labelledby="signup-modal"
        className="signup"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Sign up as student
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="form-wrapper">
                <Form noValidate onSubmit={handleSubmit}>
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
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control 
                            type="password" 
                            placeholder="Password *" 
                            isInvalid={validated && password===''}  
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter your password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Control 
                            type="password" 
                            placeholder="Confirm password *" 
                            isInvalid={validated && password!==passwordConfirm}
                            value={passwordConfirm} 
                            onChange={e => setPasswordConfirm(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Passwords must match
                        </Form.Control.Feedback>
                    </Form.Group>
                    {/* <Form.Group controlId="formBasicTeach">
                        <Form.Label>I can teach *</Form.Label>
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
                    </Form.Group> */}
                    <Form.Group controlId="formBasicGender">
                        <Form.Label>Gender *</Form.Label>
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
                    {(gender) === 'male' && (
                    <div className="avatars">
                        <div className="avatars__title">
                            <span>Select Avatar</span>
                        </div>
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
                    </div>
                    )}
                    {(gender) === 'female' && (
                    <div className="avatars">
                        <div className="avatars__title">
                            <span>Select Avatar</span>
                        </div>
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
                    </div>
                    )}
                    <Button type='submit' className="btn btn--primary">Create account</Button>
                </Form>
            </div>
        </Modal.Body>
      </Modal>
    )
}

export default Signup;