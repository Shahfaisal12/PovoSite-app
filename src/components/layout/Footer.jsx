import React from "react";

import { BsFacebook, BsGithub, BsReddit, BsYoutube } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer-section pt-5" style={{ backgroundColor: ' #2d061b' }}>
      <div className="container">
        <div className="row">
          <div className="p-2 col-md-6 col-12">
            <div className="d-flex">
              <div className="footer-logo">
                <img src="https://povo-site.netlify.app/static/media/NewLogo.0402fecf.png" width="70" alt="" />
              </div>
              <div className="p-2 text-white" >
                <strong> PLAY TO WIN REWARD ON HOLDING </strong>
                <br />Frictionless yield &amp; liquidity generation protocol
                <br /> for game lover. Povo is deflationary in it's nature
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row mt-2">
              <div className="footer-menu d-flex align-items-center justify-content-end mb-3">
                <a className="p-2 fs-4 text-white" href="/">
                  <SiGmail />
                </a>
                <a className="p-2 fs-4 text-white" href="/">
                  <BsGithub />
                </a>
                <a className="p-2 fs-4 text-white" href="/">
                  <IoIosSend />
                </a>
                <a className="p-2 fs-4 text-white" href="/">
                  <FaTwitter />
                </a>
                <a className="p-2 fs-4 text-white" href="/">
                  <BsYoutube />
                </a>
                <a className="p-2 fs-4 text-white" href="/">
                  <BsReddit />
                </a>
                <a className="p-2 fs-4 text-white" href="/">
                  <BsFacebook />
                </a>
              </div>
            </div>
          </div>

        </div>
        <hr className="text-white border-sm" />
        <div className="copy-right text-center text-white p-2 fw-bold">
          <p>©2021 Povo Productions Limited</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
