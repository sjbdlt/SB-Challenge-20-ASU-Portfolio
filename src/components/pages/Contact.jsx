
import { useState } from 'react';


function Contact() {

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [nrequire, setnrequire] = useState('Name');
  const [erequire, seterequire] = useState('Email');
  const [mrequire, setmrequire] = useState('Message');

  const handleSubmit = (e) => {
    e.preventDefault();

    setInputName('');
    setInputEmail('');
    setInputMessage('');
  };

  const handleChange = (field, value) => {
    if (field == "inputName"){
      setInputName(value);
      setnrequire("Name")
    }
    if (field == "inputEmail"){
      setInputEmail(value);
      seterequire("Email")
    }
    if (field == "inputMessage"){
      setInputMessage(value);
      setmrequire("Message")
    }    
   
  };

  const bluhandleChange = (field, value) => {
    if (field == "inputName"){
      if (value === ''){
        setnrequire("Name is required")
        return;
      }
    }   
   
  };

  const b2luhandleChange = (field, value) => {  
    if (field == "inputEmail"){
       if (value === ''){
        seterequire("Email is required")
        return;
      } else {

        let lastAtPos = value.lastIndexOf('@');
        let lastDotPos = value.lastIndexOf('.');
  
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && value.indexOf('@@') == -1 && lastDotPos > 2 && (value.length - lastDotPos) > 2)) {
          seterequire("Email is not valid")
        } else {
          seterequire("Email")
        }
      }
    }   
  };

  const b3luhandleChange = (field, value) => { 
    if (field == "inputMessage"){
      if (value === ''){
        setmrequire("Message is required")
        return;
      }
    }    
   
  };





  return (
     <div>
       <form className="contact-form" onSubmit={handleSubmit}>
       
       <h3>Contact</h3>   
          <label className="Contact-input">{nrequire}</label> 
          <input
                  type="text"
                  value={inputName}
                  required
                  name="text"
                  className="Contact-input"
                  onChange={e => handleChange('inputName', e.target.value)} 
                  onBlur={e => bluhandleChange('inputName', e.target.value)} 
                  
          ></input>
          <label className="Contact-input"> {erequire}</label>
           <input
                  type="text"
                  value={inputEmail}
                  name="text"
                  required
                  className="Contact-input"
                  onChange={e => handleChange('inputEmail', e.target.value)} 
                  onBlur={e => b2luhandleChange('inputEmail', e.target.value)} 
          ></input>
           <label className="Contact-input">{mrequire}</label> 
           <textarea
                  cols="50"
                  rows="4"
                  value={inputMessage}
                  required
                  name="text"
                  className="Contact-input Contact-input-Message"
                  onChange={e => handleChange('inputMessage', e.target.value)} 
                  onBlur={e => b3luhandleChange('inputMessage', e.target.value)} 

          ></textarea>
           <p><button className="contact-button">Send Message</button></p>
             
             
        </form> 
      </div>

    );
  }
  
  export default Contact;