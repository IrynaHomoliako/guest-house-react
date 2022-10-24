import React from "react";
import images from "../../assets/images";
import { footerLinks } from "../../data/FooterLinks";
import { socials } from "../../data/Socials";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__top">
          <nav className="footer__pages">
            <h4 className="footer__items-title">Pages</h4>
            <ul className="footer__pages-items">
              {footerLinks.map((link) => (
                <li className="footer__pages-item" key={link.id}>
                  <a href={link.id}>{link.link}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__social">
            <h4 className="footer__items-title">Social Media</h4>
            <ul className="footer__social-items">
              {socials.map((social) => (
                <li className="footer__social-item" key={social.id}>
                  <a href={social.link}>
                    <img src={social.icon} alt="icon" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__form-box">
            <h4 className="footer__items-title">Newsletter</h4>
            <p className="footer__form-desr">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <form className="footer__form">
              <input type="email" placeholder="Email" />
              <button className="footer__form-btn">Submit</button>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <img src={images.bigLogo} alt="logo" />
          <p className="footer__bottom-rights">
            © Guest House, LLC. All rights reserved. Powered by Webflow
          </p>
          <p className="footer__bottom-contact">
            +47 (0) 702 88 12 34 — example@webflow.io — Klubbvika 12, 8310
            Kabelvag, Norway
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
