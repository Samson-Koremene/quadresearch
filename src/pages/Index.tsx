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
      <footer className="bg-card border-t border-border py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">E</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">EssayPro</h3>
                  <p className="text-sm text-muted-foreground">Academic Excellence</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Professional academic writing services helping students achieve excellence 
                across all educational levels with guaranteed quality and confidentiality.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+1 (800) 398-0091</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>support@essaypro.com</span>
                </div>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><button onClick={() => navigate('/essay-writing')} className="hover:text-primary transition-colors text-left">Essay Writing</button></li>
                <li><button onClick={() => navigate('/research-papers')} className="hover:text-primary transition-colors text-left">Research Papers</button></li>
                <li><button onClick={() => navigate('/calculator')} className="hover:text-primary transition-colors text-left">Thesis Writing</button></li>
                <li><button onClick={() => navigate('/calculator')} className="hover:text-primary transition-colors text-left">Dissertations</button></li>
                <li><button onClick={() => navigate('/calculator')} className="hover:text-primary transition-colors text-left">Editing Services</button></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><button onClick={() => navigate('/how-it-works')} className="hover:text-primary transition-colors text-left">How It Works</button></li>
                <li><button onClick={() => navigate('/faq')} className="hover:text-primary transition-colors text-left">FAQ</button></li>
                <li><button onClick={() => window.open('https://wa.me/YOUR_WHATSAPP_NUMBER', '_blank')} className="hover:text-primary transition-colors text-left">Contact Us</button></li>
                <li><button onClick={() => window.open('https://wa.me/YOUR_WHATSAPP_NUMBER', '_blank')} className="hover:text-primary transition-colors text-left">Live Chat</button></li>
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
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
