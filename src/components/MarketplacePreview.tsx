import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Eye, Download, BookOpen } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const MarketplacePreview = () => {
  const samplePapers = [
    {
      title: "The Impact of Social Media on Modern Communication Patterns",
      type: "Research Paper",
      level: "University",
      pages: 12,
      price: 89,
      rating: 4.9,
      downloads: 1247,
      category: "Communication Studies"
    },
    {
      title: "Climate Change Policy Analysis: A Comprehensive Review",
      type: "Thesis Chapter", 
      level: "Masters",
      pages: 18,
      price: 159,
      rating: 5.0,
      downloads: 856,
      category: "Environmental Science"
    },
    {
      title: "Machine Learning Applications in Healthcare Systems",
      type: "Research Paper",
      level: "PhD",
      pages: 25,
      price: 229,
      rating: 4.8,
      downloads: 642,
      category: "Computer Science"
    }
  ];

  const stats = [
    { value: "500K+", label: "Academic Papers", icon: BookOpen },
    { value: "55K+", label: "Satisfied Students", icon: Star },
    { value: "60M+", label: "Total Downloads", icon: Download },
  ];

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Academic Paper Marketplace
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Access our extensive collection of high-quality academic papers. 
            Browse, preview, and download instantly from our professional database.
          </p>
          
          {/* Professional Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Featured Papers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {samplePapers.map((paper, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border border-border hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                    {paper.type}
                  </span>
                  <span className="text-sm text-muted-foreground font-medium">{paper.level}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                  {paper.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">{paper.category}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(paper.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">({paper.rating})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Download className="w-4 h-4" />
                    <span>{paper.downloads}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-sm text-muted-foreground">{paper.pages} pages</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="px-3">
                      <Eye className="w-4 h-4 mr-1" />
                      Preview
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button size="sm" className="px-4">
                          Buy Now
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Reach Seller</AlertDialogTitle>
                          <AlertDialogDescription>
                            Contact the seller directly to purchase this paper.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogAction onClick={() => window.open('https://wa.me/YOUR_WHATSAPP_NUMBER', '_blank')}>
                            Contact via WhatsApp
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold">
            Browse All Papers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreview;