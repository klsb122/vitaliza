import { FaEnvelope } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ScrollAnimation from './ScrollAnimation';

import samara from '../assets/team/samara.webp';
import rhuana from '../assets/team/rhuana.webp';
import mircia from '../assets/team/mircia.webp';
import anna from '../assets/team/anna.webp';
import anne from '../assets/team/anne.webp';
import hercules from '../assets/team/hercules.webp';
import isabella from '../assets/team/isabella.webp';
import lais from '../assets/team/lais.webp';
import lorena from '../assets/team/lorena.webp';
import rhania from '../assets/team/rhania.webp';

const Team = () => {
  const teamMembers = [
    {
      name: "Dra. Samara",
      crp: "CRP 06/123456",
      specialty: "Psicologia Clínica",
      approaches: ["Terapia Cognitivo-Comportamental", "Mindfulness"],
      bio: "Especialista em ansiedade e transtornos de humor com mais de 10 anos de experiência.",
      image: samara,
      email: "samara@vitaliza.com.br"
    },
    {
      name: "Dra. Rhuana",
      crp: "CRP 06/234567",
      specialty: "Psicologia Infantil",
      approaches: ["Ludoterapia", "Terapia Familiar"],
      bio: "Dedicada ao desenvolvimento emocional infantil e orientação parental.",
      image: rhuana,
      email: "rhuana@vitaliza.com.br"
    },
    {
      name: "Dra. Mircia",
      crp: "CRP 06/345678",
      specialty: "Terapia de Casal",
      approaches: ["Terapia Sistêmica", "Comunicação Não-Violenta"],
      bio: "Especialista em relacionamentos e dinâmicas familiares há 8 anos.",
      image: mircia,
      email: "mircia@vitaliza.com.br"
    },
    {
      name: "Dra. Anna",
      crp: "CRP 06/456789",
      specialty: "Orientação Vocacional",
      approaches: ["Análise Comportamental", "Coaching de Carreira"],
      bio: "Auxilia jovens e adultos em transições de carreira e autoconhecimento profissional.",
      image: anna,
      email: "anna@vitaliza.com.br"
    },
    {
      name: "Dra. Anne",
      crp: "CRP 06/567890",
      specialty: "Psicologia Hospitalar",
      approaches: ["Psico-oncologia", "Cuidados Paliativos"],
      bio: "Experiência em suporte emocional a pacientes e familiares em ambiente hospitalar.",
      image: anne,
      email: "anne@vitaliza.com.br"
    },
    {
      name: "Dr. Hercules",
      crp: "CRP 06/678901",
      specialty: "Neuropsicologia",
      approaches: ["Reabilitação Cognitiva", "Avaliação Neuropsicológica"],
      bio: "Especialista em avaliação e reabilitação de funções cognitivas.",
      image: hercules,
      email: "hercules@vitaliza.com.br"
    },
    {
      name: "Dra. Isabella",
      crp: "CRP 06/789012",
      specialty: "Psicanálise",
      approaches: ["Freudiana", "Lacaniana"],
      bio: "Atendimento clínico com ênfase na escuta do inconsciente e análise dos sonhos.",
      image: isabella,
      email: "isabella@vitaliza.com.br"
    },
    {
      name: "Dra. Lais",
      crp: "CRP 06/890123",
      specialty: "Psicologia do Esporte",
      approaches: ["Treinamento Mental", "Biofeedback"],
      bio: "Focada em otimizar a performance e o bem-estar de atletas de alto rendimento.",
      image: lais,
      email: "lais@vitaliza.com.br"
    },
    {
      name: "Dra. Lorena",
      crp: "CRP 06/901234",
      specialty: "Psicologia Perinatal",
      approaches: ["Acompanhamento Gestacional", "Puerpério"],
      bio: "Apoio psicológico durante a gravidez e pós-parto, fortalecendo o vínculo mãe-bebê.",
      image: lorena,
      email: "lorena@vitaliza.com.br"
    },
    {
      name: "Dra. Rhania",
      crp: "CRP 06/012345",
      specialty: "Terapia Sexual",
      approaches: ["Terapia Sexual", "Educação Sexual"],
      bio: "Atendimento especializado em questões de sexualidade e intimidade.",
      image: rhania,
      email: "rhania@vitaliza.com.br"
    }
  ];

  return (
    <section id="equipe" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollAnimation direction="up">
          <div className="text-center mb-16">
            <span className="block text-sm font-bold tracking-widest text-secondary uppercase mb-2">Nossa Equipe</span>
            <h2 className="text-4xl font-serif text-primary mb-4">Conheça nossos profissionais</h2>
            <p className="text-light-text max-w-2xl mx-auto">
              Profissionais qualificados e dedicados ao seu bem-estar emocional, prontos para acompanhá-lo em sua jornada.
            </p>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="team-carousel-container">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
              className="pb-12"
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <div 
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ScrollAnimation>
        
        {/* CTA Adicional */}
        <ScrollAnimation direction="up" delay={0.3}>
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
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Team;
