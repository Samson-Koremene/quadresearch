import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PricingCalculator from "@/components/PricingCalculator";
import FeaturesSection from "@/components/FeaturesSection";
import MarketplacePreview from "@/components/MarketplacePreview";
import TrustIndicators from "@/components/TrustIndicators";

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
        <div className="hidden lg:block fixed top-20 right-6 w-72 z-40">
          <PricingCalculator />
        </div>
        
        {/* Mobile Pricing Calculator */}
        <div className="lg:hidden px-4 py-8 bg-muted">
          <PricingCalculator />
        </div>
      </div>
      
      <TrustIndicators />
      
      {/* Footer */}
      <footer className="bg-white border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">📝</span>
              </div>
              <span className="text-xl font-bold text-foreground">Essay Box</span>
            </div>
            
            <div className="flex space-x-6 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border text-muted-foreground">
            <p>&copy; 2024 Essay Box. All rights reserved. Professional academic writing services.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
