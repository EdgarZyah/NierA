import React, { useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomDots = ({ images, activeIndex, onClick }) => {
    return (
        <div className="custom-dots-container flex items-center justify-center mt-4">
            {images.map((_, index) => (
                <div key={index} className={`custom-dot mx-2 ${index === activeIndex ? 'active-dot' : ''}`} onClick={() => onClick(index)}>
                    <img src={images[index]} alt={`dot-${index}`} className="w-36 h-16 object-cover" />
                </div>
            ))}
        </div>
    );
};

const Gameplay = () => {
    const images = [
        'https://cdn.akamai.steamstatic.com/steam/apps/524220/extras/Nier_PRE_Launch-ENG_UK_Multi_06_Mod.jpg?t=1696405478',
        'https://imgur.com/sIP72Ac.gif',
        'https://cdn.shortpixel.ai/spai/q_glossy+ret_img+to_auto/www.slantmagazine.com/wp-content/uploads/2017/03/nierautomata.jpg',
        'https://cdn.akamai.steamstatic.com/steam/apps/524220/ss_2c265df38c3d2d393d74ee8e74d79bdafa16b143.1920x1080.jpg?t=1696405478',
        'https://cdn.akamai.steamstatic.com/steam/apps/524220/ss_b55c67ac11781513183391c18ea86819e047577d.1920x1080.jpg?t=1696405478',
        'https://cdn.akamai.steamstatic.com/steam/apps/524220/ss_edcb7633ff42d7200bcb240a1ebb1116d602d9fe.1920x1080.jpg?t=1696405478',
        'https://cdn.akamai.steamstatic.com/steam/apps/524220/ss_02d2f3f2b7b7add8e6ad50d6b9325d05fa1d7bc7.1920x1080.jpg?t=1696405478',
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleDotClick = (index) => {
        setActiveIndex(index);
        sliderRef.current.slickGoTo(index);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: false,
    };

    const sliderRef = React.useRef();

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className="bg-NieRbg w-full h-screen p-5 flex flex-wrap justify-center items-center">
            <div className="w-96 md:w-full bg-black h-min m-auto p-5 items-center justify-center">
                <div className="w-full relative">
                    <Slider {...settings} ref={sliderRef} beforeChange={(current, next) => setActiveIndex(next)}>
                        {images.map((image, index) => (
                            <div key={index} className="relative">
                                <button
                                    onClick={handlePrev}
                                    type="button"
                                    className="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none left-0"
                                    data-carousel-prev
                                >
                                    <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 group-hove group-focus:outline-none">
                                        <svg
                                            className="w-4 h-4 text-white rtl:rotate-180"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 6 10"
                                        >
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                        </svg>
                                        <span className="sr-only">Previous</span>
                                    </span>
                                </button>

                                <button
                                    onClick={handleNext}
                                    type="button"
                                    className="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none right-0"
                                    data-carousel-next
                                >
                                    <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 group-hover:bg-white/50 group-focus:outline-none">
                                        <svg
                                            className="w-4 h-4 text-white rtl:rotate-180"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 6 10"
                                        >
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <span className="sr-only">Next</span>
                                    </span>
                                </button>
                                <img src={image} alt={`slide-${index + 1}`} className="m-auto w-full h-96 object-cover" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <CustomDots images={images} activeIndex={activeIndex} onClick={handleDotClick} />
            </div>
        </div>
    );
};

export default Gameplay;
