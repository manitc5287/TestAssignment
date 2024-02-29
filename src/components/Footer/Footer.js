import React from 'react';
import './footer.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Site Menu</h5>
            <ul className="ecom-menu">
              <li><a href="#">Shop</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Deals</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Company Info</h5>
            <p>123 E-commerce Street<br/> City, State 12345<br/> United States</p>
          </div>
          <div className="col-md-4">
            <h5>Connect with Us</h5>
            <ul className="social-icons">
              <li><a href="#">      <FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a href="#">  <FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="#">      <FontAwesomeIcon icon={faInstagram} /></a></li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Footer;
