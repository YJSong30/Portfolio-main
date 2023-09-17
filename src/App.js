import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import ContactPage from "./ContactPage";
import Blogs from "./Blogs";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blogs" element={<Blogs />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
