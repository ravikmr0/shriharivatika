
import Hero from '../components/Hero';
import About from '../components/About';
import Project from '../components/Project';
import WhyJewar from '../components/WhyJewar';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Project />
      <WhyJewar />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
