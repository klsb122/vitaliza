import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaWhatsapp, FaClock } from 'react-icons/fa';
import ScrollAnimation from './ScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const serviceLabels: { [key: string]: string } = {
    individual: 'Terapia Individual',
    casal: 'Terapia de Casal',
    infantil: 'Terapia Infantil',
    psiquiatria: 'Psiquiatria',
    neuropediatria: 'Neuropediatria',
    avaliacoes: 'Avaliações Psicológicas',
    outro: 'Outro'
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Monta a mensagem formatada para o WhatsApp
    let whatsappMessage = `Olá! Gostaria de agendar uma consulta na Vitaliza.\n\n`;
    whatsappMessage += `*Nome:* ${formData.name}\n`;
    whatsappMessage += `*WhatsApp:* ${formData.phone}\n`;
    
    if (formData.email) {
      whatsappMessage += `*E-mail:* ${formData.email}\n`;
    }
    
    if (formData.service) {
      whatsappMessage += `*Tipo de Atendimento:* ${serviceLabels[formData.service] || formData.service}\n`;
    }
    
    if (formData.message) {
      whatsappMessage += `\n*Mensagem:*\n${formData.message}`;
    }

    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Abre o WhatsApp com a mensagem pronta
    window.open(`https://wa.me/5577999303592?text=${encodedMessage}`, '_blank');
  };

  const contactInfo = [
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "(77) 99930-3592",
      link: "https://wa.me/5577999303592?text=Olá! Gostaria de agendar uma consulta na Vitaliza.",
      highlight: true
    },
    {
      icon: <FaPhone />,
      title: "Telefone",
      value: "(77) 99930-3592",
      link: "tel:+5577999303592"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "contato@vitaliza.com.br",
      link: "mailto:contato@vitaliza.com.br"
    },
    {
      icon: <FaClock />,
      title: "Horário",
      value: "Seg - Sex: 8h às 20h | Sáb: 8h às 12h"
    }
  ];

  const socialLinks = [
    { icon: <FaInstagram />, href: "https://www.instagram.com/vitalizasaudemental/", label: "Instagram" },
    { icon: <FaWhatsapp />, href: "https://wa.me/5577999303592", label: "WhatsApp" }
  ];

  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-white to-[#FAF9F6]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-16">
            <span className="block text-sm font-bold tracking-widest text-secondary uppercase mb-2">Fale Conosco</span>
            <h2 className="text-4xl font-serif text-primary mb-4">Estamos Aqui Para Você</h2>
            <p className="text-light-text max-w-2xl mx-auto">
              Dê o primeiro passo para o seu bem-estar. Entre em contato e agende sua consulta.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Coluna Esquerda - Informações e Mapa */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cards de Contato */}
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <ScrollAnimation key={index} direction="right" delay={index * 0.1}>
                  <a
                    href={item.link || "#"}
                    className={`block p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 h-full ${
                      item.highlight 
                        ? 'bg-primary text-white col-span-2 hover:bg-accent shadow-lg' 
                        : 'bg-white border border-gray-100 hover:shadow-lg hover:border-secondary/30'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg mb-3 ${
                      item.highlight ? 'bg-white/20' : 'bg-[#FAF9F6] text-primary'
                    }`}>
                      {item.icon}
                    </div>
                    <p className={`text-xs font-medium mb-1 ${item.highlight ? 'text-white/80' : 'text-light-text'}`}>
                      {item.title}
                    </p>
                    <p className={`font-semibold text-sm ${item.highlight ? 'text-white' : 'text-primary'}`}>
                      {item.value}
                    </p>
                  </a>
                </ScrollAnimation>
              ))}
            </div>

            {/* Endereço com Mapa */}
            <ScrollAnimation direction="right" delay={0.3}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.440885645932!2d-45.7941419!3d-12.081940799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x934a714460139a21%3A0x48f6fea42cad2090!2sVitaliza%20Sa%C3%BAde%20Mental!5e0!3m2!1spt-BR!2sbr!4v1764277634309!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="200" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Vitaliza Saúde Mental"
                  className="w-full"
                />
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#FAF9F6] rounded-full flex items-center justify-center text-primary shrink-0">
                      <FaMapMarkerAlt className="text-sm" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-sm">Vitaliza Saúde Mental</p>
                      <p className="text-light-text text-sm">Luís Eduardo Magalhães - BA</p>
                    </div>
                  </div>
                  <a 
                    href="https://maps.app.goo.gl/ieuMGQqPVFff5LgbA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-secondary text-sm font-medium hover:text-primary transition-colors"
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>
            </ScrollAnimation>

            {/* Redes Sociais */}
            <ScrollAnimation direction="right" delay={0.4}>
              <div className="flex items-center gap-4">
                <span className="text-sm text-light-text">Siga-nos:</span>
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.href} 
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-text hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </ScrollAnimation>
          </div>

          {/* Coluna Direita - Formulário */}
          <div className="lg:col-span-3">
            <ScrollAnimation direction="left" delay={0.2}>
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-serif text-primary mb-2">Envie uma Mensagem</h3>
                <p className="text-light-text text-sm mb-8">Preencha o formulário abaixo e retornaremos em breve.</p>
                
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-primary text-sm font-medium mb-2">
                        Nome Completo <span className="text-red-400">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#FAF9F6] border border-transparent rounded-xl focus:outline-none focus:border-secondary focus:bg-white focus:ring-2 focus:ring-[#8FBC8F]/20 transition-all" 
                        placeholder="Seu nome completo" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-primary text-sm font-medium mb-2">
                        WhatsApp <span className="text-red-400">*</span>
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#FAF9F6] border border-transparent rounded-xl focus:outline-none focus:border-secondary focus:bg-white focus:ring-2 focus:ring-[#8FBC8F]/20 transition-all" 
                        placeholder="(00) 00000-0000" 
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-primary text-sm font-medium mb-2">
                      E-mail
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-transparent rounded-xl focus:outline-none focus:border-secondary focus:bg-white focus:ring-2 focus:ring-[#8FBC8F]/20 transition-all" 
                      placeholder="seu@email.com" 
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-primary text-sm font-medium mb-2">
                      Tipo de Atendimento
                    </label>
                    <select 
                      id="service"
                      value={formData.service}
                      onChange={handleChange} 
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-transparent rounded-xl focus:outline-none focus:border-secondary focus:bg-white focus:ring-2 focus:ring-[#8FBC8F]/20 transition-all text-text"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="individual">Terapia Individual</option>
                      <option value="casal">Terapia de Casal</option>
                      <option value="infantil">Terapia Infantil</option>
                      <option value="psiquiatria">Psiquiatria</option>
                      <option value="neuropediatria">Neuropediatria</option>
                      <option value="avaliacoes">Avaliações Psicológicas</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-primary text-sm font-medium mb-2">
                      Mensagem
                    </label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-transparent rounded-xl focus:outline-none focus:border-secondary focus:bg-white focus:ring-2 focus:ring-[#8FBC8F]/20 transition-all resize-none" 
                      placeholder="Conte um pouco sobre o que você busca..."
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit" 
                      className="w-full bg-[#25D366] text-white py-4 rounded-xl font-medium hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                      <FaWhatsapp className="text-lg" />
                      Enviar pelo WhatsApp
                    </button>
                  </div>

                  <p className="text-xs text-light-text text-center pt-2">
                    Ao enviar, você concorda com nossa política de privacidade.
                  </p>
                </form>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
