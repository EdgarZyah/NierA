import React, { useState, useRef } from 'react';

const App = () => {
  const [isPlayingBgm, setIsPlayingBgm] = useState(false);
  const audioRef = useRef(null);

  const handleVolumeToggleOn = () => {
    setIsPlayingBgm(true);
    audioRef.current.volume = 1;
    audioRef.current.play();
  };
  

  const handleVolumeToggleOff = () => {
    setIsPlayingBgm(false);
    const volumeAnimation = setInterval(() => {
      if (audioRef.current.volume > 0) {
        audioRef.current.volume -= 0.01;
      } else {
        clearInterval(volumeAnimation);
        audioRef.current.pause();
      }
    }, 30);
  };

  return (
    <div>
      <button
        id="btn-volume-toggle-on"
        onClick={handleVolumeToggleOn}
        className={`show ${isPlayingBgm ? 'hidden' : ''}`}
      >
        Volume On
      </button>
      <button
        id="btn-volume-toggle-off"
        onClick={handleVolumeToggleOff}
        className={`show ${isPlayingBgm ? '' : 'hidden'}`}
      >
        Volume Off
      </button>
      <audio ref={audioRef} id="bgm00">
        <source src="your-audio-source.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default App;
