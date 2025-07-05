import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Custom Essay Writing Service You Can Count On
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Looking for a custom writing service that won't bring you down?
              Don't hesitate to get professional help 24/7!
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <span className="text-lg">Only human-written content.</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <span className="text-lg">Verified field-specific experts.</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <span className="text-lg">Turnaround from 1 hour.</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero"
                size="lg" 
                className="px-8 py-6 text-lg font-semibold"
              >
                Get Started Now
              </Button>
              
              <Button 
                variant="hero-outline"
                size="lg" 
                className="px-8 py-6 text-lg"
              >
                Browse Essays
              </Button>
            </div>
          </div>
          
          {/* Student Image */}
          <div className="relative animate-float">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-strong">
              <div className="w-full h-64 md:h-80 bg-white/20 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/30 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                    👩‍🎓
                  </div>
                  <p className="text-lg font-semibold">Professional Academic Writing</p>
                  <p className="text-white/80">Trusted by 55,000+ Students</p>
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