import React, { useState, Text } from "react";
import { useNavigate } from "react-router-dom";


const ContactPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate =  useNavigate();
    
    const handleSubmit = (e) => {
      e.preventDefault();

      if (name && email && message) {
        const form = { name, email, message };
        console.log(form);
        navigate("/submitted");
      } else {
        alert("All fields are required");
      }
    };

    return (
      <div className="create">
        <h2>Contact Me</h2>
        <br></br>
        <form>
        {/* <form onSubmit={handleSubmit}> */}
          <div>
            <h3>Currently submission is not working. Please email me directly at youngsong1230@gmail.com. Thank you!</h3>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}
 
export default ContactPage;