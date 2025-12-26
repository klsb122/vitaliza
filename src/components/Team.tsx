
import { TbChevronDown, TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ScrollAnimation from './ScrollAnimation';
import { useState, useEffect, useRef } from 'react';

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
import tamires from '../assets/team/tamires.webp';

// Componente de imagem otimizada com lazy loading e skeleton
// imagePosition aceita: 'top', 'center', 'bottom' ou valores CSS como '30%', '50% 20%', 'center top'
const OptimizedImage = ({ src, alt, priority = false, imagePosition = 'center' }: { src: string; alt: string; priority?: boolean; imagePosition?: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      // Preload imagens prioritárias
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
    }
  }, [src, priority]);

  useEffect(() => {
    if (!priority && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect(); // Desconectar após entrar na view
          }
        },
        { 
          rootMargin: '300px', // Aumentado para pre-carregar mais cedo
          threshold: 0 
        }
      );

      observer.observe(containerRef.current);

      return () => observer.disconnect();
    }
  }, [priority]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full"
      style={{ 
        contain: 'layout style paint',
        transform: 'translateZ(0)' 
      }}
    >
      {/* Skeleton loading - simplificado para melhor performance */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#8FBC8F]/30 to-[#2F4F4F]/30"
          style={{ willChange: 'opacity' }}
        />
      )}
      
      {/* Imagem real */}
      {isInView && (
        <img 
          src={src} 
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "low"}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            objectPosition: imagePosition,
            transform: 'translateZ(0)',
            willChange: isLoaded ? 'auto' : 'opacity'
          }}
        />
      )}
    </div>
  );
};

const BASE_BIO_LENGTH = 150;
const EXTRA_CHARS_PER_MISSING_TAG = 60;

// Calcula o tamanho máximo da bio baseado na quantidade de tags
const calculateMaxBioLength = (approachesCount: number, specializationsCount: number): number => {
  const totalTags = approachesCount + specializationsCount;
  
  // Se não tem tags, mostra tudo (será tratado pelo showFullText)
  if (totalTags === 0) return 9999;
  
  // Quanto menos tags, mais texto pode mostrar
  // Base: 200 chars. Para cada tag a menos de 6, adiciona 80 chars
  const maxExpectedTags = 6;
  const missingTags = Math.max(0, maxExpectedTags - totalTags);
  
  return BASE_BIO_LENGTH + (missingTags * EXTRA_CHARS_PER_MISSING_TAG);
};

// Função para truncar texto sem cortar palavras no meio
const truncateAtWord = (text: string, maxLength: number): { truncated: string; rest: string } => {
  if (text.length <= maxLength) {
    return { truncated: text, rest: '' };
  }
  
  const lastSpace = text.lastIndexOf(' ', maxLength);
  const cutPoint = lastSpace > 0 ? lastSpace : maxLength;
  
  return {
    truncated: text.substring(0, cutPoint),
    rest: text.substring(cutPoint).trim()
  };
};

// Componente para texto expansível
interface ExpandableTextProps {
  text: string;
  maxLength: number;
  isExpanded: boolean;
  onToggle: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  showFullText?: boolean;
}

