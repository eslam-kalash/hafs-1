import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';


const LoginModal = props => {
    const { loginModal, closeLoginModal } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = () => {

    }

    return (
        <Modal
        show={loginModal}
        onHide={closeLoginModal}
        aria-labelledby="login-modal"
        className="signup"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="form-wrapper">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email address *" value={email} onChange={e => setEmail(e.target.value)} required />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password *" required value={password} onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button className="btn btn--forget" >Forget password</Button>
                    <Button className="btn btn--primary" onClick={submitForm} >Login</Button>
                </Form>
            </div>
        </Modal.Body>
      </Modal>
    )
}

export default LoginModal;