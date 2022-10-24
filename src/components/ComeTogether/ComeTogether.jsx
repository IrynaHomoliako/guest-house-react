import React from "react";
import { motion } from "framer-motion";
import { animation } from "../../data/Animation";
import images from "../../assets/images";
import { comeTogether } from "../../data/ComeTogether";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./ComeTogether.scss";

const ComeTogether = () => {
  return (
    <motion.div
      className="come-together"
      initial="hidden"
      whileInView="visible"
      variants={animation}
      viewport={{ amount: 0.2, once: true }}
    >
      <div className="come-together__img-container">
        <img
          className="come-together__img"
          src={images.sectionImage02}
          alt="section1"
        />
      </div>
      <div className="container">
        <div className="come-together__content">
          <SectionTitle
            title="Come together."
            descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus."
            styles={{ textAlign: "left" }}
          />
          <div className="come-together__items">
            {comeTogether.map((item) => (
              <div className="come-together__item" key={item.id}>
                <img src={item.icon} alt="icon" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ComeTogether;
