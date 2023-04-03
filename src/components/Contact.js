import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
export const Example = ()=> {
  const [show, setShow] = useState(false);
  const [name,setName] = useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage] = useState('');
  const [nameError,setNameError] = useState('');
  const [emailError,setEmailError] = useState('');
  const nameChange = (e)=>{
    if(e.target.value === ''){
      setName(e.target.value);
      setNameError('Name cannot be blank');
    }
    setNameError('');
    setName(e.target.value);
  }
  const messageChange = (e) =>{
    setMessage(e.target.value);
  }
  const emailChange = (e)=>{
    if(e.target.value === ''){
      setEmail(e.target.value);
      setEmailError('Email cannot be blank');
    }
    else if(!e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      setEmailError('Please enter Valid Email');
      setEmail(e.target.value);
    }
    else{
      setEmail(e.target.value);
      setEmailError('');
    }
  }  
  const handleClose = () => {setShow(false)
    setName('');
    setEmail('');
    setMessage('')};
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.length >1 && email.length>1){
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
                    onChange={nameChange} />
                    <p>{nameError}</p>
                    <input type="email" placeholder="Email"
                    value={email} 
                    onChange={emailChange}/>
                    <p>{emailError}</p>
                    <textarea cols="30" rows="5" placeholder="Message"
                    onChange={messageChange}
                    value={message}>
                    </textarea>
                    <button type='submit' className='submit-button'>submit</button>    
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
          <Modal.Body>
           <h3>Thank you for your response.</h3>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </>
  );
}
