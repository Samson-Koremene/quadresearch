import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
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
            
            {/* Professional Navigation - Always visible */}
            <nav className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium text-sm md:text-base">
                Services
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium text-sm md:text-base">
                Pricing
              </a>
              <a href="#samples" className="text-foreground hover:text-primary transition-colors font-medium text-sm md:text-base">
                Samples
              </a>
              <div className="hidden md:flex items-center space-x-2 text-foreground">
                <Phone className="w-4 h-4" />
                <span className="font-medium text-sm lg:text-base">+234 815 218 5013</span>
              </div>
            </nav>
            
            {/* Professional CTA Buttons */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button variant="ghost" className="hidden sm:flex font-medium text-sm md:text-base">
                Sign In
              </Button>
              <Button size="lg" className="font-semibold px-4 md:px-6 text-sm md:text-base">
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;