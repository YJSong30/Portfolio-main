import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import ContactPage from "./ContactPage";
import Blogs from "./Blogs";
import Submitted from "./Submitted";
import Project from "./Project";
import Footer from "./Footer";
import './App.css';
import ProjectDisplay from "./ProjectDisplay";
import BlogDetail from './BlogDetail';
import { blogList } from "./blogList";


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
            <Route path="/project/:id" element={<ProjectDisplay />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route
              path="/blogs/:id"
              element={<BlogDetail blogs={blogList} />}
            />
          </Routes>
          <Footer></Footer>
        </div>
      </div>
    </Router>
  );
}


export default App;
