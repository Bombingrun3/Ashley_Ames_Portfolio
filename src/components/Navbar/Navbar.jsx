import React from "react";
import { NavLink } from "react-router-dom";
import LinkedIn from "../../assets/social-media-logos/linkedin.svg";
import Social from "../../assets/social-media-logos/gitHub-logo.png";
import Instagram from "../../assets/social-media-logos/instagram-new.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <NavLink to="/" className="navbar__link-home">
          <li className="navbar__link">Home</li>
        </NavLink>
        <NavLink to="/about" className="navbar__link-about">
          <li className="navbar__link">About</li>
        </NavLink>

        <NavLink to="/skills" className="navbar__link-skills">
          <li className="navbar__link">Skills</li>{" "}
        </NavLink>

        <NavLink to="/projects" className="navbar__link-projects">
          <li className="navbar__link">Projects</li>
        </NavLink>

        <NavLink to="/contact" className="navbar__link-contact">
          <li className="navbar__link">Contact</li>
        </NavLink>
      </ul>
      <ul className="navbar__socials">
        <li className="navbar__list-item">
          <a href="#" className="navbar__social-link">
            <img
              src={LinkedIn}
              alt="LinkedIn"
              className="navbar__social-icon"
            />
          </a>
        </li>
        <li className="navbar__list-item">
          <a href="#" className="navbar__social-link">
            <img src={Social} alt="Github" className="navbar__social-icon" />
          </a>
        </li>
        <li className="navbar__list-item">
          <a href="#" className="navbar__social-link">
            <img
              src={Instagram}
              alt="Instagram"
              className="navbar__social-icon"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
