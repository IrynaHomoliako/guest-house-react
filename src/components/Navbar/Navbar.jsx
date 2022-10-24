import React from "react";
import { navbarLinks } from "../../data/Navbar";
import images from "../../assets/images";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar__logo">
            <img className="navbar__logo-img" src={images.logo} alt="logo" />
          </div>
          <nav className="navbar__nav">
            <ul className="navbar__items">
              {navbarLinks.map((item) => (
                <li className="navbar__item" key={item.id}>
                  <a className="navbar__item-link" href="/">
                    {item.link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button className="navbar__button button">Book now</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
