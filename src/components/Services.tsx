import { FaArrowRight } from 'react-icons/fa';
import { TbSofa, TbPill, TbMoodKid, TbBrain, TbClipboardList, TbSpeakerphone, TbUsers } from 'react-icons/tb';
import ScrollAnimation from './ScrollAnimation';

const Services = () => {
  const services = [
    {
      icon: TbSofa,
      title: "Psicoterapia",
      description: "Atendimento individual focado no autoconhecimento, superação de dificuldades emocionais e promoção do bem-estar psicológico."
    },
    {
      icon: TbPill,
      title: "Psiquiatria",
      description: "Avaliação e tratamento médico especializado em transtornos mentais, com abordagem humanizada e acompanhamento contínuo."
    },
    {
      icon: TbMoodKid,
      title: "Neuropediatria",
      description: "Cuidado especializado no desenvolvimento neurológico infantil, diagnóstico e tratamento de condições neurológicas em crianças."
    },
    {
      icon: TbBrain,
      title: "Neuropsicologia",
      description: "Avaliação das funções cognitivas e sua relação com o comportamento, auxiliando no diagnóstico e reabilitação."
    },
    {
      icon: TbClipboardList,
      title: "Avaliação Psicológica",
      description: "Processo técnico e científico de coleta de dados para compreensão do funcionamento psicológico do indivíduo."
    },
    {
      icon: TbSpeakerphone,
      title: "Palestras e Treinamento de RH",
      description: "Capacitação e desenvolvimento de equipes com foco em saúde mental, qualidade de vida e produtividade no ambiente corporativo."
    },
    {
      icon: TbUsers,
      title: "Orientação Vocacional",
      description: "Suporte para escolhas de carreira, autoconhecimento profissional e transições com segurança e clareza."
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-[#F0F7F4]">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollAnimation direction="up">
          <div className="text-center mb-16">
            <span className="block text-sm font-bold tracking-widest text-secondary uppercase mb-2">Nossos Serviços</span>
            <h2 className="text-4xl font-serif text-primary">Como podemos ajudar</h2>
          </div>
        </ScrollAnimation>
        
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <ScrollAnimation 
                key={index} 
                direction="up" 
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
              >
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border-b-4 border-transparent hover:border-secondary group h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-2xl text-primary" />
                  </div>
                  <h3 className="text-xl font-serif text-primary mb-3">{service.title}</h3>
                  <p className="text-light-text text-sm leading-relaxed mb-5">{service.description}</p>
                  <a href="#contato" className="animated-underline inline-flex items-center gap-2 text-primary font-semibold text-sm">
                    Saiba mais <FaArrowRight className="arrow-animate text-xs" />
                  </a>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
