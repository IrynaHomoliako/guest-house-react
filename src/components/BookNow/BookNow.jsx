import React from "react";
import { motion } from "framer-motion";
import { animation } from "../../data/Animation";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./BookNow.scss";

const BookNow = () => {
  return (
    <motion.div
      className="book-now"
      initial="hidden"
      whileInView="visible"
      variants={animation}
      viewport={{ amount: 0.2, once: true }}
    >
      <div className="container">
        <SectionTitle
          title="We're already booked up for the spring — hurry up & secure your stay for the summer."
          descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus."
          styles={{ textAlign: "center", margin: "0 auto" }}
        />
        <div className="book-now__buttons">
          <button className="book-now__button-contact button">Contact</button>
          <button className="book-now__button-book button">Book now</button>
        </div>
      </div>
    </motion.div>
  );
};

export default BookNow;
