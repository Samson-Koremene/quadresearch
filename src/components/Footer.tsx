import { Mail, Phone, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[hsl(216,35%,10%)] text-white">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src="/favicon.ico" alt="Quad Research" className="w-9 h-9 rounded-xl" />
              <div>
                <div className="text-base font-bold leading-none">Quad Research</div>
                <div className="text-[10px] text-white/40 mt-0.5">Academic Excellence</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              Professional academic writing services helping students achieve excellence across all educational levels with guaranteed quality and confidentiality.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+2347012847111" className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm transition-colors">
                <Phone className="w-4 h-4" /> +2347012847111
              </a>
              <a href="mailto:support@quadresearch.com" className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4" /> support@quadresearch.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Essay Writing",   action: () => navigate("/essay-writing")   },
                { label: "Research Papers", action: () => navigate("/research-papers") },
                { label: "Thesis Writing",  action: () => window.open("https://wa.me/2347012847111?text=Hello! I need thesis writing services.", "_blank") },
                { label: "Dissertations",   action: () => window.open("https://wa.me/2347012847111?text=Hello! I need dissertation services.", "_blank") },
                { label: "Browse Papers",   action: () => navigate("/products")        },
              ].map(({ label, action }) => (
                <li key={label}>
                  <button onClick={action} className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-1 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Support</h4>
            <ul className="space-y-3">
              {[
                { label: "How It Works",      action: () => navigate("/how-it-works") },
                { label: "FAQ",               action: () => navigate("/faq")          },
                { label: "Contact Us",        action: () => window.open("https://wa.me/2347012847111", "_blank") },
                { label: "Live Chat",         action: () => window.open("https://wa.me/2347012847111", "_blank") },
                { label: "Quality Guarantee", action: () => navigate("/faq")          },
              ].map(({ label, action }) => (
                <li key={label}>
                  <button onClick={action} className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-1 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm"> © 2026 Quad Research. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(label => (
              <button key={label} onClick={() => navigate("/faq")}
                className="text-white/30 hover:text-white/70 text-sm transition-colors">
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
