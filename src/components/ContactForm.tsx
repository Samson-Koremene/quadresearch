import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    paperType: "",
    academicLevel: "",
    email: "",
    phoneNumber: "",
    researchTopic: "",
    instructions: "",
  });

  const paperTypes = [
    "Project",
    "Seminar", 
    "Thesis",
    "Assignment",
    "SIWES Technical Report"
  ];

  const academicLevels = [
    "High School",
    "College",
    "Undergraduate", 
    "Masters",
    "PhD"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.paperType || !formData.academicLevel || !formData.email || !formData.phoneNumber) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `Hello! I would like to place an order with the following details:

📝 Type of Paper: ${formData.paperType}
🎓 Academic Level: ${formData.academicLevel}
📧 Email: ${formData.email}
📞 Phone: ${formData.phoneNumber}
${formData.researchTopic ? `📚 Research Topic: ${formData.researchTopic}` : ""}
${formData.instructions ? `📋 Instructions: ${formData.instructions}` : ""}

Please provide me with a quote and further details.`;

    const whatsappURL = `https://wa.me/2347012847111?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappURL, "_blank");
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be connected with our support team shortly.",
    });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-accent/50 to-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Your Custom Paper
            </h2>
            <p className="text-muted-foreground text-lg">
              Fill out the form below and we'll get back to you with a personalized quote
            </p>
          </div>

          <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-center text-foreground">
                Order Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Type of Paper */}
                <div className="space-y-2">
                  <Label htmlFor="paperType" className="text-sm font-medium text-foreground">
                    Type of Paper *
                  </Label>
                  <Select value={formData.paperType} onValueChange={(value) => handleInputChange("paperType", value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select paper type" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border border-border shadow-lg">
                      {paperTypes.map((type) => (
                        <SelectItem key={type} value={type} className="hover:bg-accent">
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Academic Level */}
                <div className="space-y-2">
                  <Label htmlFor="academicLevel" className="text-sm font-medium text-foreground">
                    Academic Level *
                  </Label>
                  <Select value={formData.academicLevel} onValueChange={(value) => handleInputChange("academicLevel", value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select academic level" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border border-border shadow-lg">
                      {academicLevels.map((level) => (
                        <SelectItem key={level} value={level} className="hover:bg-accent">
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-sm font-medium text-foreground">
                    Phone Number *
                  </Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="+234 XXX XXX XXXX"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    className="w-full"
                    required
                  />
                </div>

                {/* Research Topic */}
                <div className="space-y-2">
                  <Label htmlFor="researchTopic" className="text-sm font-medium text-foreground">
                    Approved Research Topic
                  </Label>
                  <Textarea
                    id="researchTopic"
                    placeholder="Enter your approved research topic (if any)"
                    value={formData.researchTopic}
                    onChange={(e) => handleInputChange("researchTopic", e.target.value)}
                    className="w-full min-h-[80px] resize-none"
                  />
                </div>

                {/* Instructions */}
                <div className="space-y-2">
                  <Label htmlFor="instructions" className="text-sm font-medium text-foreground">
                    Instructions
                  </Label>
                  <Textarea
                    id="instructions"
                    placeholder="Please provide any specific instructions, requirements, or additional details for your order"
                    value={formData.instructions}
                    onChange={(e) => handleInputChange("instructions", e.target.value)}
                    className="w-full min-h-[120px] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-medium py-3 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  Submit Order via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;