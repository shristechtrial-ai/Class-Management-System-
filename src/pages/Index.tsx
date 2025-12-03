import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ModulesSection } from "@/components/sections/ModulesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { LoginModal } from "@/components/modals/LoginModal";
import { siteConfig } from "@/config/site";

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>{siteConfig.name} | Smart Education Management Platform</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="keywords" content="class management system, school management software, attendance tracking, fee management, student enrollment, education ERP, coaching center software" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${siteConfig.name} | Smart Education Management Platform`} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${siteConfig.name} | Smart Education Management Platform`} />
        <meta name="twitter:description" content={siteConfig.description} />
        
        {/* Canonical */}
        <link rel="canonical" href="https://classmanagement.shristech.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header 
          onLoginClick={() => setIsLoginOpen(true)} 
          onDemoClick={scrollToContact}
        />
        
        <main>
          <HeroSection onDemoClick={scrollToContact} />
          <StatsSection />
          <FeaturesSection />
          <ModulesSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <div ref={contactRef}>
            <ContactSection />
          </div>
        </main>

        <Footer />

        <LoginModal 
          isOpen={isLoginOpen} 
          onClose={() => setIsLoginOpen(false)} 
        />
      </div>
    </>
  );
};

export default Index;
