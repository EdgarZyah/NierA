import React from 'react';

const World = () => {
    const backgroundGameImageUrl = 'https://drive.google.com/uc?export=download&id=1Le_g1s-KB8yapnpfjF6c0vDx_7rZyare';

    const hero1 = {
        backgroundImage: `url(${backgroundGameImageUrl})`,
    };

    return (
       <div style={hero1} className="bg-cover bg-center h-screen items-center justify-center text-white">
            <div class="relative top-0 m-auto w-full h-full flex flex-col items-center justify-center filter-none">
                <div class="flex inset-0">
                    <div class="relative">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default World;