const ExpandableText = ({ 
  text, 
  maxLength, 
  isExpanded, 
  onToggle, 
  onMouseEnter, 
  onMouseLeave,
  showFullText = false 
}: ExpandableTextProps) => {
  // Se deve mostrar texto completo, renderiza simples
  if (showFullText) {
    return (
      <p className="text-[13px] text-gray-600 leading-relaxed">
        {text}
      </p>
    );
  }

  const { truncated, rest } = truncateAtWord(text, maxLength);
  const needsExpansion = rest.length > 0;

  // Se não precisa de expansão, mostra texto completo
  if (!needsExpansion) {
    return (
      <p className="text-[13px] text-gray-600 leading-relaxed">
        {text}
      </p>
    );
  }

  return (
    <div className="expandable-text-container">
      {/* Texto truncado - sempre visível */}
      <p className="text-[13px] text-gray-600 leading-relaxed">
        {truncated}
        <span className={`inline transition-opacity duration-300 ${isExpanded ? 'opacity-0 hidden' : 'opacity-100'}`}>...</span>
      </p>
      
      {/* Texto restante - animado */}
      <div 
        className={`expandable-content grid transition-all duration-500 ease-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-[13px] text-gray-600 leading-relaxed">
            {rest}
          </p>
        </div>
      </div>
      
      {/* Botão Ver Mais - Design moderno */}
      <button
        onClick={onToggle}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="group/btn relative inline-flex items-center gap-1.5 text-[12px] text-secondary font-semibold mt-3 py-1.5 px-3 rounded-full bg-secondary/5 hover:bg-secondary/15 transition-all duration-300 hover:shadow-sm"
      >
        <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-0.5">
          {isExpanded ? 'Ler menos' : 'Ler mais'}
        </span>
        <TbChevronDown 
          className={`relative z-10 text-base transition-all duration-400 ease-out ${isExpanded ? 'rotate-180' : 'rotate-0'} group-hover/btn:scale-110`} 
        />
      </button>
    </div>
  );
};
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

  interface TeamMember {
    name: string;
    crp: string;
    specialty: string;
    approaches: string[];
    specializations: string[];
    bio: string;
    image: string;
    imagePosition?: string; // Aceita: 'top', 'center', 'bottom' ou valores CSS como '30%', '50% 20%'
  }

  const teamMembers: TeamMember[] = [
    {
      name: "Samara D. Dal-Lago",
      crp: "CRP 03/19724",
      specialty: "Psicóloga Clínica",
      approaches: ["Terapia Cognitivo-Comportamental", "Terapia do Esquema Cognitivo"],
      specializations: ["Relacionamento e Sexualidade", "Psicologia Jurídica", "Inteligência Criminal", "Terapia Cognitivo-Comportamental", "Terapia do Esquema Cognitivo"],
      bio: "Atua auxiliando indivíduos a compreenderem seus padrões emocionais, cognitivos e comportamentais, promovendo mudanças significativas e duradouras. Atendimento on-line e presencial para adolescentes a partir de 16 anos e adultos.",
      image: samara,
      imagePosition: "center 40%"
    },
    {
      name: "Rhuana Tondatto",
      crp: "CRP 03/19731",
      specialty: "Psicóloga",
      approaches: ["Humanista Existencial", "Terapia Sistêmica"],
      specializations: ["Terapia de Casal"],
      bio: "Atua na abordagem humanista e existencial, com formação em terapia sistêmica de casal e individual. Realiza atendimento on-line e presencial para adultos e adolescentes a partir de 13 anos, com objetivo de acolher e construir juntos uma trajetória de bem-estar e autoconhecimento.",
      image: rhuana,
      imagePosition: "center 35%"
    },
    {
      name: "Rhania Menezes",
      crp: "CRP 03/30272",
      specialty: "Psicóloga Clínica",
      approaches: ["Terapia Cognitivo-Comportamental"],
      specializations: ["Psicopatologia", "Psicoterapias Baseadas em Evidências"],
      bio: "Atua com foco na mudança de processos cognitivos, emocionais e comportamentais. Especializada em avaliação diagnóstica de transtornos mentais. Atendimentos on-line e presenciais para adolescentes e adultos.",
      image: rhania,
      imagePosition: "center 35%"
    },
    {
      name: "Dr. Hercules Hideki Makio",
      crp: "CRM-BA 44523 / RQE 25294",
      specialty: "Médico Psiquiatra",
      approaches: [],
      specializations: [],
      bio: "Graduado pela UFMS com residência em psiquiatria. Atendimentos presenciais e online a partir de 6 anos. Valoriza o vínculo, a escuta e a empatia como princípios fundamentais, promovendo bem-estar e qualidade de vida.",
      image: hercules,
      imagePosition: "center 40%"
    },
    {
      name: "Lorena dos Reis Dias Lermen",
      crp: "CRP 03/5848",
      specialty: "Psicóloga",
      approaches: ["Gestalt"],
      specializations: ["Perdas e Luto", "Psicologia da Saúde e Hospitalar", "Psicologia do Trânsito"],
      bio: "Formada pela Universidade Católica de Goiás. Credenciada junto à Polícia Federal. Atende adultos e idosos, presencial e on-line. Realiza avaliação psicológica (porte/posse de arma, pré-cirúrgica, vocacional, admissional e do trabalho).",
      image: lorena,
      imagePosition: "center 50%"
    },
    {
      name: "Anne Caroline Farias",
      crp: "CRP 03/30554",
      specialty: "Psicóloga Clínica",
      approaches: ["Terapia Cognitivo-Comportamental", "Terapia do Esquema"],
      specializations: ["Neurociência do Comportamento Humano", "Terapia do Esquema"],
      bio: "Atua com foco no desenvolvimento de relações seguras e saudáveis, compreendendo as necessidades emocionais do indivíduo. Atendimento online e presencial para adolescentes e adultos, individual e casal.",
      image: anne,
      imagePosition: "center 80%"
    },
    {
      name: "Mírcia Dantas de Sá Carneiro",
      crp: "CRP 03/29228",
      specialty: "Psicóloga Clínica",
      approaches: ["Terapia Sistêmica"],
      specializations: ["Terapia de Família e Casal", "Consultoria Empresarial", "Psicologia Analítica", "Terapia EMDR", "Terapia Brainspotting"],
      bio: "Especializada em Terapia de Família e Casal. Auxilia pacientes a processar experiências traumáticas e memórias dolorosas. Atendimentos online e presencial para adultos, idosos, família, casal e grupos. Oferece Consultoria Empresarial e implementação da NR-1.",
      image: mircia,
      imagePosition: "center 45%"
    },
    {
      name: "Tamires Carvalho",
      crp: "CRP 03/26522",
      specialty: "Psicóloga e Neuropsicóloga",
      approaches: ["Terapia Cognitivo-Comportamental"],
      specializations: ["Neuropsicologia", "Avaliação Neuropsicológica"],
      bio: "Atua em avaliações neuropsicológicas e psicoterapia. Atendimentos exclusivamente presenciais para crianças a partir de 3 anos, adolescentes, adultos e idosos. Foco em funções cognitivas como atenção, memória, linguagem, aprendizagem e regulação emocional.",
      image: tamires,
      imagePosition: "center 40%"
    },
    {
      name: "Anna Vitória Silva",
      crp: "CRP 03/30427",
      specialty: "Psicóloga Clínica Infantojuvenil",
      approaches: ["Terapia Cognitivo-Comportamental"],
      specializations: ["Habilidades Socioemocionais", "Regulação Emocional"],
      bio: "Atua na Psicologia Infantojuvenil com base na TCC, realizando atendimento especializado para crianças e adolescentes de 3 a 14 anos. Seu trabalho é direcionado à identificação e modificação de padrões cognitivos, emocionais e comportamentais, auxiliando na construção de habilidades socioemocionais e fortalecimento da autoestima. Realiza atendimentos presenciais com intervenções baseadas em evidências.",
      image: anna,
      imagePosition: "center 60%"
    },
    {
      name: "Isabella Magalhães",
      crp: "CRP 03/5944",
      specialty: "Psicóloga Clínica",
      approaches: ["Terapia Cognitivo-Comportamental"],
      specializations: ["Psicopatologia", "Obesidade e Emagrecimento"],
      bio: "Atuação voltada para a Terapia Cognitivo-Comportamental (TCC), auxiliando você a enfrentar questões como ansiedade, autoestima e dificuldades emocionais do dia a dia. Atende pessoas que buscam apoio no processo de emagrecimento, compreendendo os aspectos emocionais que influenciam a relação com a comida e o corpo. Tem pós-graduação em Terapia Cognitivo Comportamental e em Psicopatologia, formação em Obesidade e Emagrecimento. Realiza atendimento on-line e presencial, para adolescentes a partir de 16 anos e adultos.",
      image: isabella,
      imagePosition: "center 55%"
    },
    {
      name: "Dra. Laís Hendges",
      crp: "CRM 32638 | RQE 23413",
      specialty: "Médica Pediatra e Neuropediatra",
      approaches: [],
      specializations: ["Neurologia Infantil", "Neurodesenvolvimento", "Pediatria"],
      bio: "Formada em 2018, possui residência em Pediatria e pós-graduação em Neurologia Infantil. Atua no cuidado integral da criança e do adolescente, com foco na avaliação, diagnóstico e acompanhamento de condições neurológicas e do desenvolvimento infantil, como atrasos no desenvolvimento neuropsicomotor, transtornos do neurodesenvolvimento, epilepsia infantil e alterações do sono.",
      image: lais,
      imagePosition: "center 60%"
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
            <div className="team-carousel-container relative">
              {/* Botão Anterior */}
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute top-1/2 -left-4 md:-left-6 z-20 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-white/20 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110 focus:outline-none group"
                aria-label="Anterior"
              >
                <TbChevronLeft className="text-2xl group-hover:-translate-x-0.5 transition-transform" />
              </button>

              {/* Botão Próximo */}
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute top-1/2 -right-4 md:-right-6 z-20 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-white/20 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110 focus:outline-none group"
                aria-label="Próximo"
              >
                <TbChevronRight className="text-2xl group-hover:translate-x-0.5 transition-transform" />
              </button>

              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                grabCursor={true}
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
                className="!pb-16"
              >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index} className="!h-auto pb-6">
                  <div 
                    className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full border border-gray-100/50`}
                  >
                    {/* Imagem do Profissional */}
                    <div className="relative h-64 bg-gradient-to-br from-[#8FBC8F]/20 to-[#2F4F4F]/20 overflow-hidden shrink-0">
                      <OptimizedImage 
                        src={member.image} 
                        alt={member.name}
                        priority={index < 4}
                        imagePosition={member.imagePosition}
                      />
                      {/* Overlay com efeito hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Informações do Profissional */}
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="mb-3 text-center border-b border-gray-100 pb-3">
                        <h3 className="text-lg font-serif text-primary font-bold mb-0.5 group-hover:text-secondary transition-colors leading-tight">{member.name}</h3>
                        <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-0.5">{member.specialty}</p>
                        <p className="text-[10px] text-secondary/80 font-medium tracking-widest">{member.crp}</p>
                      </div>
                      
                      {/* Bio */}
                      <div className="flex-1 mb-2">
                        <ExpandableText
                          text={member.bio}
                          maxLength={calculateMaxBioLength(member.approaches.length, member.specializations.length)}
                          isExpanded={expandedCards[index] || false}
                          onToggle={() => toggleExpand(index)}
                          onMouseEnter={handleMouseEnterButton}
                          onMouseLeave={handleMouseLeaveButton}
                          showFullText={member.approaches.length === 0 && member.specializations.length === 0}
                        />
                      </div>
                      
                      {/* Tags (Abordagens e Especializações) - Renderiza apenas se houver conteúdo */}
                      {(member.approaches.length > 0 || member.specializations.length > 0) && (
                        <div className="space-y-2 mb-3 mt-auto">
                          {/* Abordagens - máximo 2 visíveis */}
                          {member.approaches.length > 0 && (
                            <div>
                              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-secondary"></span>
                                Abordagem
                              </p>
                              <div className="flex flex-wrap gap-1 transition-all duration-300">
                                {(expandedCards[index] ? member.approaches : member.approaches.slice(0, 2)).map((approach, idx) => (
                                  <span 
                                    key={idx} 
                                    className={`text-[10px] font-medium bg-secondary/10 text-secondary px-1.5 py-0.5 rounded border border-secondary/20 transition-all duration-300 ${idx >= 2 && expandedCards[index] ? 'animate-fade-in' : ''}`}
                                    style={idx >= 2 && expandedCards[index] ? { animationDelay: `${(idx - 2) * 50}ms` } : {}}
                                  >
                                    {approach}
                                  </span>
                                ))}
                                {!expandedCards[index] && member.approaches.length > 2 && (
                                  <span className="text-[10px] font-medium text-secondary/70 px-1.5 py-0.5 cursor-pointer hover:text-secondary transition-colors">
                                    +{member.approaches.length - 2}
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                          
                          {/* Especializações - máximo 2 visíveis */}
                          {member.specializations.length > 0 && (
                            <div>
                              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-primary"></span>
                                Especialidades
                              </p>
                              <div className="flex flex-wrap gap-1 transition-all duration-300">
                                {(expandedCards[index] ? member.specializations : member.specializations.slice(0, 2)).map((spec, idx) => (
                                  <span 
                                    key={idx} 
                                    className={`text-[10px] font-medium bg-gray-50 text-gray-600 px-1.5 py-0.5 rounded border border-gray-100 group-hover:border-primary/20 transition-all duration-300 ${idx >= 2 && expandedCards[index] ? 'animate-fade-in' : ''}`}
                                    style={idx >= 2 && expandedCards[index] ? { animationDelay: `${(idx - 2) * 50}ms` } : {}}
                                  >
                                    {spec}
                                  </span>
                                ))}
                                {!expandedCards[index] && member.specializations.length > 2 && (
                                  <span className="text-[10px] font-medium text-gray-400 px-1.5 py-0.5 cursor-pointer hover:text-gray-600 transition-colors">
                                    +{member.specializations.length - 2}
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      
                      {/* Botão de Ação */}
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <a 
                          href="#contato"
                          className="w-full flex justify-center items-center gap-2 bg-primary text-white py-2.5 px-4 rounded-xl text-xs font-bold tracking-wide hover:bg-secondary transition-all shadow-sm hover:shadow-md transform active:scale-95 duration-300"
                        >
                          Agendar Consulta
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
