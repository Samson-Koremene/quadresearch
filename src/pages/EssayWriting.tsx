import { Button } from "@/components/ui/button";
import { PenTool, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const EssayWriting = () => {
  const navigate = useNavigate();
  useSEO({
    title: "Essay Writing Service Nigeria — All Academic Levels",
    description: "Professional essay writing for Nigerian students. Argumentative, descriptive, narrative, expository essays — all levels from high school to PhD. 100% original, on-time delivery.",
    canonical: "/essay-writing",
    keywords: "essay writing service Nigeria, buy essay Nigeria, argumentative essay writing, descriptive essay, narrative essay, academic essay Nigeria, essay help Nigeria",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Essay Writing Service",
        "provider": { "@id": "https://quadtechsolutions.online/#organization" },
        "description": "Professional essay writing for Nigerian students at all academic levels. Argumentative, descriptive, narrative, expository and compare & contrast essays.",
        "areaServed": { "@type": "Country", "name": "Nigeria" },
        "serviceType": "Essay Writing",
        "url": "https://quadtechsolutions.online/essay-writing"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://quadtechsolutions.online/" },
          { "@type": "ListItem", "position": 2, "name": "Essay Writing", "item": "https://quadtechsolutions.online/essay-writing" }
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
              <PenTool className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Professional Essay Writing Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get expertly crafted essays tailored to your specific requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">What We Offer</h3>
              <ul className="space-y-3">
                {[
                  "Academic Essays (All Levels)",
                  "Argumentative Essays",
                  "Descriptive Essays", 
                  "Narrative Essays",
                  "Expository Essays",
                  "Compare & Contrast Essays"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Why Choose Us</h3>
              <ul className="space-y-3">
                {[
                  "100% Original Content",
                  "Expert Writers",
                  "On-Time Delivery",
                  "24/7 Support",
                  "Unlimited Revisions",
                  "Plagiarism-Free Guarantee"
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
                const whatsappURL = 'https://wa.me/2347012847111?text=Hello! I would like to order an essay writing service. Please provide me with more details.';
                window.open(whatsappURL, '_blank');
              }}
            >
              Get Started - Calculate Price
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EssayWriting;