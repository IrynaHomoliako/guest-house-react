import React from "react";
import { motion } from "framer-motion";
import { animation } from "../../data/Animation";
import images from "../../assets/images";
import "./GuestHouse.scss";

export const GuestHouse = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={animation}
      className="guest-house"
      viewport={{ amount: 0.2, once: true }}
    >
      <div className="container">
        <h2 className="guest-house__title line">
          The Guest House is the perfect weekend getaway cabin.
        </h2>
      </div>
      <div className="guest-house__img-container">
        <img
          className="guest-house__img"
          src={images.sectionImage01}
          alt="section"
        />
      </div>
    </motion.div>
  );
};

// export const MGuestHouse = motion(GuestHouse);

export default GuestHouse;
