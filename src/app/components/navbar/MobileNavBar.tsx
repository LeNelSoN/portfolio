import GlitchedParagraph from "../glitched/glitched-paragraphe/GlitchedParagraphe";

const MobileNavBar = () => {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-gray-900 text-white flex justify-around p-4 shadow-lg">
      <a href="#about" className="flex flex-col items-center text-gray-300 hover:text-white transition">
        <GlitchedParagraph className="text-sm">À propos</GlitchedParagraph>
      </a>
      <a href="#experience" className="flex flex-col items-center text-gray-300 hover:text-white transition">
        <GlitchedParagraph className="text-sm">Experience</GlitchedParagraph>
      </a>
      <a href="#project" className="flex flex-col items-center text-gray-300 hover:text-white transition">
        <GlitchedParagraph className="text-sm">Projet</GlitchedParagraph>
      </a>
    </nav>
  );
};

export default MobileNavBar;
