import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Clock, Calculator } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gradient-hero py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Professional Content */}
          <div className="max-w-2xl order-2 lg:order-1">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Trusted by 55,000+ Students
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
              Professional Academic
              <span className="text-primary block">Writing Services</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-lg">
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
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="px-6 sm:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold" onClick={() => window.open('https://wa.me/2347012847111', '_blank')}>
                Get Started Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-6 sm:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-medium"
                onClick={() => navigate('/calculator')}
              >
                <Calculator className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Price Calculator
              </Button>
            </div>
          </div>
          
          {/* Student Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="/lovable-uploads/1d5387c6-926d-4a16-acf4-f237d04e1911.png" 
                alt="Student studying with headphones and books"
                className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Why Choose Us - Moved to Bottom */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-border">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4 sm:mb-6 text-center">Why Choose Us</h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">55K+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Happy Students</div>
              </div>
              
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">98%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Success Rate</div>
              </div>
              
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">1 Hour</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Min Turnaround</div>
              </div>
              
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Original Work</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;