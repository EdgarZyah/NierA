import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
const Characters = () => {


  const scrollTo2B = () => {
    const targetElement = document.getElementById('character-section-3b');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <>
      <Swiper

        pagination={Pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide id="character-swiper-1-2b">
          <div id="character-section" class="bg-NieRbg w-full h-min">
            <div id="character-content" class="flex flex-wrap justify-center py-10 px-40 space-y-5">
              <h2 class="text-2xl w-full h-min text-center py-10">Characters</h2>
              <div id="character" class="w-max h-min flex justify-center space-x-8">
                <div class="flex flex-wrap space-y-5">
                  <h1 id="character-name" class="text-2xl">2B</h1>
                  <p id="character-desc" class="w-">
                    YoRHa No.2 Type-B, generally known simply as 2B,
                    <br></br>
                    <p>
                      She is a female android created by an organization known as YoRHa who was sent to earth to fight against the robotic lifeforms known as the Machines who have invaded Earth and drove humanity off of the planet.
                    </p>
                    She is assigned with her partner known as 9S, who assists her in various missions given by the YoRHa Commander or anyone they seek to help.
                  </p>
                  <button onClick={scrollTo2B}>
                    <img src="https://cdn.super-groupies.com/images/feature/nier_02_boots/img/2b_introvis_DY9AzhOJZuzK.png"
                    class="w-24 h-min"></img>
                  </button>
                </div>
                
                <img id="character-image" class="w-1/2 "
                  src="https://upload.wikimedia.org/wikipedia/id/7/77/2B_Nier_Automata.png"></img>
                  
              </div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="character-swiper-1">
          <div id="character-section-2b" class="bg-NieRbg w-full h-min">
            <div id="character-content" class="flex flex-wrap justify-center py-10 px-40 space-y-5">
              <h2 class="text-2xl w-full h-min text-center py-10">Characters</h2>
              <div id="character" class="w-max h-min flex justify-center space-x-8">
                <div class="flex flex-wrap space-y-5">
                  <h1 id="character-name" class="text-2xl">2B</h1>
                  <p id="character-desc" class="w-">
                    YoRHa No.2 Type-B, generally known simply as 2B,
                    <br></br>
                    <p>
                      She is a female android created by an organization known as YoRHa who was sent to earth to fight against the robotic lifeforms known as the Machines who have invaded Earth and drove humanity off of the planet.
                    </p>
                    She is assigned with her partner known as 9S, who assists her in various missions given by the YoRHa Commander or anyone they seek to help.
                  </p>
                </div>
                <img id="character-image" class="w-1/2 "
                  src="https://upload.wikimedia.org/wikipedia/id/7/77/2B_Nier_Automata.png"></img>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="character-swiper-1">
          <div id="character-section-3b" class="bg-NieRbg w-full h-min">
            <div id="character-content" class="flex flex-wrap justify-center py-10 px-40 space-y-5">
              <h2 class="text-2xl w-full h-min text-center py-10">Characters</h2>
              <div id="character" class="w-max h-min flex justify-center space-x-8">
                <div class="flex flex-wrap space-y-5">
                  <h1 id="character-name" class="text-2xl">2B</h1>
                  <p id="character-desc" class="w-">
                    YoRHa No.2 Type-B, generally known simply as 2B,
                    <br></br>
                    <p>
                      She is a female android created by an organization known as YoRHa who was sent to earth to fight against the robotic lifeforms known as the Machines who have invaded Earth and drove humanity off of the planet.
                    </p>
                    She is assigned with her partner known as 9S, who assists her in various missions given by the YoRHa Commander or anyone they seek to help.
                  </p>
                </div>
                <img id="character-image" class="w-1/2 "
                  src="https://upload.wikimedia.org/wikipedia/id/7/77/2B_Nier_Automata.png"></img>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Characters;