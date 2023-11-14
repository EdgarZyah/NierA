import React from 'react';

const Game = () => {
    const backgroundGameImageUrl = 'https://nierautomata.square-enix-games.com/img/nier-automata-game-of-the-yorha-edition-key-art.jpg';

    const hero1 = {
        backgroundImage: `url(${backgroundGameImageUrl})`,
    };

    return (
       <div style={hero1} className="bg-cover bg-center h-screen items-center justify-center text-white">
            <div class="relative top-0 m-auto w-full h-full flex flex-col items-center justify-center filter-none">
                <div class="flex inset-0">
                    <div class="relative">
                        <img class="opacity-70 w-[600px] h-min" src="https://nierautomata.square-enix-games.com/img/story_box-min.png" alt="Story Box" />
                        <div class="flex-row  h-min w-min">
                            <p class="m-auto p-20 absolute top-0 left-0 text-xs text-white font-medium">
                                "Everything that lives is designed to end"
                                <br></br>
                                <br></br>
                                "We are perpetually trapped in a never-ending spiral of life and death. Is this a curse? Or some kind of punishment? I often think about the god who blessed us with this cryptic puzzle...and wonder if we'll ever get the chance to kill him."
                                <br></br>
                                <br></br>
                                The distant future…
                                <br></br>
                                Invaders from another world attack without warning, unleashing a new type of threat: weapons known as “machine lifeforms.” In the face of this insurmountable threat, mankind is driven from Earth and takes refuge on the Moon.
                                <br></br>
                                The Council of Humanity organizes a resistance of android soldiers in an effort to take back their planet. To break the deadlock, the Resistance deploys a new unit of android infantry: YoRHa .
                                <br></br>
                                In the forsaken wasteland below, the war between the machines and the androids rages on. A war that is soon to unveil the long-forgotten truth of this world...
                                <br /><br />
                                NieR:Automata is an action role-playing game (RPG) produced by SQUARE ENIX and developed by PlatinumGames.
                                <br /><br />
                                The story sets in a world where humanity has been driven from the Earth by mechanical beings from another world in a distant future. Players will take on the role of 2B who belongs to the new unit of android infantry known as YoRHa in a final effort to take back the planet.
                                This is not your ordinary entertainment. It is a fresh take on the action role-playing game with a smooth 60fps open world that gracefully blends with a captivating story.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;
