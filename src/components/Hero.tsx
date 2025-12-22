import equipe from '../assets/equipe.jpg';

const Hero = () => {
  return (
    <>
      {/* Desktop: Layout original com background full */}
      <section 
        id="home" 
        className="relative min-h-screen hidden md:flex items-center justify-center"
        style={{
          backgroundImage: `url(${equipe})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-6xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
              Redescubra o seu <span className="text-secondary italic">equilíbrio</span> interior
            </h1>
            <p className="text-xl text-white/90 mb-10 max-w-lg mx-auto drop-shadow-md">
              Um espaço seguro e acolhedor para sua jornada de autoconhecimento e bem-estar emocional.
            </p>
            <div className="flex flex-row gap-4 justify-center">
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

      {/* Mobile: Layout empilhado com foto integrada */}
      <section 
        id="home-mobile" 
        className="md:hidden min-h-screen flex flex-col bg-[#FAF9F6]"
      >
        {/* Conteúdo de texto */}
        <div className="flex-1 flex flex-col justify-center px-6 pt-24 pb-8">
          <div className="text-center max-w-md mx-auto animate-fade-in">
            <h1 className="text-3xl sm:text-4xl font-serif text-text mb-4 leading-snug">
              Redescubra o seu <span className="text-secondary italic">equilíbrio</span> interior
            </h1>
            <p className="text-base text-light-text mb-8 max-w-sm mx-auto leading-relaxed">
              Um espaço seguro e acolhedor para sua jornada de autoconhecimento e bem-estar emocional.
            </p>
            <div className="flex flex-col gap-3 px-4">
              <a href="#contato" className="bg-primary text-white px-6 py-3.5 rounded-full font-medium hover:bg-accent transition-all shadow-md text-sm">
                Começar Jornada
              </a>
              <a href="#sobre" className="border-2 border-primary text-primary px-6 py-3.5 rounded-full font-medium hover:bg-primary hover:text-white transition-all text-sm">
                Saiba Mais
              </a>
            </div>
          </div>
        </div>

        {/* Foto da equipe com fade integrado */}
        <div className="relative w-full flex-shrink-0">
          {/* Gradiente superior para integrar ao fundo */}
          <div 
            className="absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, #FAF9F6 0%, transparent 100%)'
            }}
          />
          
          {/* Container da imagem com máscara de fade */}
          <div 
            className="relative overflow-hidden"
            style={{
              maskImage: 'radial-gradient(ellipse 100% 90% at 50% 60%, black 50%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 100% 90% at 50% 60%, black 50%, transparent 100%)'
            }}
          >
            <img 
              src={equipe} 
              alt="Equipe Vitaliza" 
              className="w-full h-auto object-cover object-top"
              style={{ maxHeight: '60vh' }}
            />
          </div>
          
          {/* Overlay sutil para suavizar */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center bottom, transparent 30%, rgba(250, 249, 246, 0.3) 100%)'
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
