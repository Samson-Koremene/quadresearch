import { Button } from "@/components/ui/button";
import { ArrowLeft, PenTool, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EssayWriting = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-card border-b border-border py-4">
        <div className="container mx-auto px-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <PenTool className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Professional Essay Writing Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get expertly crafted essays tailored to your specific requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">What We Offer</h3>
              <ul className="space-y-3">
                {[
                  "Academic Essays (All Levels)",
                  "Argumentative Essays",
                  "Descriptive Essays", 
                  "Narrative Essays",
                  "Expository Essays",
                  "Compare & Contrast Essays"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Why Choose Us</h3>
              <ul className="space-y-3">
                {[
                  "100% Original Content",
                  "Expert Writers",
                  "On-Time Delivery",
                  "24/7 Support",
                  "Unlimited Revisions",
                  "Plagiarism-Free Guarantee"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold"
              onClick={() => {
                const whatsappURL = 'https://wa.me/2347012847111?text=Hello! I would like to order an essay writing service. Please provide me with more details.';
                window.open(whatsappURL, '_blank');
              }}
            >
              Get Started - Calculate Price
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EssayWriting;