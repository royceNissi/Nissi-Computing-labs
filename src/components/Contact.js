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
            <form className='contact-form'>
                <div className="contact-form__inputs">
                    <h2 className="contact-header">
                        Contact Us
                    </h2>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea cols="30" rows="5" placeholder="Message">
                    </textarea>
                    <Button variant="primary" onClick={handleShow}>
                        Submit
                    </Button>    
                </div>
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
         <h3>Thank you for your response.</h3>
        </Modal.Body>
      </Modal>
    </>
  );
}
