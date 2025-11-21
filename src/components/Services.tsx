import { FaArrowRight } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Terapia Individual",
      description: "Sessões focadas em suas questões pessoais, ansiedade, depressão e autoconhecimento."
    },
    {
      title: "Terapia de Casal",
      description: "Espaço para melhorar a comunicação, resolver conflitos e fortalecer o vínculo afetivo."
    },
    {
      title: "Terapia Infantil",
      description: "Acompanhamento lúdico e especializado para o desenvolvimento emocional das crianças."
    },
    {
      title: "Orientação Vocacional",
      description: "Suporte para escolhas de carreira e transições profissionais com segurança."
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-[#F0F7F4]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="block text-sm font-bold tracking-widest text-secondary uppercase mb-2">Nossos Serviços</span>
          <h2 className="text-4xl font-serif text-primary">Como podemos ajudar</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border-b-4 border-transparent hover:border-secondary group">
              <h3 className="text-xl font-serif text-primary mb-4">{service.title}</h3>
              <p className="text-light-text mb-6">{service.description}</p>
              <a href="#contato" className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Saiba mais <FaArrowRight className="text-sm" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
