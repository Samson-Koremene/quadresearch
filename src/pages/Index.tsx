import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MarketplacePreview from "@/components/MarketplacePreview";
import TrustIndicators from "@/components/TrustIndicators";
import { Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <MarketplacePreview />
      </main>
      
      <TrustIndicators />
      
      {/* Professional Footer */}
      <footer id="services-section" className="bg-card border-t border-border py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
            
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">QuadResearch</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Academic Excellence</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Professional academic writing services helping students achieve excellence 
                across all educational levels with guaranteed quality and confidentiality.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+2347012847111</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>support@quadresearch.com</span>
                </div>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><button onClick={() => navigate('/essay-writing')} className="hover:text-primary transition-colors text-left">Essay Writing</button></li>
                <li><button onClick={() => navigate('/research-papers')} className="hover:text-primary transition-colors text-left">Research Papers</button></li>
                <li><button onClick={() => {
                  const whatsappURL = 'https://wa.me/2347012847111?text=Hello! I would like to order thesis writing services.';
                  window.open(whatsappURL, '_blank');
                }} className="hover:text-primary transition-colors text-left">Thesis Writing</button></li>
                <li><button onClick={() => {
                  const whatsappURL = 'https://wa.me/2347012847111?text=Hello! I would like to order dissertation writing services.';
                  window.open(whatsappURL, '_blank');
                }} className="hover:text-primary transition-colors text-left">Dissertations</button></li>
                <li><button onClick={() => navigate('/products')} className="hover:text-primary transition-colors text-left">Browse All Papers</button></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><button onClick={() => navigate('/how-it-works')} className="hover:text-primary transition-colors text-left">How It Works</button></li>
                <li><button onClick={() => navigate('/faq')} className="hover:text-primary transition-colors text-left">FAQ</button></li>
                <li><button onClick={() => window.open('https://wa.me/2347012847111', '_blank')} className="hover:text-primary transition-colors text-left">Contact Us</button></li>
                <li><button onClick={() => window.open('https://wa.me/2347012847111', '_blank')} className="hover:text-primary transition-colors text-left">Live Chat</button></li>
                <li><button onClick={() => navigate('/faq')} className="hover:text-primary transition-colors text-left">Quality Guarantee</button></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-muted-foreground text-sm">
                © 2024 EssayPro. All rights reserved. Professional academic writing services.
              </div>
              <div className="flex space-x-6 text-muted-foreground text-sm">
                <button onClick={() => navigate('/faq')} className="hover:text-primary transition-colors">Privacy Policy</button>
                <button onClick={() => navigate('/faq')} className="hover:text-primary transition-colors">Terms of Service</button>
                <button onClick={() => navigate('/faq')} className="hover:text-primary transition-colors">Cookie Policy</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
