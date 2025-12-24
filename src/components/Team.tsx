import { FaEnvelope } from 'react-icons/fa';
import { TbChevronDown } from 'react-icons/tb';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ScrollAnimation from './ScrollAnimation';
import { useState, useEffect, useRef } from 'react';

import samara from '../assets/team-new/samara.webp';
import rhuana from '../assets/team-new/rhuana.webp';
import mircia from '../assets/team-new/mircia.webp';
import anna from '../assets/team-new/anna.webp';
import anne from '../assets/team-new/anne.webp';
import hercules from '../assets/team-new/hercules.webp';
import isabella from '../assets/team-new/isabella.webp';
import lais from '../assets/team-new/lais.webp';
import lorena from '../assets/team-new/lorena.webp';
import rhania from '../assets/team-new/rhania.webp';
import tamires from '../assets/team-new/tamires.webp';

// Componente de imagem otimizada com lazy loading e skeleton
const OptimizedImage = ({ src, alt, priority = false, imagePosition = 'center' }: { src: string; alt: string; priority?: boolean; imagePosition?: 'top' | 'center' | 'bottom' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);

  useEffect(() => {
    if (priority) {
      // Preload imagens prioritárias
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
    }
  }, [src, priority]);

  useEffect(() => {
    if (!priority) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        },
        { rootMargin: '200px' } // Começar a carregar 200px antes de entrar na viewport
      );

      const placeholder = document.getElementById(`img-placeholder-${alt.replace(/\s/g, '-')}`);
      if (placeholder) {
        observer.observe(placeholder);
      }

      return () => observer.disconnect();
    }
  }, [alt, priority]);

  return (
    <div 
      id={`img-placeholder-${alt.replace(/\s/g, '-')}`}
      className="relative w-full h-full"
    >
      {/* Skeleton loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#8FBC8F]/30 to-[#2F4F4F]/30 animate-pulse flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#8FBC8F]/40 animate-pulse"></div>
        </div>
      )}
      
      {/* Imagem real */}
      {isInView && (
        <img 
          src={src} 
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${imagePosition === 'top' ? 'object-top' : imagePosition === 'bottom' ? 'object-bottom' : 'object-center'}`}
        />
      )}
    </div>
  );
};

const MAX_BIO_LENGTH = 150;

const Team = () => {
  const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({});
  const swiperRef = useRef<SwiperType | null>(null);

  const handleMouseEnterButton = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeaveButton = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  const toggleExpand = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const teamMembers = [
    {
      name: "Samara D. Dal-Lago",
      crp: "CRP 03/19724",
      specialty: "Psicóloga Clínica",
      approaches: ["Terapia Cognitivo-Comportamental", "Terapia do Esquema Cognitivo", "Relacionamento e Sexualidade", "Psicologia Jurídica", "Inteligência Criminal"],
      bio: "Atua auxiliando indivíduos a compreenderem seus padrões emocionais, cognitivos e comportamentais, promovendo mudanças significativas e duradouras. Atendimento on-line e presencial para adolescentes a partir de 16 anos e adultos.",
      image: samara,
      email: "samara@vitaliza.com.br"
    },
    {
      name: "Rhuana Tondatto",
      crp: "CRP 03/19731",
      specialty: "Psicóloga",
      approaches: ["Humanista Existencial", "Terapia Sistêmica de Casal", "Terapia Individual"],
      bio: "Atua na abordagem humanista e existencial, com formação em terapia sistêmica de casal e individual. Realiza atendimento on-line e presencial para adultos e adolescentes a partir de 13 anos, com objetivo de acolher e construir juntos uma trajetória de bem-estar e autoconhecimento.",
      image: rhuana,
      email: "rhuana@vitaliza.com.br"
    },
    {
      name: "Rhania Menezes",
      crp: "CRP 03/30272",
      specialty: "Psicóloga Clínica",
      approaches: ["Terapia Cognitivo-Comportamental", "Psicopatologia", "Psicoterapias Baseadas em Evidências"],
      bio: "Atua com foco na mudança de processos cognitivos, emocionais e comportamentais. Especializada em avaliação diagnóstica de transtornos mentais. Atendimentos on-line e presenciais para adolescentes e adultos.",
      image: rhania,
      email: "rhania@vitaliza.com.br"
    },
    {
      name: "Dr. Hercules Hideki Makio",
      crp: "CRM-BA 44523 / RQE 25294",
      specialty: "Médico Psiquiatra",
      approaches: ["Terapia Cognitivo-Comportamental", "Psiquiatria Clínica"],
      bio: "Graduado pela UFMS com residência em psiquiatria. Atendimentos presenciais e online a partir de 6 anos. Valoriza o vínculo, a escuta e a empatia como princípios fundamentais, promovendo bem-estar e qualidade de vida.",
      image: hercules,
      email: "hercules@vitaliza.com.br"
    },
    {
      name: "Lorena dos Reis Dias Lermen",
      crp: "CRP 03/5848",
      specialty: "Psicóloga",
      approaches: ["Gestalt-terapia", "Perdas e Luto", "Psicologia da Saúde e Hospitalar", "Psicologia do Trânsito"],
      bio: "Formada pela Universidade Católica de Goiás. Credenciada junto à Polícia Federal. Atende adultos e idosos, presencial e on-line. Realiza avaliação psicológica (porte/posse de arma, pré-cirúrgica, vocacional, admissional e do trabalho).",
      image: lorena,
      email: "lorena@vitaliza.com.br"
    },
    {
      name: "Anne Caroline Farias",
      crp: "CRP 03/30554",
      specialty: "Psicóloga Clínica",
      approaches: ["Terapia Cognitivo-Comportamental", "Terapia do Esquema", "Neurociência do Comportamento Humano"],
      bio: "Atua com foco no desenvolvimento de relações seguras e saudáveis, compreendendo as necessidades emocionais do indivíduo. Atendimento online e presencial para adolescentes e adultos, individual e casal.",
      image: anne,
      email: "anne@vitaliza.com.br"
    },
    {
      name: "Mírcia Dantas de Sá Carneiro",
      crp: "CRP 03/29228",
      specialty: "Psicóloga Clínica",
      approaches: ["Psicologia Analítica", "Terapia Sistêmica", "Terapia EMDR", "Terapia Brainspotting"],
      bio: "Especializada em Terapia de Família e Casal. Auxilia pacientes a processar experiências traumáticas e memórias dolorosas. Atendimentos online e presencial para adultos, idosos, família, casal e grupos. Oferece Consultoria Empresarial e implementação da NR-1.",
      image: mircia,
      email: "mircia@vitaliza.com.br"
    },
    {
      name: "Tamires Carvalho",
      crp: "CRP 03/26522",
      specialty: "Psicóloga e Neuropsicóloga",
      approaches: ["Terapia Cognitivo-Comportamental", "Neuropsicologia", "Avaliação Neuropsicológica"],
      bio: "Atua em avaliações neuropsicológicas e psicoterapia. Atendimentos exclusivamente presenciais para crianças a partir de 3 anos, adolescentes, adultos e idosos. Foco em funções cognitivas como atenção, memória, linguagem, aprendizagem e regulação emocional.",
      image: tamires,
      email: "tamires@vitaliza.com.br"
    },
    {
      name: "Anna Vitória Silva",
      crp: "CRP 03/30427",
      specialty: "Psicóloga Clínica Infantojuvenil",
      approaches: ["Terapia Cognitivo-Comportamental", "Habilidades Socioemocionais", "Regulação Emocional"],
      bio: "Atua na Psicologia Infantojuvenil com base na TCC, realizando atendimento especializado para crianças e adolescentes de 3 a 14 anos. Seu trabalho é direcionado à identificação e modificação de padrões cognitivos, emocionais e comportamentais, auxiliando na construção de habilidades socioemocionais e fortalecimento da autoestima. Realiza atendimentos presenciais com intervenções baseadas em evidências.",
      image: anna,
      email: "anna@vitaliza.com.br"
    },
    {
      name: "Isabella Magalhães",
      crp: "CRP 03/5944",
      specialty: "Psicóloga Clínica",
      approaches: ["Terapia Cognitivo-Comportamental", "Psicopatologia", "Obesidade e Emagrecimento"],
      bio: "Atuação voltada para a Terapia Cognitivo-Comportamental (TCC), auxiliando você a enfrentar questões como ansiedade, autoestima e dificuldades emocionais do dia a dia. Atende pessoas que buscam apoio no processo de emagrecimento, compreendendo os aspectos emocionais que influenciam a relação com a comida e o corpo. Tem pós-graduação em Terapia Cognitivo Comportamental e em Psicopatologia, formação em Obesidade e Emagrecimento. Realiza atendimento on-line e presencial, para adolescentes a partir de 16 anos e adultos.",
      image: isabella,
      email: "isabella@vitaliza.com.br"
    },
    {
      name: "Dra. Laís Hendges",
      crp: "CRM 32638 | RQE 23413",
      specialty: "Médica Pediatra e Neuropediatra",
      approaches: ["Neurologia Infantil", "Neurodesenvolvimento", "Pediatria"],
      bio: "Formada em 2018, possui residência em Pediatria e pós-graduação em Neurologia Infantil. Atua no cuidado integral da criança e do adolescente, com foco na avaliação, diagnóstico e acompanhamento de condições neurológicas e do desenvolvimento infantil, como atrasos no desenvolvimento neuropsicomotor, transtornos do neurodesenvolvimento, epilepsia infantil e alterações do sono.",
      image: lais,
      email: "lais@vitaliza.com.br"
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
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
              loop={true}
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
                      <OptimizedImage 
                        src={member.image} 
                        alt={member.name}
                        priority={index < 4} // Priorizar as primeiras 4 imagens
                        imagePosition={(member as any).imagePosition}
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
                        
                        {/* Bio com expansão animada */}
                        <p className="text-sm text-light-text leading-relaxed">
                          {member.bio.substring(0, MAX_BIO_LENGTH)}
                          {member.bio.length > MAX_BIO_LENGTH && !expandedCards[index] && '...'}
                        </p>
                        
                        {/* Conteúdo expandido com animação suave */}
                        {member.bio.length > MAX_BIO_LENGTH && (
                          <div className={`expand-content ${expandedCards[index] ? 'expanded' : ''}`}>
                            <div>
                              <p className="text-sm text-light-text leading-relaxed fade-in-content">
                                {member.bio.substring(MAX_BIO_LENGTH)}
                              </p>
                            </div>
                          </div>
                        )}
                        
                        {/* Botão Ver mais/menos com animação */}
                        {member.bio.length > MAX_BIO_LENGTH && (
                          <button
                            onClick={() => toggleExpand(index)}
                            onMouseEnter={handleMouseEnterButton}
                            onMouseLeave={handleMouseLeaveButton}
                            className="expand-button inline-flex items-center gap-1.5 text-sm text-secondary font-medium hover:text-primary transition-colors mt-3 py-1.5 px-3 rounded-lg"
                          >
                            <span>{expandedCards[index] ? 'Ver menos' : 'Ver mais'}</span>
                            <TbChevronDown className={`chevron-icon text-base ${expandedCards[index] ? 'rotated' : ''}`} />
                          </button>
                        )}
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
