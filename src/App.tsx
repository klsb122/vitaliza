import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Features from './components/Features';
import AboutUs from './components/AboutUs';
import MissionValues from './components/MissionValues';
import Cta from './components/Cta';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Lazy loading para componentes pesados abaixo do fold
const Team = lazy(() => import('./components/Team'));
const Services = lazy(() => import('./components/Services'));
const Approaches = lazy(() => import('./components/Approaches'));

// Fallback de carregamento
const LoadingFallback = () => (
  <div className="h-96 flex items-center justify-center">
    <div className="animate-pulse text-primary">Carregando...</div>
  </div>
);

function App() {
  return (
    <div className="font-sans text-text bg-[#FAF9F6] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <AboutUs />
      <MissionValues />
      <Suspense fallback={<LoadingFallback />}>
        <Team />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Services />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Approaches />
      </Suspense>
      <Cta />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
