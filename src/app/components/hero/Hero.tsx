"use client";

import { useState } from "react";
import CheckCV from "../checkCV/CheckCV";
import InteractiveStory from "../interactive-story/InteractiveStory";
import game from "@/app/data/game.json";
import GlitchedParagraph from "../glitched/glitched-paragraphe/GlitchedParagraphe";
import GlitchedSubTitle from "../glitched/glitched-subtitle/GlitchedSubtitle";

interface HeroProps {
    id: string;
}

const Hero: React.FC<HeroProps> = ({id}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
    
  return (
    <div className="bg-linear-to-b from-gray-900 from-90% text-gray-400 min-h-screen flex flex-col justify-center" id={id}>
      <label className="text-gray-100 flex items-center justify-center py-10">
        <input
          type="checkbox"
          checked={isVisible}
          onChange={() => setIsVisible(!isVisible)}
          className="mr-2 hover:cursor-pointer w-5 h-5 rounded-4xl"
        />
        Voir directement mon CV
      </label>
      {
        isVisible ?
          <div className="container mx-auto px-12 md:flex items-center justify-center py-26">
            <div className="mx-auto p-4 text-center md:w-1/2">
              <GlitchedSubTitle className="text-3xl mb-6">Le Développement Web</GlitchedSubTitle>
              <GlitchedParagraph className="md:text-xl">
                Avec une forte appétence pour la conception d’applications modernes et performantes. 
                J’apprécie particulièrement le travail sur des architectures robustes et scalables, 
                que ce soit en front-end avec Next.js ou en back-end avec Spring Boot. Toujours en quête de nouvelles compétences, 
                j’aime explorer les bonnes pratiques du développement et optimiser chaque projet pour offrir la meilleure expérience utilisateur possible.
              </GlitchedParagraph>
            </div>
            <div className="md:w-1/2 flex flex-col items-center justify-center"> 
              <CheckCV />
            </div>
          </div>
          :
          <InteractiveStory storyData={game} finalStep={setIsVisible}/>
      }
    </div>
  );
};

export default Hero