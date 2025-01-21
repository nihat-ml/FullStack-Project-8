import React from 'react';
import { MdFavorite } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Banker<span>.</span></Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="">Home</Link></li>
        <li><Link to="/addpage">Add Service</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <button className='favoritesBtnServices' onClick={()=> navigate("/favorites")}><MdFavorite className='favoriteIcons'/></button>
      </div>
    </nav>
  );
}

export default Navbar;
