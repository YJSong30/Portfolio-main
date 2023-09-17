import React from "react";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import ContactPage from "./ContactPage";
import Portfolio from "./Portfolio";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
