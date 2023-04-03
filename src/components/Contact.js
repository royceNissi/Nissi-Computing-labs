import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export const Example = ()=> {
  const [show, setShow] = useState(false);
  const [name,setName] = useState('');
  const [email,setEmail]=useState('');
  const [emailError,setEmailError] = useState('');  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
            <form>
                <input type="text"
                placeholder="Name"
                 />
                <input type="email"
                placeholder="Email" /> 
                <input type="textarea"
                placeholder="Message" />
                <Button variant="primary" onClick={handleShow}>
                Submit
                </Button>
            </form>
        </div>  
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
         Thank you for your response
        </Modal.Body>
      </Modal>
    </>
  );
}
