import { FaEnvelope } from 'react-icons/fa';
import anaSilva from '../assets/team/ana-silva.webp';
import carlosMendes from '../assets/team/carlos-mendes.webp';
import marinaCosta from '../assets/team/mariana-costa.webp';
import robertoAlves from '../assets/team/roberto-alves.webp';

const Team = () => {
  const teamMembers = [
    {
      name: "Dra. Ana Paula Silva",
      crp: "CRP 06/123456",
      specialty: "Psicologia Clínica",
      approaches: ["Terapia Cognitivo-Comportamental", "Mindfulness"],
      bio: "Especialista em ansiedade e transtornos de humor com mais de 10 anos de experiência.",
      image: anaSilva,
      email: "ana.silva@vitaliza.com.br"
    },
    {
      name: "Dr. Carlos Mendes",
      crp: "CRP 06/234567",
      specialty: "Psicologia Infantil",
      approaches: ["Ludoterapia", "Terapia Familiar"],
      bio: "Dedicado ao desenvolvimento emocional infantil e orientação parental.",
      image: carlosMendes,
      email: "carlos.mendes@vitaliza.com.br"
    },
    {
      name: "Dra. Mariana Costa",
      crp: "CRP 06/345678",
      specialty: "Terapia de Casal",
      approaches: ["Terapia Sistêmica", "Comunicação Não-Violenta"],
      bio: "Especialista em relacionamentos e dinâmicas familiares há 8 anos.",
      image: marinaCosta,
      email: "mariana.costa@vitaliza.com.br"
    },
    {
      name: "Dr. Roberto Alves",
      crp: "CRP 06/456789",
      specialty: "Orientação Vocacional",
      approaches: ["Análise Comportamental", "Coaching de Carreira"],
      bio: "Auxilia jovens e adultos em transições de carreira e autoconhecimento profissional.",
      image: robertoAlves,
      email: "roberto.alves@vitaliza.com.br"
    },
    {
      name: "Dra. Juliana Ferreira",
      crp: "CRP 06/567890",
      specialty: "Psicologia Hospitalar",
      approaches: ["Psico-oncologia", "Cuidados Paliativos"],
      bio: "Experiência em suporte emocional a pacientes e familiares em ambiente hospitalar.",
      image: anaSilva,
      email: "juliana.ferreira@vitaliza.com.br"
    },
    {
      name: "Dr. Ricardo Oliveira",
      crp: "CRP 06/678901",
      specialty: "Neuropsicologia",
      approaches: ["Reabilitação Cognitiva", "Avaliação Neuropsicológica"],
      bio: "Especialista em avaliação e reabilitação de funções cognitivas.",
      image: carlosMendes,
      email: "ricardo.oliveira@vitaliza.com.br"
    },
    {
      name: "Dra. Fernanda Lima",
      crp: "CRP 06/789012",
      specialty: "Psicanálise",
      approaches: ["Freudiana", "Lacaniana"],
      bio: "Atendimento clínico com ênfase na escuta do inconsciente e análise dos sonhos.",
      image: marinaCosta,
      email: "fernanda.lima@vitaliza.com.br"
    },
    {
      name: "Dr. Eduardo Santos",
      crp: "CRP 06/890123",
      specialty: "Psicologia do Esporte",
      approaches: ["Treinamento Mental", "Biofeedback"],
      bio: "Focado em otimizar a performance e o bem-estar de atletas de alto rendimento.",
      image: robertoAlves,
      email: "eduardo.santos@vitaliza.com.br"
    }
  ];

  return (
    <section id="equipe" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="block text-sm font-bold tracking-widest text-secondary uppercase mb-2">Nossa Equipe</span>
          <h2 className="text-4xl font-serif text-primary mb-4">Conheça nossos profissionais</h2>
          <p className="text-light-text max-w-2xl mx-auto">
            Profissionais qualificados e dedicados ao seu bem-estar emocional, prontos para acompanhá-lo em sua jornada.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-[#FAF9F6] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col"
            >
              {/* Imagem do Profissional */}
              <div className="relative h-80 bg-gradient-to-br from-[#8FBC8F]/20 to-[#2F4F4F]/20 overflow-hidden shrink-0">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay com efeito hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
              </div>
              
              {/* Informações do Profissional */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-serif text-primary mb-1">{member.name}</h3>
                <p className="text-sm text-secondary font-medium mb-3">{member.crp}</p>
                
                <div className="mb-4">
                  <p className="text-sm font-bold text-text mb-2">{member.specialty}</p>
                  <p className="text-sm text-light-text leading-relaxed">{member.bio}</p>
                </div>
                
                {/* Abordagens */}
                <div className="mb-4">
                  <p className="text-xs font-bold text-text mb-2">Abordagens:</p>
                  <div className="flex flex-wrap gap-2">
                    {member.approaches.map((approach, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-white px-3 py-1 rounded-full text-primary border border-[#8FBC8F]/30"
                      >
                        {approach}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Ações */}
                <div className="flex gap-3 pt-4 border-t border-gray-200 mt-auto">
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex-1 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent transition-all text-center flex items-center justify-center gap-2"
                  >
                    <FaEnvelope className="text-xs" />
                    Contato
                  </a>
                  <a 
                    href="#contato"
                    className="flex-1 border-2 border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-all text-center"
                  >
                    Agendar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Adicional */}
        <div className="text-center mt-16">
          <p className="text-light-text mb-6">
            Não sabe qual profissional escolher? Podemos ajudá-lo a encontrar o terapeuta ideal para você.
          </p>
          <a 
            href="#contato" 
            className="inline-block bg-secondary text-white px-8 py-3 rounded-full font-medium hover:bg-[#7AAB7A] transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
