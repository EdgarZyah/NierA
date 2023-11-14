import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Characters from './characters';
import Game from './game';
import Gameplay from './gameplay';
import LandingPage from './landingPage';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import the Swiper bundle CSS
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Mousewheel, Pagination } from "swiper/modules";
import World from './world';

const Home = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 740);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 740);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function smoothScrollTo(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    if (isMobile) {
        // Render content for mobile devices without Swiper
        return (
            <div className="transition-all">
                <header id="header" className="absolute inset-x-0 top-0 z-50">
                    <Navbar />
                </header>
                <section id="Landingpage" className="w-full flex items-center justify-center">
                    <LandingPage />
                </section>
                <section id="gamepage" className="w-full">
                    <Game />
                </section>
                <section id="world" className="w-full">
                    <World />
                </section>
                <section id="characters" className="w-full">
                    <Characters />
                </section>
                <section id="gameplay" className="bg-black h-screen w-full">
                    <Gameplay />
                </section>
                <Footer />
            </div>
        );
    }

    // Render Swiper for larger screens
    return (
        <div className="transition-all">
            <Swiper
                autoHeight={true}
                pagination={{
                    clickable: true,
                }}
                direction={'vertical'}
                mousewheel={{ forceToAxis: true }}
                modules={[Pagination, Mousewheel]}
                className={'mySwiper hidden md:block'}
                style={{ height: '100vh' }}
            >
                <SwiperSlide>
                    <header id="header" className="absolute inset-x-0 top-0 z-50">
                        <Navbar />
                    </header>
                    <section id="Landingpage" className="w-full flex items-center justify-center">
                        <LandingPage />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section id="gamepage" className="w-full">
                        <Game />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section id="world" className="w-full">
                        <World />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section id="characters" className="w-full">
                        <Characters />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section id="gameplay" className="bg-black h-screen w-full">
                        <Gameplay />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <Footer />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Home;
