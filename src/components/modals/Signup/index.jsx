import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';


const Signup = props => {
    const { signupModal, closeSignupModal } = props;
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [avatarId, setAvatarId] = useState('1');
    
    const submitForm = () => {
        
    }

    return (
        <Modal
        show={signupModal}
        onHide={closeSignupModal}
        aria-labelledby="signup-modal"
        className="signup"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Sign up as teacher
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="form-wrapper">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email address *" value={email} onChange={e => setEmail(e.target.value)} required />
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Control type="text" placeholder="Name *" required value={name} onChange={e => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password *" required value={password} onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Control type="password" placeholder="Confirm password *" required />
                    </Form.Group>
                    <Form.Group controlId="formBasicGender">
                        <Form.Label>Gender *</Form.Label>
                        <Form.Check
                            type="radio"
                            label="male"
                            className="mr-5"
                            name="formHorizontalRadios"
                            id="male"
                            onClick={() => setGender("male")}
                            inline
                        />
                        <Form.Check
                            type="radio"
                            label="female"
                            name="formHorizontalRadios"
                            id="female"
                            onClick={() => setGender("female")}
                            inline
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
                                <img src="img/av1.svg" alt="avatar 1"/>
                            </div>
                            <div 
                                className={(avatarId==='2') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='2'
                                onClick={()=> setAvatarId('2')}
                            >
                                <img src="img/av2.svg" alt="avatar 2"/>
                            </div>
                            <div 
                                className={(avatarId==='3') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='3'
                                onClick={()=> setAvatarId('3')}
                            >
                                <img src="img/av3.svg" alt="avatar 3"/>
                            </div>
                            <div 
                                className={(avatarId==='4') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='4'
                                onClick={()=> setAvatarId('4')}
                            >
                                <img src="img/av4.svg" alt="avatar 4"/>
                            </div>
                            <div 
                                className={(avatarId==='5') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='5'
                                onClick={()=> setAvatarId('5')}
                            >
                                <img src="img/av5.svg" alt="avatar 5"/>
                            </div>
                            <div 
                                className={(avatarId==='6') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='6'
                                onClick={()=> setAvatarId('6')}
                            >
                                <img src="img/av6.svg" alt="avatar 6"/>
                            </div>
                            <div 
                                className={(avatarId==='7') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='7'
                                onClick={()=> setAvatarId('7')}
                            >
                                <img src="img/av7.svg" alt="avatar 7"/>
                            </div>
                            <div 
                                className={(avatarId==='8') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='8'
                                onClick={()=> setAvatarId('8')}
                            >
                                <img src="img/av8.svg" alt="avatar 8"/>
                            </div>
                            <div 
                                className={(avatarId==='9') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='9'
                                onClick={()=> setAvatarId('9')}
                            >
                                <img src="img/av9.svg" alt="avatar 9"/>
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
                                <img src="img/f-av1.svg" alt="avatar 1"/>
                            </div>
                            <div 
                                className={(avatarId==='2') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='2'
                                onClick={()=> setAvatarId('2')}
                            >
                                <img src="img/f-av2.svg" alt="avatar 2"/>
                            </div>
                            <div 
                                className={(avatarId==='3') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='3'
                                onClick={()=> setAvatarId('3')}
                            >
                                <img src="img/f-av3.svg" alt="avatar 3"/>
                            </div>
                            <div 
                                className={(avatarId==='4') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='4'
                                onClick={()=> setAvatarId('4')}
                            >
                                <img src="img/f-av4.svg" alt="avatar 4"/>
                            </div>
                            <div 
                                className={(avatarId==='5') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='5'
                                onClick={()=> setAvatarId('5')}
                            >
                                <img src="img/f-av5.svg" alt="avatar 5"/>
                            </div>
                            <div 
                                className={(avatarId==='6') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='6'
                                onClick={()=> setAvatarId('6')}
                            >
                                <img src="img/f-av6.svg" alt="avatar 6"/>
                            </div>
                            <div 
                                className={(avatarId==='7') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='7'
                                onClick={()=> setAvatarId('7')}
                            >
                                <img src="img/f-av7.svg" alt="avatar 7"/>
                            </div>
                            <div 
                                className={(avatarId==='8') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='8'
                                onClick={()=> setAvatarId('8')}
                            >
                                <img src="img/f-av8.svg" alt="avatar 8"/>
                            </div>
                            <div 
                                className={(avatarId==='9') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='9'
                                onClick={()=> setAvatarId('9')}
                            >
                                <img src="img/f-av9.svg" alt="avatar 9"/>
                            </div>
                        </div>
                    </div>
                    )}
                    <Button className="btn btn--primary" onClick={submitForm} >Create account</Button>
                </Form>
            </div>
        </Modal.Body>
      </Modal>
    )
}

export default Signup;