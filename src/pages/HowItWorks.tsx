import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, FileText, CheckCircle, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: MessageCircle,
      title: "1. Contact Us",
      description: "Contact us via WhatsApp with your requirements and get a personalized quote"
    },
    {
      icon: FileText,
      title: "2. Place Order",
      description: "Provide detailed instructions and make payment to confirm your order"
    },
    {
      icon: CheckCircle,
      title: "3. We Write",
      description: "Our expert writers craft your paper according to your specifications"
    },
    {
      icon: Download,
      title: "4. Receive Paper",
      description: "Get your completed, plagiarism-free paper within the agreed deadline"
    }
  ];

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
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              How It Works
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Simple steps to get your academic paper written professionally
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-card p-8 rounded-lg border border-border mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              What Information Do We Need?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Basic Requirements</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Academic level (High School to PhD)</li>
                  <li>• Paper type (Essay, Research, Thesis, etc.)</li>
                  <li>• Number of pages or word count</li>
                  <li>• Deadline for submission</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Additional Details</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Subject/Topic</li>
                  <li>• Citation style (APA, MLA, Chicago, etc.)</li>
                  <li>• Specific instructions or requirements</li>
                  <li>• Any reference materials</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold"
              onClick={() => {
                const whatsappURL = 'https://wa.me/2349027997876?text=Hello! I would like to learn more about your services and place an order.';
                window.open(whatsappURL, '_blank');
              }}
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HowItWorks;