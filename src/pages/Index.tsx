import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PricingCalculator from "@/components/PricingCalculator";
import FeaturesSection from "@/components/FeaturesSection";
import MarketplacePreview from "@/components/MarketplacePreview";
import TrustIndicators from "@/components/TrustIndicators";
import { Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="relative">
        {/* Main Content */}
        <div className="lg:mr-80">
          <HeroSection />
          <FeaturesSection />
          <MarketplacePreview />
        </div>
        
        {/* Floating Pricing Calculator - Desktop */}
        <div className="hidden lg:block fixed top-24 right-6 w-80 z-40">
          <PricingCalculator />
        </div>
        
        {/* Mobile Pricing Calculator */}
        <div className="lg:hidden px-6 py-12 bg-muted/30">
          <PricingCalculator />
        </div>
      </div>
      
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
                <li><a href="#" className="hover:text-primary transition-colors">Essay Writing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Research Papers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Thesis Writing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Dissertations</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Editing Services</a></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Live Chat</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Quality Guarantee</a></li>
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
