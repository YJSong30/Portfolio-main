import React, { useState } from "react";
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

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
      
    //   axios
    //     .post("http://127.0.0.1:3001/", {
    //       name,
    //       email,
    //       message,
    //     })
    //     .then((response) => {
    //       console.log("Email sent successfully:", response.data);
    //     })
    //     .catch((error) => {
    //       console.error("Error sending email:", error);
    //     });
    // };
    
    return (
      <div className="create">
        <h2>Contact Me</h2>
        <p>Submission is not working at the moment because the backend is currently in the works. Please email <b>youngsong1230@gmail.com</b> or click the envelope icon at the bottom to contact me. Thank you.</p>
        <br></br>
        <form>
        {/* <form onSubmit={handleSubmit}> */}
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}
 
export default ContactPage;