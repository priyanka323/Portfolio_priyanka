// import React from "react";
// import Header from "../NavBar/NavBar";

// const Contact = () => {
//     return(
//         <>
//             <Header/>
//             <div>
//             <h4>contact: 708253402</h4>
//             <h2>Email: priyanka.20eic530@rtu.ac.in</h2>
//             </div>
//         </>
//     );
// }
// export default Contact;
import React, { useState } from 'react';
import Header from '../NavBar/NavBar';
import {FiMail} from 'react-icons/fi';

const Contact = () => {
  
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    
    setName('');
    setEmail('');
    setMessage('');
    setFormSubmitted(true);
  };

  return (
    <>
        <Header/>
        <div style={{display:'flex', flexdirection:'row', margin:'50px'}}>
            <div style={{width:'50%'}}>
                <div>
                    <h1>Let's Chat. </h1>
                    <h1>Tell me your Project...!</h1>
                </div>
                <div>
                    <p>Let's Create something together...!</p>
                    <h5 style={{marginTop:'0px'}}>Mail me at</h5>
                </div>
                <div style={{display:'flex', flexdirection:'row', }}>
                    <div style={{maginLeft:'50%',justifyContent:'center',alignContent:'center'}}>
                        <h3> <FiMail /> </h3>
                    </div>
                    <div>
                        <div style={{marginLeft:'20px'}}>
                            
                            <h5 style={{marginTop:'0px'}}>priyanka.20eic530@rtu.ac.in</h5>
                            
                        </div>
                        <div >
                            
                        </div>
                    </div>
                </div>
            </div>
            <div>
      <h1>Send Us a Message...!</h1>
      {formSubmitted ? (
        <p>Thank you for your message! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
        </div>
    </>
  );
};

export default Contact;
