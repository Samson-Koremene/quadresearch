import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const PricingCalculator = () => {
  const [academicLevel, setAcademicLevel] = useState("");
  const [essayType, setEssayType] = useState("");
  const [pages, setPages] = useState("");
  const [deadline, setDeadline] = useState("");
  const [price, setPrice] = useState(0);

  const calculatePrice = () => {
    // Simple pricing logic - you can make this more sophisticated
    let basePrice = 15;
    if (academicLevel === "masters") basePrice = 20;
    if (academicLevel === "phd") basePrice = 25;
    
    const pageCount = parseInt(pages) || 1;
    const deadlineMultiplier = deadline === "24hours" ? 2 : deadline === "3days" ? 1.5 : 1;
    
    const totalPrice = basePrice * pageCount * deadlineMultiplier;
    setPrice(totalPrice);
  };

  return (
    <Card className="bg-gradient-card p-6 shadow-strong border-0 animate-slide-up">
      <div className="bg-gradient-primary text-primary-foreground p-4 rounded-t-lg -m-6 mb-6">
        <h3 className="text-xl font-bold text-center">Calculate Price</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <Select value={academicLevel} onValueChange={(value) => {
            setAcademicLevel(value);
            calculatePrice();
          }}>
            <SelectTrigger className="w-full border-border">
              <SelectValue placeholder="College" />
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
          <Select value={essayType} onValueChange={(value) => {
            setEssayType(value);
            calculatePrice();
          }}>
            <SelectTrigger className="w-full border-border">
              <SelectValue placeholder="Essay (Any Type)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="essay">Essay (Any Type)</SelectItem>
              <SelectItem value="research">Research Paper</SelectItem>
              <SelectItem value="thesis">Thesis</SelectItem>
              <SelectItem value="dissertation">Dissertation</SelectItem>
              <SelectItem value="report">SIWES Report</SelectItem>
              <SelectItem value="assignment">Assignment</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Select value={pages} onValueChange={(value) => {
            setPages(value);
            calculatePrice();
          }}>
            <SelectTrigger className="w-full border-border">
              <SelectValue placeholder="Select words/Pages" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 page / 275 words</SelectItem>
              <SelectItem value="2">2 pages / 550 words</SelectItem>
              <SelectItem value="3">3 pages / 825 words</SelectItem>
              <SelectItem value="5">5 pages / 1375 words</SelectItem>
              <SelectItem value="10">10 pages / 2750 words</SelectItem>
              <SelectItem value="15">15+ pages</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Select value={deadline} onValueChange={(value) => {
            setDeadline(value);
            calculatePrice();
          }}>
            <SelectTrigger className="w-full border-border">
              <SelectValue placeholder="7 Days" />
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
        
        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-muted-foreground">Price (USD)</span>
            <span className="text-2xl font-bold text-primary">${price}</span>
          </div>
          
          <Button 
            className="w-full bg-gradient-primary border-none shadow-medium hover:shadow-strong transition-all duration-300 text-lg py-6"
            onClick={() => window.open('#order', '_blank')}
          >
            ORDER NOW
          </Button>
          
          <p className="text-xs text-muted-foreground text-center mt-3">
            I agree to the Terms and conditions
          </p>
        </div>
      </div>
    </Card>
  );
};

export default PricingCalculator;