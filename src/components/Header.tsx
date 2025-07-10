import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Professional Announcement Bar */}
      <div className="bg-primary text-primary-foreground py-2 md:py-3 px-4 text-center text-xs md:text-sm font-medium">
        <span className="hidden sm:inline">Professional Academic Writing Services - Get 15% off your first order with code WELCOME15</span>
        <span className="sm:hidden">Get 15% off with code WELCOME15</span>
      </div>
      
      {/* Clean Professional Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Professional Logo */}
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-base md:text-lg">E</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg md:text-xl font-semibold text-foreground">EssayPro</h1>
                <p className="text-xs text-muted-foreground">Academic Excellence</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <button onClick={scrollToServices} className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">
                Services
              </button>
              <button onClick={() => window.location.href = '/calculator'} className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">
                Pricing
              </button>
              <button onClick={() => window.location.href = '/calculator'} className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">
                Samples
              </button>
              <div className="flex items-center space-x-2 text-foreground">
                <Phone className="w-4 h-4" />
                <span className="font-medium text-sm xl:text-base">+2347012847111</span>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            
            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
              <Button size="lg" className="font-semibold px-4 xl:px-6 text-sm xl:text-base" onClick={() => window.location.href = '/products'}>
                Order Now
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg z-40">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <button 
                onClick={scrollToServices}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Services
              </button>
              <button onClick={() => window.location.href = '/calculator'} className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
                Pricing
              </button>
              <button onClick={() => window.location.href = '/calculator'} className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
                Samples
              </button>
              <div className="flex items-center space-x-2 py-2 text-foreground">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+2347012847111</span>
              </div>
              <div className="flex flex-col space-y-2 pt-2">
                <Button size="lg" className="w-full font-semibold" onClick={() => window.location.href = '/products'}>
                  Order Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;