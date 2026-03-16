import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id: string) => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/?section=${id}`);
    }
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Slim announcement bar */}
      <div className="bg-primary text-primary-foreground py-1.5 px-4 text-center text-xs font-medium">
        🎓 Get 15% off your first order — use code <span className="font-bold">WELCOME15</span>
      </div>

      <header className="bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">

          {/* Logo */}
          <button onClick={() => { navigate('/'); setIsMenuOpen(false); }} className="flex items-center gap-3">
            <img src="/favicon.ico" alt="Quad Research" className="w-9 h-9 rounded-xl shadow-md shadow-primary/30" />
            <div className="text-left">
              <div className="text-[15px] font-bold text-foreground leading-none">Quad Research</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">Academic Excellence</div>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {[
              { label: "Services",      action: () => goToSection('services-section') },
              { label: "How It Works",  action: () => navigate('/how-it-works')       },
              { label: "Browse Papers", action: () => navigate('/products')            },
              { label: "FAQ",           action: () => navigate('/faq')                 },
            ].map(({ label, action }) => (
              <button key={label} onClick={action}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a href="tel:+2347012847111"
              className="hidden lg:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5" />
              +2347012847111
            </a>
            <Button
              className="hidden lg:flex rounded-xl font-semibold px-5 shadow-md shadow-primary/20"
              onClick={() => window.open('https://wa.me/2347012847111', '_blank')}>
              Order Now
            </Button>
            <button className="lg:hidden p-1.5 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white shadow-lg">
            <nav className="container mx-auto px-4 py-5 space-y-1">
              {[
                { label: "Services",      action: () => goToSection('services-section') },
                { label: "How It Works",  action: () => navigate('/how-it-works')       },
                { label: "Browse Papers", action: () => navigate('/products')            },
                { label: "FAQ",           action: () => navigate('/faq')                 },
              ].map(({ label, action }) => (
                <button key={label} onClick={action}
                  className="block w-full text-left px-3 py-2.5 rounded-xl text-foreground hover:bg-accent hover:text-primary font-medium text-sm transition-colors">
                  {label}
                </button>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <a href="tel:+2347012847111" className="flex items-center gap-2 px-3 py-2 text-muted-foreground text-sm">
                  <Phone className="w-4 h-4" /> +2347012847111
                </a>
                <Button className="w-full rounded-xl font-semibold"
                  onClick={() => window.open('https://wa.me/2347012847111', '_blank')}>
                  Order Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
