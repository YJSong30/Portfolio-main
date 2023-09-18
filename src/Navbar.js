import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
      <h1 className='title'>Young Song</h1>
      </Link>
      <div className="links"></div>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/contact">Contact Me</Link>
      
      
    </nav>
  );
};

export default Navbar;
