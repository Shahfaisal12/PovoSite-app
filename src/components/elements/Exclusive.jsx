import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const Exclusive = () => {

    return (
        <div className="Exclusive">
            <div className="container">
                <div className="row">
                    <h1 className='text-center'>Povo <span style={{ color: 'rgb(255, 255, 255)' }}> Exclusive NFT's </span></h1>
                </div>
                <div className="row">

                    <Carousel
                    arrows={false}
                        swipeable={false}
                        draggable={true}
                        // showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={false}
                        customTransition="all 2"
                        transitionDuration={4000}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        // deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        <div className="m-2">
                            <img
                                src="https://povo-site.netlify.app/static/media/NFT31.3c9c259c.png"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="mt-3 text-center carousel_btn">
                                <button className='btn btn-danger btn-lg px-5'>Buy</button>
                            </div>
                        </div>
                        <div className="m-2" >
                            <img
                                src="https://povo-site.netlify.app/static/media/NFT4.4a793bce.png"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="mt-3 text-center carousel_btn">
                                <button className='btn btn-danger btn-lg px-5'>Buy</button>
                            </div>
                        </div>
                        <div className="m-2">
                            <img
                                src="https://povo-site.netlify.app/static/media/NFT4.4a793bce.png"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="mt-3 text-center carousel_btn">
                                <button className='btn btn-danger btn-lg px-5'>Buy</button>
                            </div>
                        </div>
                        <div className="m-2">
                            <img
                                src="	https://povo-site.netlify.app/static/media/NFT5.8d080857.png"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="mt-3 text-center carousel_btn">
                                <button className='btn btn-danger btn-lg px-5'>Buy</button>
                            </div>
                        </div>
                        <div className="m-2">
                            <img
                                src="https://povo-site.netlify.app/static/media/NFT6.e01e2af9.png"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="mt-3 text-center carousel_btn">
                                <button className='btn btn-danger btn-lg px-5'>Buy</button>
                            </div>
                        </div>
                        <div className="m-2">
                            <img
                                src="	https://povo-site.netlify.app/static/media/NFT1.d7c5ef8c.png"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="mt-3 text-center carousel_btn">
                                <button className='btn btn-danger btn-lg px-5'>Buy</button>
                            </div>
                        </div>
                        <div className="m-2">
                            <img
                                src="https://povo-site.netlify.app/static/media/NFT5.8d080857.png"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="mt-3 text-center carousel_btn">
                                <button className='btn btn-danger btn-lg px-5'>Buy</button>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>

    )
}

export default Exclusive