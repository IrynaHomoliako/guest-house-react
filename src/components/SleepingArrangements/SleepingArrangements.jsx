import React from "react";
import { sleepingArrangements } from "../../data/SleepingArrangements";
import { motion } from "framer-motion";
import { animation } from "../../data/Animation";
import SectionTitle from "../SectionTitle/SectionTitle";

import "./SleepingArrangements.scss";

const SleepingArrangements = () => {
  return (
    <motion.div
      className="sleeping"
      initial="hidden"
      whileInView="visible"
      variants={animation}
      viewport={{ amount: 0.2, once: true }}
    >
      <div className="container">
        <SectionTitle
          title="Sleeping arrangements."
          descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur."
          styles={{ textAlign: "center", margin: "0 auto" }}
        />
        <div className="sleeping__container">
          {sleepingArrangements.map((item) => (
            <div className="sleeping__item" key={item.id}>
              <img src={item.icon} alt="icon" />
              <h5 className="sleeping__item-title">{item.title}</h5>
              <p className="sleeping__item-descr">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SleepingArrangements;
