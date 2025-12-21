import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Features from './components/Features';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Cta from './components/Cta';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-text bg-[#FAF9F6] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Team />
      <Services />
      <Cta />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
