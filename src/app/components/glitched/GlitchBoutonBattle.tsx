"use client";

import { useGlitch } from "@/app/contexts/GlitchContext";


const GlitchButtonBattle = () => {
  const { isGlitched, startBattle } = useGlitch();

  if (!isGlitched) return null; 

  return (
    <button
      onClick={startBattle}
      className="fixed md:bottom-5 bottom-12 md:right-5 px-6 py-3 bg-gray-300 border-4 border-black 
                 text-black pokemon-font shadow-lg hover:bg-gray-400 transition-all
                 pixelated animate-pulse cursor-pointer"
    >
      Un bug sauvage apparaît !
    </button>
  );
};

export default GlitchButtonBattle;
