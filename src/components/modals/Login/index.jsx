import React from 'react';
import { Modal } from 'react-bootstrap';


const LoginModal = props => {
    const { loginModal, closeLoginModal } = props;
    return (
        <Modal
        show={loginModal}
        onHide={closeLoginModal}
        aria-labelledby="login-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Login to your account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    )
}

export default LoginModal;