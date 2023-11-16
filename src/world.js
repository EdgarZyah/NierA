import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const World = () => {

    const images = [
        'https://www.platinumgames.com/wp-content/uploads/2016/03/NieR-Automata_201606_ART_Desert_ONLINE.jpg',
        'https://www.platinumgames.com/wp-content/uploads/2016/03/NieR_2015PGW_art_02-680x374-680x374.jpg',
        'https://www.platinumgames.com/wp-content/uploads/2016/03/NieR_2015PGW_art_01-680x251-680x251.jpg',
        'https://www.platinumgames.com/wp-content/uploads/2016/03/Desert_02.jpg',
        'https://www.platinumgames.com/wp-content/uploads/2016/03/NieR-Automata_201606_ART_RuinedCity_ONLINE.jpg',
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
        <div className="bg-cover bg-center h-full items-center justify-center brightness-75">
            <img class="block sm:hidden w-full h-screen "
                src="https://i.pinimg.com/736x/dc/9d/b8/dc9db8f8aacae08ec41ac15d2578e972.jpg"
                alt="mobile-world-bg"></img>
            <img class="hidden sm:block w-full h-full "
                src="https://drive.google.com/uc?export=view&id=1Le_g1s-KB8yapnpfjF6c0vDx_7rZyare"
                alt="dekstop-world-bg"></img>
            <div>
                <div class="absolute top-0 w-full h-full flex-wrap  items-center justify-center">
                    <img
                        src="https://drive.google.com/uc?export=view&id=11t_rzfGz-EPVLoZ5EeKU4NP8hQSW6QzO"
                        class="w-full h-240 rotate-180 opacity-75 absolute"
                        alt="black-splash-fire" />
                    <div className="relative w-full h-min m-auto absolute items-center justify-center brightness-90">
                        <img
                            src="https://drive.google.com/uc?export=view&id=1J36DcwsjPgayuKIXFve6z66alqaGFq3v"
                            class="w-60 sm:w-1/2 h-min items-center justify-center m-auto py-10 brightness-110"
                            alt="the-world">
                        </img>
                    </div>
                    <div class="w-10/12 h-full m-auto bg-white p-1 items-center justify-center">

                        <Slider {...settings} ref={sliderRef}>
                            {images.map((image, index) => (
                                <div key={index} className="relative">
                                    <button
                                        onClick={handlePrev}
                                        type="button"
                                        className="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none left-0"
                                        data-carousel-prev
                                    >
                                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:outline-none">
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
                                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:outline-none">
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
                </div>
            </div>
            <div class="relative m-auto w-full h-full top-0 items-center justify-center">
            </div>
        </div>
    );
};

export default World;
