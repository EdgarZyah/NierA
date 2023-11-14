import React from 'react';

const Profile = () => {
    const backgroundGameImageUrl = 'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/07/27/best-jrpgs-nier-automata-1024x576.jpg';

    const hero1 = {
        backgroundImage: `url(${backgroundGameImageUrl})`,
    };

    return (
        <div style={hero1} className="bg-cover bg-center h-min items-center justify-center text-white">
            <div className="relative top-0 m-auto w-full h-min flex flex-col items-center justify-center filter-none">
                <div className="">
                    <img className="opacity-90 w-[700px] h-min" src="https://nierautomata.square-enix-games.com/img/story_box-min.png" alt="card" />
                </div>
                <div className="absolute ">
                    <img className="w-24 h-auto" src="https://cdnb.artstation.com/p/assets/images/images/005/149/991/large/lat-te-waifu-again-3-3-by-hananueaoko-db19fio.jpg?1488849741" alt="overlay" />
                    <p>Nama : Edgar Sholem Syahdony
                        <br></br>
                        NIM : 2203040092
                        <br></br>
                        Kelas : Pemrograman A1
                        <br></br>
                        
                        <br></br>
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Profile;
