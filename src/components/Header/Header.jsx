import React from "react";
import { motion } from "framer-motion";
import { animation } from "../../data/Animation";
import images from "../../assets/images";
import Navbar from "../Navbar/Navbar";
import "./Header.scss";

const Header = () => {
  return (
    <motion.div
      className="header"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <Navbar />
      <div className="header__content">
        <div className="container">
          <motion.img
            variants={animation}
            className="header__logo"
            src={images.bigLogo}
            alt="logo"
          />
          <motion.h1 variants={animation} className="header__content-title">
            Experience the perfect combination of modern housing & natural
            scenery.
          </motion.h1>
          <motion.span
            variants={animation}
            className="header__content-subtitle"
          >
            Located in Lofoten, norway
          </motion.span>
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        variants={animation}
        className="header__bottom"
      >
        <div className="container">
          <div className="header__info line">
            <div className="header__info-container">
              <p className="header__info-text">
                The Guest House is the perfect weekend get-away housing. Located
                in the Norwegian archipelago, Lofoten, it's a great escape from
                the hustle and bustle of the city. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nullam scelerisque aliquam odio et
                faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi
                neque ex, condimentum dapibus congue et, vulputate ut ligula.
              </p>
            </div>
            <div className="header__info-container">
              <p className="header__info-text">
                Below you'll find information about the accommodation and what's
                included in the price. Don't hesitate to reach out to us vi the
                contact page if you have any questions around your stay.
              </p>
              <button className="header__info-button button">Book now</button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
