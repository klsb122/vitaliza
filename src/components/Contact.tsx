import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16">
        <div>
          <span className="block text-sm font-bold tracking-widest text-secondary uppercase mb-2">Fale Conosco</span>
          <h2 className="text-4xl font-serif text-primary mb-6">Entre em Contato</h2>
          <p className="text-light-text mb-10">
            Estamos aqui para ouvir você. Envie uma mensagem ou entre em contato pelos canais abaixo.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#FAF9F6] rounded-full flex items-center justify-center text-primary text-xl shrink-0">
                <FaPhone />
              </div>
              <div>
                <h4 className="text-lg font-serif text-primary mb-1">Telefone / WhatsApp</h4>
                <p className="text-light-text">(11) 99999-9999</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#FAF9F6] rounded-full flex items-center justify-center text-primary text-xl shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-lg font-serif text-primary mb-1">Email</h4>
                <p className="text-light-text">contato@vitaliza.com.br</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#FAF9F6] rounded-full flex items-center justify-center text-primary text-xl shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-lg font-serif text-primary mb-1">Endereço</h4>
                <p className="text-light-text">Av. Paulista, 1000 - São Paulo, SP</p>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 mt-10">
            {[<FaInstagram />, <FaFacebook />, <FaLinkedin />].map((icon, index) => (
              <a key={index} href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-text hover:bg-primary hover:text-white hover:border-primary transition-all">
                {icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-primary font-medium mb-2">Nome Completo</label>
              <input type="text" id="name" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-[#8FBC8F]/20 transition-all" placeholder="Seu nome" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-primary font-medium mb-2">E-mail</label>
              <input type="email" id="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-[#8FBC8F]/20 transition-all" placeholder="seu@email.com" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-primary font-medium mb-2">Telefone</label>
              <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-[#8FBC8F]/20 transition-all" placeholder="(DD) 99999-9999" />
            </div>
            <div>
              <label htmlFor="message" className="block text-primary font-medium mb-2">Mensagem</label>
              <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-[#8FBC8F]/20 transition-all" placeholder="Como podemos ajudar?" required></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-accent transition-all shadow-md hover:shadow-lg">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
