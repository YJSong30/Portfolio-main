import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Young Song</h1>
      <div className="links"></div>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/contact">Contact Me</Link>
      
      
    </nav>
  );
};

export default Navbar;
