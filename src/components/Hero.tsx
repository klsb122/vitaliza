import equipe from '../assets/equipe.png';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 min-h-[90vh] flex items-center bg-gradient-to-br from-[#FAF9F6] to-[#E8F5E9]">
      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6 leading-tight">
            Redescubra o seu <span className="text-secondary italic">equilíbrio</span> interior
          </h1>
          <p className="text-lg md:text-xl text-light-text mb-10 max-w-lg mx-auto md:mx-0">
            Um espaço seguro e acolhedor para sua jornada de autoconhecimento e bem-estar emocional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contato" className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-accent transition-all shadow-md hover:shadow-lg hover:-translate-y-1">
              Começar Jornada
            </a>
            <a href="#sobre" className="border-2 border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-all">
              Saiba Mais
            </a>
          </div>
        </div>
        
        <div className="relative animate-fade-in-delay-200">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden shadow-xl animate-morph">
            <img 
              src={equipe} 
              alt="Ambiente tranquilo de terapia" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
