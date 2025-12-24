import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo-solo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Vitaliza" className={`transition-all duration-300 ${scrolled ? 'h-14' : 'h-20'}`} />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#home" className={`font-medium transition-colors ${scrolled ? 'text-text hover:text-secondary' : 'text-white hover:text-white/80'}`}>Início</a></li>
          <li><a href="#sobre" className={`font-medium transition-colors ${scrolled ? 'text-text hover:text-secondary' : 'text-white hover:text-white/80'}`}>Sobre</a></li>
          <li><a href="#equipe" className={`font-medium transition-colors ${scrolled ? 'text-text hover:text-secondary' : 'text-white hover:text-white/80'}`}>Equipe</a></li>
          <li><a href="#servicos" className={`font-medium transition-colors ${scrolled ? 'text-text hover:text-secondary' : 'text-white hover:text-white/80'}`}>Serviços</a></li>
          <li><a href="#abordagens" className={`font-medium transition-colors ${scrolled ? 'text-text hover:text-secondary' : 'text-white hover:text-white/80'}`}>Abordagens</a></li>
          <li><a href="#contato" className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-accent transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">Agendar Consulta</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden text-2xl focus:outline-none transition-colors ${ 'text-primary'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 w-[70%] h-screen bg-white shadow-2xl transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col justify-center items-center gap-8 z-40`}>
        <a href="#home" onClick={() => setIsOpen(false)} className="text-xl font-medium text-text hover:text-secondary">Início</a>
        <a href="#sobre" onClick={() => setIsOpen(false)} className="text-xl font-medium text-text hover:text-secondary">Sobre</a>
        <a href="#equipe" onClick={() => setIsOpen(false)} className="text-xl font-medium text-text hover:text-secondary">Equipe</a>
        <a href="#servicos" onClick={() => setIsOpen(false)} className="text-xl font-medium text-text hover:text-secondary">Serviços</a>
        <a href="#abordagens" onClick={() => setIsOpen(false)} className="text-xl font-medium text-text hover:text-secondary">Abordagens</a>
        <a href="#contato" onClick={() => setIsOpen(false)} className="bg-primary text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-accent">Agendar Consulta</a>
      </div>
      
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 z-30 md:hidden" onClick={() => setIsOpen(false)}></div>
      )}
    </nav>
  );
};

export default Navbar;
