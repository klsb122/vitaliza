import { FaHeart, FaUsers, FaLeaf, FaStar } from 'react-icons/fa';

const History = () => {
  const highlights = [
    {
      icon: FaHeart,
      title: "Fundada em 2019",
      description: "Nascida do sonho de criar um espaço de cuidado integral"
    },
    {
      icon: FaUsers,
      title: "12 Profissionais",
      description: "Equipe multidisciplinar qualificada"
    },
    {
      icon: FaLeaf,
      title: "4 Especialidades",
      description: "Psicologia, Neuropsicologia, Psiquiatria e Neuropediatria"
    },
    {
      icon: FaStar,
      title: "Atendimento Humanizado",
      description: "Ético, acolhedor e individualizado"
    }
  ];

  return (
    <section id="historia" className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="block text-sm font-bold tracking-widest text-secondary uppercase mb-2">
            Nossa Trajetória
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            A História da Vitaliza
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
        </div>

        {/* Main Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Story Text */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-secondary/20">
              <p className="text-light-text leading-relaxed text-lg mb-6">
                A <strong className="text-primary">Vitaliza Saúde Mental</strong> nasceu em 2019 a partir de um sonho em comum: criar um espaço onde a saúde mental fosse cuidada de forma integral e humana. Um local em que as pessoas pudessem encontrar diferentes especialidades voltadas ao bem-estar emocional.
              </p>
              <p className="text-light-text leading-relaxed text-lg mb-6">
                Idealizada por <strong className="text-primary">Samara e Rhuana</strong>, psicólogas, amigas e colegas de faculdade, a Vitaliza surgiu da união entre propósito, amizade e compromisso com o cuidado em saúde mental. O que começou como um projeto cheio de intenção e sensibilidade foi crescendo, se fortalecendo e ganhando forma ao longo dos anos.
              </p>
              <p className="text-light-text leading-relaxed text-lg">
                Hoje, oferecemos atendimentos em <strong className="text-secondary">psicologia, neuropsicologia, psiquiatria e neuropediatria</strong>, contando com uma equipe multidisciplinar formada por 12 profissionais qualificados. Cada um contribui com seu conhecimento e experiência para garantir um atendimento ético, acolhedor e individualizado, respeitando a singularidade de cada pessoa.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 text-white shadow-lg">
              <p className="italic text-lg leading-relaxed">
                "Seguimos em constante evolução, mantendo vivo o propósito que deu origem à Vitaliza: promover saúde mental, cuidado e qualidade de vida em todas as fases da vida."
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-5">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-secondary/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-white text-2xl" />
                </div>
                <h3 className="font-bold text-primary text-lg mb-2">{item.title}</h3>
                <p className="text-light-text text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary rounded-full -translate-y-1/2"></div>
            
            {[
              { year: "2019", text: "Fundação da Vitaliza" },
              { year: "2020", text: "Crescimento e Adaptação" },
              { year: "2023", text: "Expansão da Equipe" },
              { year: "Hoje", text: "12 Profissionais" }
            ].map((item, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg border-4 border-secondary flex items-center justify-center mb-3">
                  <span className="font-bold text-primary text-sm">{item.year}</span>
                </div>
                <span className="text-light-text text-sm text-center font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
