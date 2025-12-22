import { FaHeart, FaUsers, FaLeaf, FaStar, FaCheck } from 'react-icons/fa';
import novaFase from '../assets/equipe2.jpeg';

const AboutUs = () => {
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

  const timeline = [
    { year: "2019", text: "Fundação da Vitaliza" },
    { year: "2020", text: "Crescimento e Adaptação" },
    { year: "2023", text: "Expansão da Equipe" },
    { year: "Hoje", text: "12 Profissionais" }
  ];

  const diferenciais = [
    "Ambiente Sigiloso e Confortável",
    "Atendimento Online e Presencial",
    "Abordagem Humanizada"
  ];

  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-[#FAF9F6] via-primary/5 to-[#FAF9F6] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-secondary/10 rounded-full -translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-primary/10 rounded-full translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* === PARTE 1: Header === */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="block text-sm font-bold tracking-widest text-secondary uppercase mb-2">
            Sobre a Vitaliza
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Nossa História, Nossa Essência
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full mb-8"></div>
          <p className="text-light-text text-lg leading-relaxed">
            Conheça a trajetória de cuidado e transformação que nos trouxe até aqui.
          </p>
        </div>

        {/* Timeline Visual de Evolução */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary rounded-full -translate-y-1/2"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg border-4 border-secondary flex items-center justify-center mb-3 hover:scale-110 transition-transform duration-300">
                  <span className="font-bold text-primary text-sm">{item.year}</span>
                </div>
                <span className="text-light-text text-sm text-center font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* === PARTE 2: Nossa História Completa === */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Imagem */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src={novaFase} 
                alt="Equipe Vitaliza" 
                className="rounded-2xl shadow-2xl w-full"
              />
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-secondary/30 rounded-2xl -z-10"></div>
            </div>
          </div>
          
          {/* Texto Completo da História */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <span className="block text-sm font-bold tracking-widest text-secondary uppercase mb-2">
                Um Refúgio Para Sua Mente
              </span>
              <h3 className="text-3xl font-serif text-primary mb-6">
                Cuidado e Transformação
              </h3>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-secondary/20 space-y-4">
              <p className="text-light-text leading-relaxed">
                A <strong className="text-primary">Vitaliza Saúde Mental</strong> nasceu em 2019 a partir de um sonho em comum: criar um espaço onde a saúde mental fosse cuidada de forma integral e humana. Oferecendo um local em que as pessoas pudessem encontrar diferentes especialidades voltadas ao bem-estar emocional.
              </p>
              <p className="text-light-text leading-relaxed">
                Idealizada por <strong className="text-primary">Samara e Rhuana</strong>, psicólogas, amigas e colegas de faculdade, a Vitaliza surgiu da união entre propósito, amizade e compromisso com o cuidado em saúde mental. O que começou como um projeto cheio de intenção e sensibilidade foi crescendo, se fortalecendo e ganhando forma ao longo dos anos.
              </p>
              <p className="text-light-text leading-relaxed">
                Hoje, oferecemos atendimentos em <strong className="text-secondary">psicologia, neuropsicologia, psiquiatria e neuropediatria</strong>, contando com uma equipe multidisciplinar formada por 12 profissionais qualificados. Cada um contribui com seu conhecimento e experiência para garantir um atendimento ético, acolhedor e individualizado, respeitando a singularidade de cada pessoa.
              </p>
            </div>

            {/* Quote/Missão */}
            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-5 text-white shadow-lg">
              <p className="italic leading-relaxed">
                "Seguimos em constante evolução, mantendo vivo o propósito que deu origem à Vitaliza: promover saúde mental, cuidado e qualidade de vida em todas as fases da vida."
              </p>
            </div>

            {/* Diferenciais */}
            <ul className="space-y-3 pt-2">
              {diferenciais.map((item, index) => (
                <li key={index} className="flex items-center gap-3 font-medium text-text">
                  <span className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center">
                    <FaCheck className="text-secondary text-xs" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* === PARTE 3: Highlights/Cards === */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-secondary/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <item.icon className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">{item.title}</h3>
              <p className="text-light-text text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
