import React from 'react';
import './Footer.css';
import { FaTwitter, FaPinterest, FaFacebook, FaDribbble } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="container">
            <div className="footer-content">
            <h3>Contact Us</h3>
            <p>Email: Info@example.com</p>
            <p>Phone: +121 56556 565556</p>
            <p>Address: Your Address 123 street</p>
        </div>
        <div className="footer-content">
            <h3>QUICK LINKS</h3>
            <ul className="list">
                <li><a href="#">HOME</a></li>
                <li><a href="#about">ABOUTS</a></li>
                <li><a href="#services">SERVICES</a></li>
                <li><a href="#">PRODUCTS</a></li>
                <li><a href="#">CONTACTS</a></li>
            </ul>
        </div>

        <div className="footer-content">
            <h3> HELPS</h3>
            <ul className="list">
                <li><a href="#">COSTOMER SUPPORTS</a></li>
                <li><a href="#">ORDER AND DETAILS</a></li>
                <li><a href="#">TERMS AND CONDITIONS</a></li>
                <li><a href="#">PRIVACY SND POLICY</a></li>
            </ul>
        </div>
        <div className="footer-content">
            <h3>Follow Us</h3>
            <ul className="social-icons">
            <li>
                  <span className="twitter">
                    <FaTwitter />
                  </span>
                </li>

                <li>
                  <span className="pinterest">
                    <FaPinterest />
                  </span>
                </li>

                <li>
                  <span className="facebook">
                    <FaFacebook />
                  </span>
                </li>

                <li>
                  <span className="dribble">
                    <FaDribbble />
                  </span>
                </li>
            </ul>
        </div>
            </div>
            <div className="bottom-bar">
            <p>&copy; 2023 your company. All rights reserved</p>
        </div>
        </footer>
    );
};

export default Footer;
