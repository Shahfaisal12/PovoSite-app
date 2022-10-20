import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Particals from './Particals';


// import { Link } from 'react-router-dom';
import { BsGithub, BsYoutube, BsFacebook, BsReddit } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { IoIosSend } from 'react-icons/io';
import { FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="hero-section pt-5 position-relative">

      <div className="particals position-absolute">
        <Particals />
      </div>
      <div className="container pt-0 pt-md-5 position-relative">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="hero-content text-white pt-5">
              <h1>Play To Win <br />  Reward on Holding</h1>
              <h3 className="pt-3">Frictionless yield & liquidity generation protocol for game lover. Povo is deflationary in it's nature</h3>
              <a href="/">
                <button className="btn btn-trade mt-3 py-3 px-5"><img src="https://cryptologos.cc/logos/pancakeswap-cake-logo.png" className="img-fluid" width="24" alt="" /> &nbsp; Trade on PancakeSwap</button>
              </a>

              <button className="btn btn-whitepaper text-white fw-bold mt-3 d-block">Whitepaper</button>

              <div className="d-flex p-3 mt-2">
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
              <div className="buying-selling">
                <div className="row">
                  <div className="col">
                    <h5>Buying FEE is 5%</h5>
                    <ul>
                      <li>3% to buy back funds</li>
                      <li>1% Marketing and Development</li>
                      <li>1% Reflection to holders</li>
                    </ul>
                  </div>
                  <div className="col">
                    <h5>Selling FEE is 7%</h5>
                    <ul>
                      <li>4% to buy back funds</li>
                      <li>1% Marketing and Development</li>
                      <li>2% Reflection to holders</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="console-section">
              <Carousel className="d-flex justify-content-center">
                <Carousel.Item>
                  <img
                    className="d-block w-50 m-auto"
                    src="https://povo-site.netlify.app/static/media/NFT1.d7c5ef8c.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-50 m-auto"
                    src="https://povo-site.netlify.app/static/media/NFT2.ce0d0563.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-50 m-auto"
                    src="https://povo-site.netlify.app/static/media/NFT3.f7c6e745.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="row token-group">
              <div className="col-md-auto col-xl-10 col-12">
                <div className="input-group my-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Token Address</span>
                  </div>
                  <input type="text" disabled="" className="form-control" value="0x2a2d03a47ae6220312337d1f094badcd1ee948cc" />

                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <a href="/">
                  <img src="https://povo-site.netlify.app/certik.png" alt="" width="160" />
                </a>
              </div>
              <div className="col">
                <a href="/">
                  <img src="https://povo-site.netlify.app/pcs.png" alt="" width="160" />
                </a>
              </div>
              <div className="col">
                <a href="/">
                  <img src="https://povo-site.netlify.app/xt.png" alt="" width="160" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="finance py-4">
          <div className="row">
            <div className="col-md-6 col-12 d-flex justify-content-center">
              <a href="/">
                <img src="https://povo-site.netlify.app/yahoo.png" className="img-fluid" alt="" width={310} />
              </a>
            </div>
            <div className="col-md-6 col-12 d-flex justify-content-center">
              <a href="/">
                <img src="https://povo-site.netlify.app/benzinga.png" className="img-fluid" alt="" width={310} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
