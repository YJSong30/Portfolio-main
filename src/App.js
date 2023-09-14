import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Project from './Project';
import Navbar from './Navbar';

function App() {
  const projects = [
    {
      title: 'Project 1 test test2 test3',
      description: 'Description for project 1',
      link: 'https://github.com/yourusername/project1'
    },
    {
      title: 'Project 2',
      description: 'Description for project 2',
      link: 'https://github.com/yourusername/project2'
    }
    // ... add more projects as necessary
  ];

  return (
    <div>
      <Navbar></Navbar>
      <Header />
      <section>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;
