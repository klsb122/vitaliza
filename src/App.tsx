import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Features from './components/Features';
import AboutUs from './components/AboutUs';
import MissionValues from './components/MissionValues';
import Team from './components/Team';
import Services from './components/Services';
import Approaches from './components/Approaches';
import Cta from './components/Cta';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-text bg-[#FAF9F6] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <AboutUs />
      <MissionValues />
      <Team />
      <Services />
      <Approaches />
      <Cta />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
