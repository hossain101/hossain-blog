import {Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Hossain Blog</h1>
      <div className="links"><Link to="/">Home</Link></div>
      <div className="links"><Link to="/create">New Blog</Link></div>
    </nav>
  );
};

export default Navbar;
