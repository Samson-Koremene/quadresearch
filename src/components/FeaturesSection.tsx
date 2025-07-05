import { Card } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🎓",
      title: "All Academic Levels",
      description: "From undergraduate to PhD level papers",
      stats: "Undergraduate through PhD"
    },
    {
      icon: "📄",
      title: "Multiple Paper Types",
      description: "Essays, research papers, theses, SIWES reports & more",
      stats: "20+ Paper Types"
    },
    {
      icon: "🛡️",
      title: "100% Legal & Plagiarism-Free",
      description: "Guaranteed original content with quality controls",
      stats: "Zero Plagiarism"
    },
    {
      icon: "⏰",
      title: "24/7 Support",
      description: "Round-the-clock customer support and on-time delivery",
      stats: "Always Available"
    },
    {
      icon: "🔒",
      title: "Confidential Service",
      description: "Your privacy and data security are our top priority",
      stats: "100% Confidential"
    },
    {
      icon: "💯",
      title: "Quality Guarantee",
      description: "Professional writers with field-specific expertise",
      stats: "Expert Writers"
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Custom Essay Writing Service
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive academic writing services across all educational levels, 
            ensuring 100% legal, plagiarism-free, and confidential work with guaranteed quality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 border-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {feature.stats}
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