import CheckCV from "../checkCV/CheckCV";

const Hero: React.FC = () => {
    
  return (
    <div className="bg-linear-to-b from-gray-900 from-90% text-gray-400">
      <div className="container mx-auto p-4 md:flex items-center justify-center py-26">
        <div className="mx-auto p-4 text-center md:w-1/2">
          <h2 className="text-4xl mb-6">Le Développement Web</h2>
          <p className="text-2xl">
            Avec une forte appétence pour la conception d’applications modernes et performantes. 
            J’apprécie particulièrement le travail sur des architectures robustes et scalables, 
            que ce soit en front-end avec Next.js ou en back-end avec Spring Boot. Toujours en quête de nouvelles compétences, 
            j’aime explorer les bonnes pratiques du développement et optimiser chaque projet pour offrir la meilleure expérience utilisateur possible.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col items-center justify-center"> 
          <CheckCV />
        </div>
      </div>
    </div>
  );
};

export default Hero