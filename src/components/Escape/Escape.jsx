import React from "react";
import { motion } from "framer-motion";
import { animation } from "../../data/Animation";
import SectionTitle from "../SectionTitle/SectionTitle";
import { perfectEscape } from "../../data/PerfectEscape";
import "./Escape.scss";

const Escape = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={animation}
      viewport={{ amount: 0.2, once: true }}
      className="escape"
    >
      <div className="container">
        <SectionTitle
          title="The perfect escape."
          descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur."
          styles={{ textAlign: "left" }}
        />
        <div className="escape__container">
          {perfectEscape.map((item) => (
            <div className="escape__item" key={item.id}>
              <div className="escape__item-icon">
                <img src={item.icon} alt="icon" />
              </div>
              <div className="escape__item-content">
                <h5 className="escape__item-title">{item.title}</h5>
                <p className="escape__item-descr">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Escape;
