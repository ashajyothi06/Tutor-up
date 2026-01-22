import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FindTutorSection from '@/components/FindTutorSection';
import AboutSection from '@/components/AboutSection';
import ContentSection from '@/components/ContentSection';
import CoursesSection from '@/components/CoursesSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WorkshopGallerySection from '@/components/WorkGallery';
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
       
        <AboutSection />
        <WorkshopGallerySection/>
         <FindTutorSection />
        <ContentSection />
        <CoursesSection />
        <FeaturesSection />
        
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
