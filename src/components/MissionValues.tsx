import { FaHeart, FaShieldAlt, FaHandHoldingHeart, FaUsers, FaBrain, FaSeedling } from 'react-icons/fa';
import ScrollAnimation from './ScrollAnimation';

const MissionValues = () => {
  const valores = [
    {
      icon: FaHeart,
      title: "Cuidado",
      description: "Dedicação genuína ao bem-estar de cada pessoa que confia em nós",
      color: "from-rose-400 to-rose-600"
    },
    {
      icon: FaShieldAlt,
      title: "Ética",
      description: "Compromisso com a integridade e responsabilidade profissional",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      icon: FaHandHoldingHeart,
      title: "Acolhimento",
      description: "Ambiente seguro e receptivo para todas as suas necessidades",
      color: "from-amber-400 to-amber-600"
    },
    {
      icon: FaUsers,
      title: "Empatia",
      description: "Compreensão profunda e conexão genuína com cada história",
      color: "from-emerald-400 to-emerald-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <ScrollAnimation direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="block text-sm font-bold tracking-widest text-secondary uppercase mb-2">
              O Que Nos Move
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
              Valores & Propósito
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full mb-8"></div>
            <p className="text-light-text text-lg leading-relaxed">
              Nossa equipe tem como principal valor o cuidado, ética, acolhimento e empatia 
              por cada paciente que passa por nossa história.
            </p>
          </div>
        </ScrollAnimation>

        {/* Valores Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {valores.map((valor, index) => (
            <ScrollAnimation key={index} direction="up" delay={index * 0.1}>
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg border border-secondary/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${valor.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${valor.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <valor.icon className="text-white text-2xl" />
                </div>
                
                {/* Content */}
                <h3 className="font-bold text-primary text-xl mb-3 group-hover:text-secondary transition-colors duration-300">
                  {valor.title}
                </h3>
                <p className="text-light-text leading-relaxed">
                  {valor.description}
                </p>
                
                {/* Decorative line */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${valor.color} group-hover:w-full transition-all duration-500`}></div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Objetivo Section */}
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 rounded-3xl p-10 md:p-14 shadow-2xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10 grid md:grid-cols-[auto_1fr] gap-8 items-center">
                {/* Icon */}
                <div className="flex justify-center md:justify-start">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20 shadow-xl">
                    <div className="relative">
                      <FaBrain className="text-white text-4xl" />
                      <FaSeedling className="text-secondary absolute -bottom-1 -right-3 text-xl" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center md:text-left">
                  <span className="inline-block text-secondary font-bold text-sm tracking-widest uppercase mb-3">
                    Nosso Objetivo
                  </span>
                  <h3 className="text-white text-2xl md:text-3xl font-serif mb-5">
                    Saúde Mental Preventiva
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    Saúde mental tem deixado de ser apenas tratamentos psicopatológicos. 
                    Com os estudos e conhecimentos avançados, sabemos a importância dos 
                    <strong className="text-secondary"> tratamentos preventivos</strong>, 
                    diminuindo os impactos emocionais e fortalecendo crenças importantes 
                    para o <strong className="text-secondary">desenvolvimento psicossocial</strong>.
                  </p>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                      🛡️ Prevenção
                    </span>
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                      💪 Fortalecimento Emocional
                    </span>
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                      🌱 Desenvolvimento
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

      </div>
    </section>
  );
};

export default MissionValues;
