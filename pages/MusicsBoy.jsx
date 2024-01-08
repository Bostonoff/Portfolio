import { useState, useRef, useEffect } from "react";
import Musica from "../public/projects/music.mp3";

const MusicPlayer = () => {
  const audioPlayer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioPlayer.current.paused) {
      audioPlayer.current.play();
      setIsPlaying(true);
    } else {
      audioPlayer.current.pause();
      setIsPlaying(false);
    } 
  };

  const handleEnded = () => {
    audioPlayer.current.currentTime = 0;
    audioPlayer.current.play();
  };

  useEffect(() => {
    // Автоматически запускаем воспроизведение при загрузке компонента

    audioPlayer.current.play();
    setIsPlaying(true);
  }, []);

  return (
    <div>
      <audio ref={audioPlayer} onEnded={handleEnded}>
        <source src={Musica} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default MusicPlayer;
