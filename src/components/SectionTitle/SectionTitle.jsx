import React from "react";
import "./SectionTitle.scss";

const SectionTitle = ({ title, descr, styles }) => {
  return (
    <div className="section-title__container" style={styles}>
      <h3 className="section-title line">{title}</h3>
      <p className="section-title__descr">{descr}</p>
    </div>
  );
};

export default SectionTitle;
