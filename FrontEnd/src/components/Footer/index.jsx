import React from 'react';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam 
            voluptatum autem. Amet aliquid nesciunt veritatis aliquam.
          </p>
        </div>
        <div className="footer-section quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#terms">Terms</a></li>
            <li><a href="#policy">Policy</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer-section newsletter">
          <h2>Subscribe Newsletter</h2>
          <form>
            <input type="email" placeholder="Enter Email" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
