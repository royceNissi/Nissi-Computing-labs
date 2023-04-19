import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import thankyou from '../assests/thankyou.png';
export const ContactForm = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const nameChange = (e) => {
      setNameError('');
      setName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
  }
  const nameCheck = () =>{
    if (name === '') {
      setNameError('Name cannot be blank');
    }
  }
  const messageChange = (e) => {
    setMessage(e.target.value);
  }
  const emailChange = (e) => {
      setEmail(e.target.value);
      setEmailError('');
  }

  const emailCheck = () => {
    if (email === '') {
      setEmailError('Email cannot be blank');
    }
    if (email && !email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      setEmailError('Please enter Valid Email');
    } 
  }
  const handleClose = () => {
    setShow(false)
    setName('');
    setEmail('');
    setMessage('')
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setShow(true);
    }
  }

  return (
    <>
      <div>
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className="contact-form__inputs">
            <h2 className="contact-header">
              Contact Us
            </h2>
            <input type="text" placeholder="Name"
              value={name}
              onChange={nameChange}
              onBlur={nameCheck}
               />
            <span className="error-message">{nameError}</span>
            <input type="email" placeholder="Email"
              value={email}
              onChange={emailChange} 
              onBlur={emailCheck}
              />
            <p className="error-message">{emailError}</p>
            <textarea cols="30" rows="5" placeholder="Message"
              onChange={messageChange}
              value={message}
              >
            </textarea>
            <button type='submit' className='submit-button'>Submit</button>
          </div>
        </form>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img src={thankyou} alt="" width={'100px'} className='thanks-image' />
          <h3 className='thanks-header'>Thank you for contacting us!</h3>
          <h5 className='thanks-body'>We greatly appreciate your interest and will get back to you soon as possible.
          </h5>
          <h5 className='great-text'>Have a great day!</h5>
        </Modal.Body>
      </Modal>
    </>
  );
}
