import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

const LandingPage = () => {
    Modal.setAppElement('#root');
    useEffect(() => {
        const preventZoom = (e) => {
            if (e.ctrlKey) {
                e.preventDefault();
            }
        };

        document.addEventListener('wheel', preventZoom, { passive: false });

        return () => {
            document.removeEventListener('wheel', preventZoom);
        };
    }, []);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div id="" style={{ userScalable: 'no' }} class="w-full flex-row h-max bg-white ">
            {/* Navbar */}
            {/* Main Content */}
            <section id="landingPage" class="bg-white w-full flex items-center justify-center">
                <div class="container flex w-full h-min flex relative">
                    <div class="w-full relative m-auto">
                        <audio autoPlay={true} loop={true} preload={false} className="w-full h-full object-cover">
                            <source
                                src="https://drive.google.com/uc?export=download&id=1FC52tF0JXBsSwCqPJc0Uf2Xvgb9OArOw"
                                type="audio/wav"
                            />
                        </audio>
                        <video
                            class="hidden md:block justify-center sm:w-screen h-min object-cover" autoPlay muted loop playsInline>
                            <source
                                src="https://drive.google.com/uc?export=download&id=1sNh1l6mDAAsG2F-BKBJwDOtqANr5ufAy"
                                type="video/mp4"
                            />
                        </video>
                        <img class="md:hidden w-full h-80" src="https://hd.wallpaperswide.com/thumbs/nier_automata_2b-t2.jpg"></img>
                        <div class="absolute top-0 mt-8 md:mt-28 m-auto w-full h-full flex flex-col items-center justify-center">
                            <div class="absolute top-0 m-auto w-full h-full flex flex-col items-center justify-center">
                                <button id="button-play-yt" onClick={openModal} class="flex items-center justify-center ">
                                    <img class="animate-spin-slow grayscale absolute w-14 md:w-40 h-auto" src="https://drive.google.com/uc?export=view&id=1fiueiJ3QMjF_V8ySzW5qAF-XP7ARo6h7"></img>
                                    <img
                                        src="https://drive.google.com/uc?export=view&id=1Jjfa2F4vnZo0XMCtok-gpR-eFsAMvbwF"
                                        class="w-10 md:w-24 h-auto opacity-70 hover:opacity-100"
                                        alt="Play Icon"
                                    />
                                </button>
                                <br></br>
                                <img
                                    src="https://drive.google.com/uc?export=view&id=18KtuitIcNHV0uJeNO-U54QUGBmLKqaYf"
                                    class="w-1/4 md:w-1/3 h-auto"
                                    alt="Nier Icon"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Modal isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="YouTube Video Modal"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999 // Ensure the modal is on top of all elements
                    },
                    content: {
                        background: 'black',
                        width: '80%',
                        height: '80%',
                        position: '',
                    }
                }}
            >
                <iframe class="w-full h-full "
                    src="https://www.youtube.com/embed/tVMOJVDGNCQ?si=3dYebSye6lG7HKQr"
                    title="YouTube Video"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </Modal>
        </div>
    );
};

export default LandingPage;
