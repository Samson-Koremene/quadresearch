import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Calculator, Shield, Clock } from "lucide-react";
import { useState } from "react";

const PricingCalculator = () => {
  const [academicLevel, setAcademicLevel] = useState("");
  const [essayType, setEssayType] = useState("");
  const [pages, setPages] = useState("");
  const [deadline, setDeadline] = useState("");
  const [price, setPrice] = useState(0);

  // Professional pricing structure
  const academicLevelPricing = {
    highschool: { base: 4500, complexity: 1.0 },
    college: { base: 5500, complexity: 1.1 },
    university: { base: 6500, complexity: 1.2 },
    masters: { base: 8500, complexity: 1.4 },
    phd: { base: 11500, complexity: 1.6 }
  };

  const paperTypeMultipliers = {
    essay: 1.0,
    assignment: 1.1,
    report: 1.2,
    research: 1.4,
    thesis: 1.6,
    dissertation: 1.8
  };

  const deadlineMultipliers = {
    "24hours": 2.8,
    "3days": 2.0,
    "7days": 1.4,
    "14days": 1.2,
    "30days": 1.0
  };

  const calculatePrice = () => {
    if (!academicLevel || !essayType || !pages || !deadline) {
      setPrice(0);
      return;
    }

    const levelConfig = academicLevelPricing[academicLevel as keyof typeof academicLevelPricing];
    const typeMultiplier = paperTypeMultipliers[essayType as keyof typeof paperTypeMultipliers];
    const urgencyMultiplier = deadlineMultipliers[deadline as keyof typeof deadlineMultipliers];
    
    const pageCount = parseInt(pages) || 1;
    
    // Professional calculation with quality factors
    const basePrice = levelConfig.base;
    const complexityFactor = levelConfig.complexity;
    
    let totalPrice = basePrice * pageCount * typeMultiplier * urgencyMultiplier * complexityFactor;
    
    // Apply bulk discount for larger orders
    if (pageCount >= 10) totalPrice *= 0.9; // 10% discount
    if (pageCount >= 20) totalPrice *= 0.85; // 15% total discount
    
    setPrice(Math.round(totalPrice));
  };

  const handleOrderNow = () => {
    if (price === 0) {
      alert("Please complete all fields to get your pricing before ordering.");
      return;
    }

    const orderDetails = `Hello! I would like to place an order for:

📚 Academic Level: ${academicLevel.charAt(0).toUpperCase() + academicLevel.slice(1)}
📝 Paper Type: ${essayType.charAt(0).toUpperCase() + essayType.slice(1)}
📄 Pages: ${pages} pages
⏰ Deadline: ${deadline.replace(/(\d+)/, '$1 ').replace('hours', 'Hours').replace('days', 'Days')}

💰 Total Price: ₦${price.toLocaleString()}

Please confirm this order and provide me with the next steps.`;

    const encodedMessage = encodeURIComponent(orderDetails);
    const whatsappURL = `https://wa.me/2349027997876?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
  };

  return (
    <Card className="bg-card border border-border shadow-lg">
      {/* Professional Header */}
      <div className="bg-primary text-primary-foreground p-6 rounded-t-lg">
        <div className="flex items-center space-x-3">
          <Calculator className="w-6 h-6" />
          <div>
            <h3 className="text-xl font-bold">Price Calculator</h3>
            <p className="text-primary-foreground/80 text-sm">Get instant pricing for your project</p>
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-6">
        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Academic Level</label>
            <Select value={academicLevel} onValueChange={(value) => {
              setAcademicLevel(value);
              calculatePrice();
            }}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="highschool">High School</SelectItem>
                <SelectItem value="college">College</SelectItem>
                <SelectItem value="university">University</SelectItem>
                <SelectItem value="masters">Masters</SelectItem>
                <SelectItem value="phd">PhD</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Paper Type</label>
            <Select value={essayType} onValueChange={(value) => {
              setEssayType(value);
              calculatePrice();
            }}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="essay">Essay</SelectItem>
                <SelectItem value="research">Research Paper</SelectItem>
                <SelectItem value="thesis">Thesis</SelectItem>
                <SelectItem value="dissertation">Dissertation</SelectItem>
                <SelectItem value="report">Report</SelectItem>
                <SelectItem value="assignment">Assignment</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Pages / Words</label>
            <Select value={pages} onValueChange={(value) => {
              setPages(value);
              calculatePrice();
            }}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select pages" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 page (275 words)</SelectItem>
                <SelectItem value="2">2 pages (550 words)</SelectItem>
                <SelectItem value="3">3 pages (825 words)</SelectItem>
                <SelectItem value="5">5 pages (1,375 words)</SelectItem>
                <SelectItem value="10">10 pages (2,750 words)</SelectItem>
                <SelectItem value="15">15+ pages</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Deadline</label>
            <Select value={deadline} onValueChange={(value) => {
              setDeadline(value);
              calculatePrice();
            }}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select deadline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24hours">24 Hours</SelectItem>
                <SelectItem value="3days">3 Days</SelectItem>
                <SelectItem value="7days">7 Days</SelectItem>
                <SelectItem value="14days">14 Days</SelectItem>
                <SelectItem value="30days">30 Days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Price Display */}
        <div className="border-t pt-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-medium text-foreground">Total Price</span>
            <span className="text-3xl font-bold text-primary">₦{price.toLocaleString()}</span>
          </div>
          
          <Button 
            onClick={handleOrderNow}
            className="w-full text-lg py-6 font-semibold"
            disabled={price === 0}
          >
            {price === 0 ? "Complete Form to Order" : "Order Now via WhatsApp"}
          </Button>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4" />
              <span>100% Secure</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>On-time Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PricingCalculator;