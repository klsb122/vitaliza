import { FaCheck } from 'react-icons/fa';
import novaFase from '../assets/nova_fase.jpg';

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <img 
            src={novaFase} 
            alt="Psicóloga sorrindo" 
            className="rounded-xl shadow-lg w-full"
          />
        </div>
        
        <div className="order-1 md:order-2">
          <span className="block text-sm font-bold tracking-widest text-secondary uppercase mb-2">Sobre a Clínica</span>
          <h2 className="text-4xl font-serif text-primary mb-6">Um refúgio para sua mente</h2>
          <p className="text-light-text mb-6 leading-relaxed">
            Na Vitaliza, acreditamos que a saúde mental é a base para uma vida plena. Nossa clínica foi idealizada para ser mais do que um consultório; é um santuário de transformação.
          </p>
          <p className="text-light-text mb-8 leading-relaxed">
            Com uma equipe dedicada e um ambiente pensado nos mínimos detalhes para o seu conforto, oferecemos o suporte necessário para você enfrentar desafios, superar traumas e construir uma vida com mais significado.
          </p>
          
          <ul className="space-y-4">
            {[
              "Ambiente Sigiloso e Confortável",
              "Atendimento Online e Presencial",
              "Abordagem Humanizada"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 font-medium text-text">
                <span className="text-secondary"><FaCheck /></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
