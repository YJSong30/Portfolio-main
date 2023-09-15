import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Young's Website</h1>
      <div className="links"></div>
      <Link to="/">Home</Link>
      <Link to="/about-me">About Me</Link>
      <Link to="/contact">Contact Me</Link>
      
    </nav>
  );
};

export default Navbar;
