import React, { useState } from "react";
import axios from 'axios';

const ContactPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const handleSubmit = () => {
        const form = { name, email, message };
        console.log("Submitted! I will be in touch soon", form)

    };

    // const handleSubmit = async () => {
    //     try {
    //       const response = await axios.post('http://localhost:3001/contact', {
    //         name,
    //         email,
    //         message,
    //       });
    //       console.log('Submitted!', response.data);
    //     } catch (error) {
    //       console.error('Error submitting form:', error);
    //     }
    //   };
    
    return (
      <div className="create">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="10"
              cols="50"
            ></textarea>
          </div>
          <button type="button" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    );
}
 
export default ContactPage;