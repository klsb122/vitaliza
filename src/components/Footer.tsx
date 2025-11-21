import logoSolo from '../assets/logo-solo.png';

const Footer = () => {
  return (
    <footer className="bg-[#1a2f2f] text-white py-16">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="mb-8 flex flex-col items-center justify-center">
          <img src={logoSolo} alt="Vitaliza" className="h-16 mb-4" />
          <h3 className="text-2xl font-serif font-bold mb-2">VITALIZA</h3>
          <p className="text-gray-400">Psicologia e Bem-estar</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mb-12">
          <a href="#home" className="text-gray-300 hover:text-secondary transition-colors">Início</a>
          <a href="#sobre" className="text-gray-300 hover:text-secondary transition-colors">Sobre</a>
          <a href="#servicos" className="text-gray-300 hover:text-secondary transition-colors">Serviços</a>
          <a href="#contato" className="text-gray-300 hover:text-secondary transition-colors">Contato</a>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-sm text-gray-500">
          <p>&copy; 2024 Clínica Vitaliza. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
