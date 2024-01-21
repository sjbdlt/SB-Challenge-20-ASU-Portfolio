
import { useState } from 'react';


function Contact() {

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!eagerness) {
      eagerness = 'low';
    }

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
      eagerness: eagerness,
    });

    setInput('');
    setEagerness('');
  };

  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setInputEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setInputMessage(e.target.value);
  };

  

  return (
     <div>
       <form className="contact-form" onSubmit={handleSubmit}>
          <table>

            <tr>
              <td> <label>Name</label></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td> <input
                  type="text"
                  placeholder="Name"
                  value={inputName}
                  name="text"
                  className="Contact-input-name"
                  onChange={handleNameChange}
                  ></input></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><label>Email</label></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td> <input
                  type="text"
                  placeholder="Email Address"
                  value={inputEmail}
                  name="text"
                  className="Contact-input-email"
                  onChange={handleEmailChange}
                  ></input></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td> <label>Message</label></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
            <td> <input
                  type="text"
                  placeholder="Message"
                  value={inputEmail}
                  name="text"
                  className="Contact-input-message"
                  onChange={handleMessageChange}
                  ></input></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td> <button className="contact-button">Send Message</button></td>
              <td></td>
              <td></td>
              <td></td>
             
            </tr>
          </table>         
        </form> 
      </div>

    );
  }
  
  export default Contact;