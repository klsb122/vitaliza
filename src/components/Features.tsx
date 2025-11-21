import { FaHeartbeat, FaBrain, FaSeedling } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaHeartbeat />,
      title: "Acolhimento",
      description: "Escuta ativa e empática, livre de julgamentos, focada na sua experiência única."
    },
    {
      icon: <FaBrain />,
      title: "Profissionalismo",
      description: "Abordagens baseadas em evidências científicas para o melhor tratamento."
    },
    {
      icon: <FaSeedling />,
      title: "Crescimento",
      description: "Ferramentas para você florescer e desenvolver sua melhor versão."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#FAF9F6] p-8 rounded-xl text-center hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#8FBC8F]/20 text-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif text-primary mb-4">{feature.title}</h3>
              <p className="text-light-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
