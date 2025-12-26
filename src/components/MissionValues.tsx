import { FaHeart, FaHandHoldingHeart, FaUsers, FaShieldAlt, FaBrain, FaSeedling } from 'react-icons/fa';
import ScrollAnimation from './ScrollAnimation';

const MissionValues = () => {
  const valores = [
    {
      icon: FaHeart,
      title: "Cuidado",
      description: "Tratamos cada paciente com atenção individualizada, respeitando sua história e necessidades únicas.",
      color: "from-rose-400 to-rose-600"
    },
    {
      icon: FaShieldAlt,
      title: "Ética",
      description: "Compromisso absoluto com a confidencialidade, transparência e os mais altos padrões profissionais.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: FaHandHoldingHeart,
      title: "Acolhimento",
      description: "Ambiente seguro e livre de julgamentos, onde você pode se expressar com total liberdade.",
      color: "from-amber-400 to-amber-600"
    },
    {
      icon: FaUsers,
      title: "Empatia",
      description: "Nos colocamos no seu lugar, compreendendo suas emoções e caminhando ao seu lado na jornada.",
      color: "from-emerald-400 to-emerald-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-secondary/5 to-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <ScrollAnimation direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-bold tracking-widest text-secondary uppercase mb-3 px-4 py-1 bg-secondary/10 rounded-full">
              Nossos Pilares
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
              Valores & Propósito
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full mb-6"></div>
            <p className="text-light-text text-lg leading-relaxed">
              Cada atendimento é guiado por princípios que fazem da Vitaliza um espaço de verdadeira transformação.
            </p>
          </div>
        </ScrollAnimation>

        {/* Valores Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {valores.map((valor, index) => (
            <ScrollAnimation key={index} direction="up" delay={index * 0.1}>
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${valor.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${valor.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <valor.icon className="text-white text-2xl" />
                </div>
                
                {/* Content */}
                <h3 className="font-bold text-xl text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                  {valor.title}
                </h3>
                <p className="text-light-text leading-relaxed text-sm">
                  {valor.description}
                </p>

                {/* Decorative corner */}
                <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${valor.color} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500`}></div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Objetivo Section */}
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="relative max-w-5xl mx-auto">
            {/* Main Objetivo Card */}
            <div className="bg-gradient-to-br from-primary via-primary to-primary/90 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10 grid md:grid-cols-5 gap-8 items-center">
                {/* Icon Side */}
                <div className="md:col-span-2 flex justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/20">
                      <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center shadow-lg">
                        <FaBrain className="text-white text-4xl md:text-5xl" />
                      </div>
                    </div>
                    {/* Floating icons */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <FaSeedling className="text-secondary text-lg" />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="md:col-span-3 text-white">
                  <span className="inline-block text-sm font-bold tracking-widest text-secondary uppercase mb-3 px-3 py-1 bg-white/10 rounded-full">
                    Nosso Objetivo
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif mb-6">
                    Prevenção e Fortalecimento Emocional
                  </h3>
                  <div className="space-y-4">
                    <p className="text-white/90 leading-relaxed text-lg">
                      Saúde mental vai além de tratamentos psicopatológicos. Com os avanços nos estudos e conhecimentos da área, compreendemos a <strong className="text-secondary">importância fundamental dos tratamentos preventivos</strong>.
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      Nosso objetivo é <strong className="text-secondary">diminuir os impactos emocionais</strong> antes que se tornem maiores desafios, <strong className="text-secondary">fortalecendo crenças importantes</strong> para o desenvolvimento psicossocial de cada pessoa.
                    </p>
                  </div>

                  {/* Key Points */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    {["Tratamento Preventivo", "Bem-estar Emocional", "Desenvolvimento Psicossocial"].map((point, i) => (
                      <span key={i} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors duration-300">
                        {point}
                      </span>
                    ))}
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
