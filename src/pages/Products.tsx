import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, FileText, Users, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Research Paper",
      description: "Comprehensive research papers with proper citations and methodology",
      price: "$15-50",
      timeframe: "3-7 days",
      pages: "5-20 pages",
      rating: 4.9,
      popular: true,
      features: ["Original research", "Proper citations", "Plagiarism-free", "Expert writers"]
    },
    {
      id: 2,
      title: "Essay Writing",
      description: "High-quality essays for all academic levels and subjects",
      price: "$10-30",
      timeframe: "1-5 days", 
      pages: "1-10 pages",
      rating: 4.8,
      popular: true,
      features: ["Custom written", "Multiple drafts", "Free revisions", "24/7 support"]
    },
    {
      id: 3,
      title: "Thesis Writing",
      description: "Complete thesis writing with detailed research and analysis",
      price: "$100-500",
      timeframe: "2-8 weeks",
      pages: "50-200 pages",
      rating: 4.9,
      popular: false,
      features: ["In-depth research", "Chapter-wise delivery", "Data analysis", "Defense preparation"]
    },
    {
      id: 4,
      title: "Dissertation",
      description: "Comprehensive dissertation writing for PhD and Masters level",
      price: "$200-800",
      timeframe: "4-12 weeks",
      pages: "100-300 pages", 
      rating: 4.8,
      popular: false,
      features: ["Literature review", "Methodology", "Data collection", "Statistical analysis"]
    },
    {
      id: 5,
      title: "Case Study",
      description: "Detailed case study analysis with real-world applications",
      price: "$20-60",
      timeframe: "2-6 days",
      pages: "5-15 pages",
      rating: 4.7,
      popular: true,
      features: ["Real examples", "Critical analysis", "Problem solving", "Industry insights"]
    },
    {
      id: 6,
      title: "Lab Report",
      description: "Scientific lab reports with proper formatting and analysis",
      price: "$15-40",
      timeframe: "1-4 days",
      pages: "3-12 pages",
      rating: 4.6,
      popular: false,
      features: ["Scientific format", "Data interpretation", "Charts & graphs", "Peer reviewed"]
    },
    {
      id: 7,
      title: "Book Review",
      description: "Critical book reviews and literary analysis",
      price: "$12-35",
      timeframe: "1-3 days",
      pages: "2-8 pages",
      rating: 4.5,
      popular: false,
      features: ["Literary analysis", "Critical thinking", "Author's perspective", "Theme analysis"]
    },
    {
      id: 8,
      title: "Term Paper",
      description: "Comprehensive term papers for semester-end submissions",
      price: "$25-75",
      timeframe: "3-10 days",
      pages: "8-25 pages",
      rating: 4.8,
      popular: true,
      features: ["Semester coverage", "Multiple sources", "Detailed analysis", "Academic format"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Academic Writing Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose from our wide range of professional academic writing services. 
            All papers are custom written by expert writers with advanced degrees.
          </p>
          <Button 
            size="lg" 
            className="px-8 py-6 text-lg"
            onClick={() => navigate('/calculator')}
          >
            Calculate Price
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="relative hover:shadow-lg transition-shadow duration-300">
              {product.popular && (
                <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
                  Popular
                </Badge>
              )}
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{product.title}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-muted-foreground">{product.rating}</span>
                  </div>
                </CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg text-primary">{product.price}</span>
                  <span className="text-sm text-muted-foreground">{product.pages}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{product.timeframe}</span>
                </div>

                <div className="space-y-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex flex-col space-y-2">
                <Button 
                  className="w-full"
                  onClick={() => navigate('/calculator')}
                >
                  Order Now
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full text-sm"
                  onClick={() => window.open('https://wa.me/2347012847111', '_blank')}
                >
                  Chat on WhatsApp
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-card rounded-lg border">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need a Custom Service?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't see what you're looking for? We offer custom academic writing services 
            for any subject, level, or format. Contact us for a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/2347012847111', '_blank')}
            >
              Get Custom Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/calculator')}
            >
              Use Price Calculator
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;