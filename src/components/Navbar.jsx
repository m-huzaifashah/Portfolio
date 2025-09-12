import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (section) => {
    setIsMenuOpen(false);
    document.getElementById(section.toLowerCase())
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Portfolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-purple-400 transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-slate-700">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 hover:text-purple-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
