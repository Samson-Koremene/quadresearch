import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Clock, Calculator } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gradient-subtle py-12 md:py-20 lg:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Professional Content */}
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Trusted by 55,000+ Students
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
              Professional Academic
              <span className="text-primary block">Writing Services</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Get expert help with essays, research papers, and academic projects. 
              100% original content delivered on time, every time.
            </p>
            
            {/* Professional Features */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">Human-written, plagiarism-free content</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">PhD-qualified writers in every field</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">24/7 support and on-time delivery</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold">
                Get Started Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-medium"
                onClick={() => navigate('/calculator')}
              >
                <Calculator className="w-5 h-5 mr-2" />
                Price Calculator
              </Button>
            </div>
          </div>
          
          {/* Professional Stats Card */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Why Choose Us</h3>
              
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">55K+</div>
                  <div className="text-sm text-muted-foreground">Happy Students</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">1 Hour</div>
                  <div className="text-sm text-muted-foreground">Min Turnaround</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">Original Work</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;