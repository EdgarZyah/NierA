import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const Gameplay = () => {

    return (
        <>
            <Swiper
                pagination={Pagination}
                modules={[Pagination]}
                autoplay={{ delay: 3000 }}
                className="mySwiper">
                <SwiperSlide>
                    <div className="bg-NieRbg w-full h-screen flex flex-wrap justify-center px-20 items-center">
                        <div className="w-full h-3/4 bg-NieR flex flex-row items-center rounded-xl">
                            <Swiper
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img
                                        className="object-fill w-full h-96"
                                        src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                                        alt="image slide 1"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="object-fill w-full h-96"
                                        src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
                                        alt="image slide 2"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="object-fill w-full h-96"
                                        src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
                                        alt="image slide 3"
                                    />
                                </SwiperSlide>
                            </Swiper>
                            <div className="w-full h-full bg-white flex flex-wrap rounded-xl">
                                <p>123123</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper >
        </>
    );
}
export default Gameplay;