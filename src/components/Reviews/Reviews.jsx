import React from "react";
import { motion } from "framer-motion";
import { animation } from "../../data/Animation";
import SectionTitle from "../SectionTitle/SectionTitle";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { reviews } from "../../data/Reviews";
import "./Reviews.scss";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

const Reviews = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <motion.div
      className="reviews"
      initial="hidden"
      whileInView="visible"
      variants={animation}
      viewport={{ amount: 0.2, once: true }}
    >
      <div className="container">
        <SectionTitle
          title="Past guests."
          descr="Don't take our word for it! Have a look at what our previous guests say about their stay at the Guest House."
          styles={{ textAlign: "center", margin: "0 auto" }}
        />
      </div>
      <div className="reviews__slider">
        <div className="reviews__slider-container" ref={scrollRef}>
          {reviews.map((review) => (
            <div className="reviews__slider-card" key={review.id}>
              <Rater total={5} rating={review.rate} />
              <h5 className="reviews__slider-card_title">{review.title}</h5>
              <p className="reviews__slider-card_text">{review.text}</p>
              <span className="reviews__slider-card_author">
                {review.author}
              </span>
            </div>
          ))}
        </div>
        <div className="reviews__slider-arrows">
          <BsArrowLeftShort
            className="reviews__slider-arrow"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="reviews__slider-arrow"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Reviews;
