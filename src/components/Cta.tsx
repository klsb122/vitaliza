const Cta = () => {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Pronto para dar o primeiro passo?</h2>
        <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
          Agende uma conversa inicial e descubra como a terapia pode transformar sua vida.
        </p>
        <a href="#contato" className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all shadow-lg hover:-translate-y-1 inline-block">
          Falar com Especialista
        </a>
      </div>
    </section>
  );
};

export default Cta;
