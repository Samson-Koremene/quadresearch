import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PricingCalculator from "@/components/PricingCalculator";

const PriceCalculatorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-card border-b border-border py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">E</span>
              </div>
              <h1 className="text-lg font-semibold text-foreground">EssayPro</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Calculate Your Paper Price
            </h1>
            <p className="text-muted-foreground text-lg">
              Get instant pricing for your custom academic paper
            </p>
          </div>
          
          <PricingCalculator />
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              All prices are estimates. Final pricing may vary based on specific requirements.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PriceCalculatorPage;