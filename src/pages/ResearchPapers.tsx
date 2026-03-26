import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const ResearchPapers = () => {
  const navigate = useNavigate();
  useSEO({
    title: "Research Paper Writing Service Nigeria — APA, MLA, Harvard",
    description: "Expert research paper writing for Nigerian students. Literature reviews, data analysis, methodology, all citation styles. PhD-qualified writers, plagiarism-free guarantee.",
    canonical: "/research-papers",
    keywords: "research paper writing Nigeria, APA research paper, MLA format Nigeria, Harvard referencing, literature review writing, research methodology Nigeria, academic research help",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Research Paper Writing Service",
        "provider": { "@id": "https://quadtechsolutions.online/#organization" },
        "description": "Expert research paper writing for Nigerian students. Literature reviews, data analysis, methodology, all citation styles — APA, MLA, Harvard, Chicago, IEEE.",
        "areaServed": { "@type": "Country", "name": "Nigeria" },
        "serviceType": "Research Paper Writing",
        "url": "https://quadtechsolutions.online/research-papers"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://quadtechsolutions.online/" },
          { "@type": "ListItem", "position": 2, "name": "Research Papers", "item": "https://quadtechsolutions.online/research-papers" }
        ]
      }
    ],
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Research Paper Writing Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive research papers with proper citations and methodology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Research Areas</h3>
              <ul className="space-y-3">
                {[
                  "Literature Review",
                  "Data Analysis",
                  "Methodology Design",
                  "Statistical Research",
                  "Case Studies",
                  "Field Research"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Citation Styles</h3>
              <ul className="space-y-3">
                {[
                  "APA Format",
                  "MLA Style",
                  "Chicago Style",
                  "Harvard Referencing",
                  "IEEE Format",
                  "Custom Formatting"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold"
              onClick={() => {
                const whatsappURL = 'https://wa.me/2347012847111?text=Hello! I would like to order research paper writing services.';
                window.open(whatsappURL, '_blank');
              }}
            >
              Start Your Research Project
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchPapers;