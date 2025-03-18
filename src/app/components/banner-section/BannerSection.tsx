import GlitchedParagraph from "../glitched/glitched-paragraphe/GlitchedParagraphe";
import GlitchedImage from "../glitched/glitched-image/GlitchedImage";
import GlitchedTitle from "../glitched/glitched-title/GlitchedTitle";

interface BannerSectionProps {
  id: string;
}

const BannerSection: React.FC<BannerSectionProps> = ({id}) => {

  return (
    <div className="bg-gray-900">
      <div className="md:flex items-center justify-center min-h-screen bg-linear-to-b from-gray-900 from-80% to-cyan-950 rounded-b-full gap-14" id={id}>
        <GlitchedImage />
        <div className="flex flex-col items-center justify-center text-gray-100 md:w-1/3 px-6 md:px-0">
          <GlitchedTitle
            className="md:text-4xl font-bold"
          >
            Salut, je suis <span className="text-blue-500">Valentin Nelis</span>
          </GlitchedTitle>
          <GlitchedParagraph className="text-gray-400 mt-4">Développeur Web | Next.js | Java/Spring</GlitchedParagraph>
          <GlitchedParagraph className="text-gray-400 mt-4 text-justify md:text-xl">
            Développeur web spécialisé en Next.js et Java avec Spring Boot. 
            Passionné par la création d’applications modernes et performantes, j’aime relever des défis techniques et concevoir des expériences utilisateur optimisées. 
            Toujours curieux et en apprentissage, je cherche à perfectionner mes compétences et explorer de nouvelles technologies.
          </GlitchedParagraph>
        </div>
      </div>
    </div>
  )
}

export default BannerSection