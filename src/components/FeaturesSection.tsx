import { Card } from "@/components/ui/card";
import { GraduationCap, FileText, Shield, Clock, Lock, Award } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "All Academic Levels",
      description: "Expert assistance from undergraduate to PhD level across all disciplines",
      highlight: "PhD Qualified Writers"
    },
    {
      icon: FileText,
      title: "Comprehensive Services",
      description: "Essays, research papers, theses, dissertations, and specialized reports",
      highlight: "20+ Paper Types"
    },
    {
      icon: Shield,
      title: "100% Original Content",
      description: "Plagiarism-free guarantee with comprehensive quality controls",
      highlight: "Zero Plagiarism"
    },
    {
      icon: Clock,
      title: "Reliable Delivery",
      description: "24/7 support with guaranteed on-time delivery for all projects",
      highlight: "Always On Time"
    },
    {
      icon: Lock,
      title: "Complete Confidentiality",
      description: "Your privacy and academic integrity are our highest priorities",
      highlight: "100% Secure"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality checks by experienced academic professionals",
      highlight: "Premium Quality"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Students Choose Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional academic writing services designed to help students excel 
            in their educational journey with complete confidence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border border-border hover:shadow-md transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                  {feature.highlight}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;