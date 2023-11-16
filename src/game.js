import React from 'react';

const World = () => {
    const backgroundGameImageUrl = 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_NierAutomataTheEndOfYorhaEdition_image1600w.jpg';
    const backgroundGameImageUrl2 = 'https://i.pinimg.com/736x/5b/3f/18/5b3f1808986267f34ee6b63ab5d79b10.jpg';
    const hero1 = {
        backgroundImage: `url(${backgroundGameImageUrl})`,
        backgroundSize: '100% 100%',
        filter: 'brightness(50%)' // Tambahkan tanda kutip dan titik koma
    };
    const hero2 = {
        backgroundImage: `url(${backgroundGameImageUrl2})`,
        backgroundSize: '100% 100%',
        filter: 'brightness(50%)' // Tambahkan tanda kutip dan titik koma
    };

    return (
        <div className="bg-cover bg-center h-screen items-center justify-center brightness-90">
            <img class="block absolute md:hidden w-full h-screen "
                src="https://i.pinimg.com/736x/5b/3f/18/5b3f1808986267f34ee6b63ab5d79b10.jpg"></img>
            <img class="hidden md:block w-full h-screen "
                src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_NierAutomataTheEndOfYorhaEdition_image1600w.jpg"></img>
            <div class="w-full h-screen">
                <img src="https://nierautomata.square-enix-games.com/img/story_box-min.png"
                    class=" absolute top-0 opacity-80 w-full md:w-2/3 h-screen px-10" />
                <div class="w-full h-screen">
                    <p class=" absolute top-0 w-full pl-28 pr-28 md:pl-32 md:pr-0 pt-28 md:w-1/2 m-auto text-xs sm:text-base text-white">The distant future…
                        <br></br><br></br>
                        Invaders from another world attack without warning, unleashing a new type of threat: weapons known as “machine lifeforms.” In the face of this insurmountable threat, mankind is driven from Earth and takes refuge on the Moon.
                        <br></br><br></br>
                        The Council of Humanity organizes a resistance of android soldiers in an effort to take back their planet. To break the deadlock, the Resistance deploys a new unit of android infantry: YoRHa .
                        <br></br><br></br>
                        In the forsaken wasteland below, the war between the machines and the androids rages on. A war that is soon to unveil the long-forgotten truth of this world...
                    </p>
                </div>
            </div>
            <div class="relative m-auto w-full h-full top-0 items-center justify-center">
                <div class="absolute">

                </div>
            </div>
        </div>
    );
};

export default World;
