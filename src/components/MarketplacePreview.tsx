import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const MarketplacePreview = () => {
  const samplePapers = [
    {
      title: "The Impact of Social Media on Modern Communication",
      type: "Research Paper",
      level: "University",
      pages: 8,
      price: 45,
      rating: 4.8,
      preview: "This comprehensive research paper explores how social media platforms have fundamentally transformed..."
    },
    {
      title: "Climate Change and Environmental Policy Analysis",
      type: "Essay",
      level: "Masters",
      pages: 12,
      price: 89,
      rating: 4.9,
      preview: "An in-depth analysis of current environmental policies and their effectiveness in addressing..."
    },
    {
      title: "Machine Learning Applications in Healthcare",
      type: "Thesis Chapter",
      level: "PhD",
      pages: 25,
      price: 189,
      rating: 5.0,
      preview: "This thesis chapter examines the revolutionary impact of machine learning algorithms..."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            E-Commerce Academic Marketplace
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Browse our extensive collection of high-quality pre-written academic papers. 
            Over 500,000+ products available for instant download.
          </p>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center animate-slide-up">
              <div className="text-3xl font-bold text-primary mb-2">500K+</div>
              <div className="text-muted-foreground">Academic Papers</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-primary mb-2">55K+</div>
              <div className="text-muted-foreground">Satisfied Users</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-primary mb-2">60M+</div>
              <div className="text-muted-foreground">Total Sales</div>
            </div>
          </div>
        </div>
        
        {/* Sample Papers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {samplePapers.map((paper, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card shadow-soft hover:shadow-strong transition-all duration-300 border-0 animate-slide-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                    {paper.type}
                  </span>
                  <span className="text-muted-foreground text-sm">{paper.level}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {paper.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {paper.preview}
                </p>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < Math.floor(paper.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                        ⭐
                      </span>
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">({paper.rating})</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{paper.pages} pages</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">${paper.price}</span>
                  <Button 
                    className="bg-gradient-primary border-none shadow-medium hover:shadow-strong transition-all duration-300"
                    size="sm"
                  >
                    Preview & Buy
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary border-none shadow-medium hover:shadow-strong transition-all duration-300 px-8 py-6 text-lg"
          >
            Browse All Papers →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreview;