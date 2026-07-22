import { useEffect, useRef, useState } from "react";
import { FaMusic, FaVolumeMute } from "react-icons/fa";

export default function SoundToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("/music/Mental Manadhil.mp3");

    audioRef.current.loop = true;
    audioRef.current.volume = 0.35;
    audioRef.current.preload = "auto";

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  async function toggleMusic() {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (err) {
        console.error(err);
      }
    }
  }

  return (
    <button
      onClick={toggleMusic}
      aria-label="Toggle Music"
      className="fixed top-4 right-4 z-50 h-11 w-11 rounded-full glass flex items-center justify-center text-gold hover:scale-110 transition-all duration-300"
    >
      {playing ? <FaMusic size={15} /> : <FaVolumeMute size={15} />}
    </button>
  );
}