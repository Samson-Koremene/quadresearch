import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-gradient-primary text-primary-foreground text-sm py-2 px-4 text-center animate-fade-in">
        <span>🔥 All the same ESSAYBOX in a new design! Special offer for our client: Click to order with 15% discount</span>
        <span className="ml-2 bg-white/20 px-2 py-1 rounded text-xs font-semibold">FIRST15</span>
      </div>
      
      {/* Main Header */}
      <header className="bg-white border-b border-border shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">📝</span>
              </div>
              <span className="text-xl font-bold text-foreground">Essay Box</span>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Become a Writer
              </a>
              <a href="tel:+18003980091" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                📞 +1 (800) 398 0091
              </a>
            </nav>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden sm:flex">
                Sign In
              </Button>
              <Button className="bg-gradient-primary border-none shadow-medium hover:shadow-strong transition-all duration-300">
                Order Paper
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;