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
    const targetElement = document.getElementById('character-section-2B');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollTo9S = () => {
    const targetElement = document.getElementById('character-section-9S');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToA2 = () => {
    const targetElement = document.getElementById('character-section-A2');
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
        noSwiping={true}
        noSwipingClass="swiper-no-swiping"
        className="mySwiper"
      >
        <SwiperSlide id="character-swiper-2B w-full h-screen">
          <div id="character-section-2B" class="bg-NieRbg w-full h-[1280px] md:h-screen">
            <div id="character-content-2B" class="w-full h-full flex flex-wrap justify-center py-5 px-10 md:px-20 space-y-5">
              <img id="character-banner" class="w-9/12 md:w-4/12 h-min p-2 rounded-sm"
                src="https://drive.google.com/uc?export=download&id=1qNZ3gQ5LZOWJGkg5CcstN_N6PKdCLmGn" />
              <div id="character" class="w-full h-min flex justify-center space-x-2">
                <div class="w-full h-full flex flex-wrap space-y-2">
                  <img id="character-image-2B" class="block md:hidden w-6/7 md:w-5/12 h-min "
                    src="https://drive.google.com/uc?export=download&id=10aneewSgeDWFyJLJ94tvMXfJh6uLK0Jh" />
                  <img id="character-name-2B" class="w-11/12 md:w-7/12 h-min p-2 rounded-sm"
                    src="https://drive.google.com/uc?export=download&id=1usORLsEaHvO65so3uW3--uxQulEbCxMQ" />
                  <div class="flex flex-wrap space-y-1">
                    <img id="flowers-for-m[A]chines" class="w-6/12 md:w-3/12 h-min"
                      src="https://drive.google.com/uc?export=download&id=1sNYQ6aRs6BWCkuTxrQeyjIHVjRuhrj2t" />
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;She is a YoRHa android created to battle the machine lifeforms that have invaded the planet on behalf of the surviving humans. She served during the 14th Machine War.
                    </p>
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;2B is an all-purpose battle android, deployed as a member of the automated YoRHa infantry. She is equipped with a multitude of weapons for close quarters combat and can attack from range using the Pod support system.
                    </p>
                  </div>
                  <div class="flex flex-row space-y-1">
                    <button onClick={scrollTo2B}>
                      <img src="https://drive.google.com/uc?export=download&id=1JXLsucGso-8PHSE2eD0DHZzhiwgzAmvG"
                        class="w-20 md:w-28 h-min brightness-50"></img>
                    </button>
                    <button onClick={scrollTo9S}>
                      <img src="https://drive.google.com/uc?export=download&id=1JYl2hKukOKroM30105yU-Ucqgm7xdHa5"
                        class="w-20 md:w-28 h-min hover:brightness-50"></img>
                    </button>
                    <button onClick={scrollToA2}>
                      <img src="https://drive.google.com/uc?export=download&id=1JT5ngBKx0ntmr7lziSK5aff2tsu-6APt"
                        class="w-20 md:w-28 h-min hover:brightness-50"></img>
                    </button>
                  </div>
                </div>
                <img id="character-image-2B" class="hidden sm:block w-4/12 h-full"
                  src="https://drive.google.com/uc?export=download&id=10aneewSgeDWFyJLJ94tvMXfJh6uLK0Jh" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="character-swiper-9S w-full h-screen">
          <div id="character-section-9S" class="bg-NieRbg w-full   h-[1280px] md:h-screen">
            <div id="character-content-9S" class="w-full h-full flex flex-wrap justify-center py-5 px-10 md:px-20 space-y-5">
              <img id="character-banner" class="w-9/12 md:w-4/12 h-min p-2 rounded-sm"
                src="https://drive.google.com/uc?export=download&id=1qNZ3gQ5LZOWJGkg5CcstN_N6PKdCLmGn" />
              <div id="character" class="w-full h-min flex justify-center space-x-2">
                <div class="w-full h-full flex flex-wrap space-y-2">
                  <img id="character-image-9S" class="block md:hidden w-6/7 md:w-5/12 h-min "
                    src="https://drive.google.com/uc?export=download&id=1UFFSLiA_uM5uSk_xOG_d5QnQ855OJX37" />
                  <img id="character-name-9S" class="w-11/12 md:w-7/12 h-min p-2 rounded-sm"
                    src="https://drive.google.com/uc?export=download&id=1rMKG_zk6_kQHr6NkPM8IHgf0xEWgsmHj" />
                  <div class="flex flex-wrap space-y-1">
                    <img id="Childhood-end" class="w-6/12 md:w-3/12 h-min"
                      src="https://drive.google.com/uc?export=download&id=1NBLfbRGOSlw0B-WPPRDzQtZ1DlFWP46b" />
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;He is the main character of Branches B and D, as well as one of the main antagonists and final boss of Branch C.
                    </p>
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;9S is a scanner-type android who served during the 14th Machine War. He has an attack function, but is overall an investigative android—a member of the YoRHa automated infantry unit, which excels in hacking intelligence gathering.
                    </p>
                  </div>
                  <div class="flex flex-row space-y-1">
                    <button onClick={scrollTo2B}>
                      <img src="https://drive.google.com/uc?export=download&id=1JXLsucGso-8PHSE2eD0DHZzhiwgzAmvG"
                        class="w-20 md:w-28 h-min hover:brightness-50"></img>
                    </button>
                    <button onClick={scrollTo9S}>
                      <img src="https://drive.google.com/uc?export=download&id=1JYl2hKukOKroM30105yU-Ucqgm7xdHa5"
                        class="w-20 md:w-28 h-min brightness-50"></img>
                    </button>
                    <button onClick={scrollToA2}>
                      <img src="https://drive.google.com/uc?export=download&id=1JT5ngBKx0ntmr7lziSK5aff2tsu-6APt"
                        class="w-20 md:w-28 h-min hover:brightness-50"></img>
                    </button>
                  </div>
                </div>
                <img id="character-image-9S" class="hidden sm:block w-4/12 h-min mb-5"
                  src="https://drive.google.com/uc?export=download&id=1UFFSLiA_uM5uSk_xOG_d5QnQ855OJX37" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="character-swiper-A2 w-full h-screen">
          <div id="character-section-A2" class="bg-NieRbg w-full  h-[1280px] md:h-screen">
            <div id="character-content-A2" class="w-full h-full flex flex-wrap justify-center py-5 px-10 md:px-20 space-y-5">
              <img id="character-banner" class="w-9/12 md:w-4/12 h-min p-2 rounded-sm"
                src="https://drive.google.com/uc?export=download&id=1qNZ3gQ5LZOWJGkg5CcstN_N6PKdCLmGn" />
              <div id="character" class="w-full h-min flex justify-center space-x-2">
                <div class="w-full h-full flex flex-wrap space-y-2">
                  <img id="character-image-A2" class="block md:hidden w-6/7 md:w-5/12 h-min "
                    src="https://drive.google.com/uc?export=download&id=1IiWM4uBLvy6QCpCFVZcQk0FwEyXFV4EV" />
                  <img id="character-name-A2" class="w-11/12 md:w-7/12 h-min p-2 rounded-sm"
                    src="https://drive.google.com/uc?export=download&id=1HZvabqf_N6MyjWAV4qhEJ0fk0c9QkIK0" />
                  <div class="flex flex-wrap space-y-1">
                    <img id="Meaningless-code" class="w-6/12 md:w-3/12 h-min"
                      src="https://drive.google.com/uc?export=download&id=12F5XNfo8RynZZjkcztS8o0u8-pOp9itA" />
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;She is a prototype of the YoRHa android line, and combat data from her and her comrades were used to create the superior current lines, including YoRHa No.2 Type B and YoRHa No.9 Type S. She doesn't like to speak and often keeps to herself.
                    </p>
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;Three years prior to the events of NieR:Automata, she was a member of the first YoRHa squadron deployed to Earth as part of the Pearl Harbor Descent during the early years of the 14th Machine War. Her alias at the time was No2 which is parsed in Automata as "Number Two".
                    </p>
                  </div>
                  <div class="flex flex-row space-y-1">
                    <button onClick={scrollTo2B}>
                      <img src="https://drive.google.com/uc?export=download&id=1JXLsucGso-8PHSE2eD0DHZzhiwgzAmvG"
                        class="w-20 md:w-28 h-min hover:brightness-50"></img>
                    </button>
                    <button onClick={scrollTo9S}>
                      <img src="https://drive.google.com/uc?export=download&id=1JYl2hKukOKroM30105yU-Ucqgm7xdHa5"
                        class="w-20 md:w-28 h-min hover:brightness-50"></img>
                    </button>
                    <button onClick={scrollToA2}>
                      <img src="https://drive.google.com/uc?export=download&id=1JT5ngBKx0ntmr7lziSK5aff2tsu-6APt"
                        class="w-20 md:w-28 h-min brightness-50"></img>
                    </button>
                  </div>
                </div>
                <img id="character-image-A2" class="hidden sm:block w-4/12 h-full"
                  src="https://drive.google.com/uc?export=download&id=1IiWM4uBLvy6QCpCFVZcQk0FwEyXFV4EV" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Characters;