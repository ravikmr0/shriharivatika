import Hero from '../components/Hero';
import ProjectsGrid from '../components/ProjectsGrid';
import WhyJewar from '../components/WhyJewar';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProjectsGrid />
      <WhyJewar />
      <Gallery />
      <Testimonials />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;