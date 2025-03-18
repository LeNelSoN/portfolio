import GlitchedParagraph from "../glitched/glitched-paragraphe/GlitchedParagraphe";
import GlitchedTitle from "../glitched/glitched-title/GlitchedTitle";

const NavBar = () => {
  return (
    <aside className="hidden lg:flex flex-col w-56 h-screen text-gray-400 fixed left-0 top-0 p-6">

      <div className="mb-10 text-center">
        <GlitchedTitle className="text-lg font-bold text-blue-500">Valentin Nelis</GlitchedTitle>
        <GlitchedParagraph className="text-gray-400 text-sm">Développeur Web</GlitchedParagraph>
      </div>

      <nav className="flex flex-col space-y-6">
        <a href="#about" className="flex items-center space-x-3 hover:text-white text-lg transition">
          <GlitchedParagraph>À propos</GlitchedParagraph>
        </a>
        <a href="#experience" className="flex items-center space-x-3 hover:text-white text-lg transition">
          <GlitchedParagraph>Experience</GlitchedParagraph>
        </a>
        <a href="#project" className="flex items-center space-x-3 hover:text-white text-lg transition">
          <GlitchedParagraph>Projet</GlitchedParagraph>
        </a>
      </nav>
    </aside>
  );
};

export default NavBar;
