import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import ContactPage from "./ContactPage";
import Blogs from "./Blogs";
import Submitted from "./Submitted";
import Project from "./Project";


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
            <Route path="/projects" element={<Project />} />
            <Route path="/submitted" element={<Submitted />} />
            
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
