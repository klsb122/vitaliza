import { useState } from 'react';
import { TbBrain, TbPuzzle, TbFocus2, TbUsers, TbHeart, TbEye, TbChevronDown, TbChevronUp } from 'react-icons/tb';
import ScrollAnimation from './ScrollAnimation';

interface Approach {
  icon: React.ElementType;
  title: string;
  shortTitle: string;
  description: string;
  indications: string[];
}

const Approaches = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const approaches: Approach[] = [
    {
      icon: TbBrain,
      title: "Terapia Cognitivo-Comportamental (TCC)",
      shortTitle: "TCC",
      description: "A TCC é uma abordagem estruturada e baseada em evidências científicas. Parte do princípio de que pensamentos, emoções e comportamentos estão interligados. O psicólogo auxilia o paciente a identificar padrões de pensamento disfuncionais e a desenvolver estratégias cognitivas e comportamentais mais adaptativas.",
      indications: ["Ansiedade", "Depressão", "Estresse", "Fobias", "Transtornos emocionais"]
    },
    {
      icon: TbPuzzle,
      title: "Terapia do Esquema Cognitivo",
      shortTitle: "Esquema",
      description: "A Terapia do Esquema é uma ampliação da TCC, indicada para demandas emocionais mais profundas e padrões de comportamento repetitivos ao longo da vida. Trabalha os esquemas iniciais desadaptativos, que são crenças e emoções formadas na infância e adolescência.",
      indications: ["Dificuldades nos relacionamentos", "Baixa autoestima", "Abandono", "Dependência emocional", "Transtornos de personalidade"]
    },
    {
      icon: TbFocus2,
      title: "Gestalt-terapia",
      shortTitle: "Gestalt",
      description: "A Gestalt-terapia tem como foco o aqui e agora, auxiliando o paciente a ampliar a consciência sobre seus sentimentos, pensamentos e comportamentos no momento presente. Essa abordagem entende que o aumento da percepção favorece escolhas mais responsáveis e saudáveis.",
      indications: ["Ansiedade", "Conflitos emocionais", "Dificuldades nos relacionamentos", "Autoconhecimento"]
    },
    {
      icon: TbUsers,
      title: "Abordagem Sistêmica",
      shortTitle: "Sistêmica",
      description: "A Psicologia Sistêmica compreende o indivíduo dentro dos contextos relacionais dos quais faz parte, como família, casal e outros grupos sociais. O foco do trabalho do psicólogo está nos padrões de interação e comunicação.",
      indications: ["Atendimento individual", "Terapia de casal", "Terapia familiar", "Resolução de conflitos", "Fortalecimento de vínculos"]
    },
    {
      icon: TbHeart,
      title: "Abordagem Humanista",
      shortTitle: "Humanista",
      description: "A abordagem humanista valoriza a experiência subjetiva do indivíduo e acredita no potencial de crescimento e autorrealização de cada pessoa. O psicólogo oferece um espaço de escuta empática, acolhedora e sem julgamentos.",
      indications: ["Desenvolvimento emocional", "Autonomia", "Autoconhecimento", "Relação consigo mesmo", "Relações interpessoais"]
    },
    {
      icon: TbEye,
      title: "EMDR",
      shortTitle: "EMDR",
      description: "O EMDR (Dessensibilização e Reprocessamento por Movimentos Oculares) é uma abordagem psicológica reconhecida cientificamente para o tratamento de traumas psicológicos. Atua no reprocessamento de memórias traumáticas que permanecem associadas a sofrimento emocional no presente.",
      indications: ["TEPT", "Traumas emocionais", "Luto complicado", "Ansiedade", "Fobias", "Experiências marcantes"]
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="abordagens" className="py-24 bg-gradient-to-b from-[#FAF9F6] via-primary/5 to-[#FAF9F6] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-80 h-80 bg-secondary/10 rounded-full translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/10 rounded-full -translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <ScrollAnimation direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="block text-sm font-bold tracking-widest text-secondary uppercase mb-2">
              Abordagens Psicológicas
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
              Formas de Cuidar da Sua Mente
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full mb-8"></div>
            <p className="text-light-text text-lg leading-relaxed">
              Na psicologia, existem diferentes abordagens teóricas que orientam a forma como o psicólogo 
              compreende o sofrimento emocional e conduz o processo psicoterapêutico. Todas possuem 
              embasamento científico e são escolhidas de acordo com as necessidades de cada pessoa.
            </p>
          </div>
        </ScrollAnimation>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approaches.map((approach, index) => {
            const IconComponent = approach.icon;
            const isExpanded = expandedCard === index;
            
            return (
              <ScrollAnimation key={index} direction="up" delay={index * 0.1}>
                <div 
                  className={`bg-white rounded-2xl shadow-lg border border-secondary/10 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group h-full flex flex-col ${isExpanded ? 'ring-2 ring-secondary' : ''}`}
                >
                  {/* Card Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="text-white text-2xl" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-serif text-primary leading-tight">{approach.title}</h3>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className={`text-light-text text-sm leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
                      {approach.description}
                    </p>
                  </div>

                  {/* Indications */}
                  <div className={`px-6 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-48 pb-4' : 'max-h-0'}`}>
                    <div className="pt-4 border-t border-secondary/20">
                      <span className="text-xs font-bold text-secondary uppercase tracking-wider">Indicações:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {approach.indications.map((indication, i) => (
                          <span key={i} className="text-xs bg-secondary/10 text-primary px-3 py-1 rounded-full">
                            {indication}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Toggle Button */}
                  <button
                    onClick={() => toggleCard(index)}
                    className="mt-auto px-6 py-4 border-t border-secondary/10 flex items-center justify-center gap-2 text-sm font-medium text-primary hover:text-secondary hover:bg-secondary/5 transition-all"
                  >
                    {isExpanded ? (
                      <>Ver menos <TbChevronUp className="text-lg" /></>
                    ) : (
                      <>Saiba mais <TbChevronDown className="text-lg" /></>
                    )}
                  </button>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollAnimation direction="up" delay={0.3}>
          <div className="text-center mt-16">
            <p className="text-light-text mb-6">
              Não sabe qual abordagem é ideal para você? Nossos profissionais podem ajudar a encontrar o melhor caminho.
            </p>
            <a 
              href="#contato" 
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-accent transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Agendar uma Consulta
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Approaches;
