import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustIndicators from "@/components/TrustIndicators";
import FeaturesSection from "@/components/FeaturesSection";
import GrowthSection from "@/components/GrowthSection";
import MarketplacePreview from "@/components/MarketplacePreview";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useSEO from "@/hooks/useSEO";

const Index = () => {
  const location = useLocation();

  useSEO({
    title: "Professional Academic Writing Services in Nigeria",
    description: "PhD-qualified writers for essays, research papers, theses and dissertations. 100% plagiarism-free, confidential, on-time delivery. Trusted by 55,000+ Nigerian students.",
    canonical: "/",
    keywords: "academic writing Nigeria, essay writing service Nigeria, research paper writing, thesis writing Nigeria, dissertation help, plagiarism-free papers",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://quadtechsolutions.online/#webpage",
      "url": "https://quadtechsolutions.online/",
      "name": "Professional Academic Writing Services in Nigeria | Quad Research",
      "description": "PhD-qualified writers for essays, research papers, theses and dissertations. 100% plagiarism-free, confidential, on-time delivery.",
      "isPartOf": { "@id": "https://quadtechsolutions.online/#website" },
      "about": { "@id": "https://quadtechsolutions.online/#business" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://quadtechsolutions.online/" }]
      }
    },
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (section) {
      // slight delay to let the page render first
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <GrowthSection />
        <TrustIndicators />
        <MarketplacePreview />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
