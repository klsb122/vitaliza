import logoSolo from '../assets/logo-solo.webp';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '#home', label: 'Início' },
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#equipe', label: 'Equipe' },
    { href: '#contato', label: 'Contato' },
  ];

  const socialLinks = [
    { 
      href: 'https://www.instagram.com/vitalizapsicologia/', 
      icon: Instagram, 
      label: 'Instagram',
      color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400'
    },
    { 
      href: 'https://www.facebook.com/p/Vitaliza-Psicologia-100052680951127/', 
      icon: Facebook, 
      label: 'Facebook',
      color: 'hover:bg-blue-600'
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#1a2f2f] to-[#0f1c1c] text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logoSolo} 
                alt="Vitaliza" 
                className="h-14 w-14 object-contain drop-shadow-lg" 
              />
              <div>
                <h3 className="text-2xl font-serif font-bold tracking-wide">VITALIZA</h3>
                <p className="text-secondary/80 text-sm font-light">Psicologia e Bem-estar</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Promovendo saúde mental e bem-estar através de atendimento psicológico humanizado e acolhedor.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`
                    w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm
                    flex items-center justify-center
                    transition-all duration-300 ease-out
                    hover:scale-110 hover:shadow-lg hover:shadow-white/10
                    ${social.color} hover:text-white
                  `}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Navegação
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-secondary to-transparent rounded-full" />
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-secondary transition-all duration-300 text-sm group flex items-center gap-2"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-secondary transition-all duration-300 rounded-full" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Contato
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-secondary to-transparent rounded-full" />
            </h4>
            <div className="flex flex-col gap-4">
              <a 
                href="https://maps.google.com/maps?q=R.+Dorival+Caymmi,+895+-+Centro,+Lu%C3%ADs+Eduardo+Magalh%C3%A3es+-+BA,+47850-015" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-secondary transition-colors text-sm group"
              >
                <MapPin className="w-5 h-5 mt-0.5 text-secondary/70 group-hover:text-secondary transition-colors flex-shrink-0" />
                <span>R. Dorival Caymmi, 895<br />Centro - Luís Eduardo Magalhães/BA<br />47850-015</span>
              </a>
              <a 
                href="tel:+5577999303592" 
                className="flex items-center gap-3 text-gray-400 hover:text-secondary transition-colors text-sm group"
              >
                <Phone className="w-5 h-5 text-secondary/70 group-hover:text-secondary transition-colors flex-shrink-0" />
                <span>(77) 99930-3592</span>
              </a>
              <a 
                href="mailto:contato@vitaliza.com.br" 
                className="flex items-center gap-3 text-gray-400 hover:text-secondary transition-colors text-sm group"
              >
                <Mail className="w-5 h-5 text-secondary/70 group-hover:text-secondary transition-colors flex-shrink-0" />
                <span>contato@vitaliza.com.br</span>
              </a>
            </div>
          </div>

          {/* Hours Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Horário de Atendimento
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-secondary to-transparent rounded-full" />
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock className="w-5 h-5 mt-0.5 text-secondary/70 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-300">Segunda a Sexta</p>
                  <p>08:00 - 20:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock className="w-5 h-5 mt-0.5 text-secondary/70 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-300">Sábado</p>
                  <p>08:00 - 12:00</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#contato"
              className="
                mt-6 inline-flex items-center gap-2 px-5 py-2.5
                bg-gradient-to-r from-secondary to-secondary/80
                text-primary font-medium text-sm rounded-full
                hover:shadow-lg hover:shadow-secondary/25
                hover:scale-105 transition-all duration-300
              "
            >
              Agende sua consulta
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              ©{currentYear} Vitaliza Saúde Mental. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1.5">
              Feito com <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" /> por{' '}
              <a 
                href="https://www.kextech.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary/80 hover:text-secondary transition-colors font-medium"
              >
                Kextech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
