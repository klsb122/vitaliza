import equipe from '../assets/equipe.jpg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${equipe})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay escuro para legibilidade do texto */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
            Redescubra o seu <span className="text-secondary italic">equilíbrio</span> interior
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-lg mx-auto drop-shadow-md">
            Um espaço seguro e acolhedor para sua jornada de autoconhecimento e bem-estar emocional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contato" className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-accent transition-all shadow-md hover:shadow-lg hover:-translate-y-1">
              Começar Jornada
            </a>
            <a href="#sobre" className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-primary transition-all backdrop-blur-sm">
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
