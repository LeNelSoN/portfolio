
const NavBar = () => {
  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen text-gray-400 fixed left-0 top-0 p-6">

      <div className="mb-10 text-center">
        <h1 className="text-lg font-bold text-blue-500">Valentin Nelis</h1>
        <p className="text-gray-400 text-sm">Développeur Web</p>
      </div>

      <nav className="flex flex-col space-y-6">
        <a href="#about" className="flex items-center space-x-3 hover:text-white text-lg transition">
          <span>À propos</span>
        </a>
        <a href="#experience" className="flex items-center space-x-3 hover:text-white text-lg transition">
          <span>Experience</span>
        </a>
        <a href="#project" className="flex items-center space-x-3 hover:text-white text-lg transition">
          <span>Projet</span>
        </a>
      </nav>
    </aside>
  );
};

export default NavBar;
