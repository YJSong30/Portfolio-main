import React from "react";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="content">
        <AboutMe></AboutMe>
      </div>
    </div>
  );
}

export default App;
