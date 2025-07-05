import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";

const Header = () => {
  return (
    <>
      {/* Professional Announcement Bar */}
      <div className="bg-primary text-primary-foreground py-3 px-4 text-center text-sm font-medium">
        <span>Professional Academic Writing Services - Get 15% off your first order with code WELCOME15</span>
      </div>
      
      {/* Clean Professional Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Professional Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-foreground">EssayPro</h1>
                <p className="text-xs text-muted-foreground">Academic Excellence</p>
              </div>
            </div>
            
            {/* Professional Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
                Services
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium">
                Pricing
              </a>
              <a href="#samples" className="text-foreground hover:text-primary transition-colors font-medium">
                Samples
              </a>
              <div className="flex items-center space-x-2 text-foreground">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+1 (800) 398-0091</span>
              </div>
            </nav>
            
            {/* Professional CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden sm:flex font-medium">
                Sign In
              </Button>
              <Button size="lg" className="font-semibold px-6">
                Order Now
              </Button>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;