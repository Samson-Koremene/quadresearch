import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Simply use our price calculator to get a quote, then contact us via WhatsApp to discuss your requirements and place your order."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, mobile money, and other secure payment methods. Payment details will be provided when you contact us."
    },
    {
      question: "How long does it take to complete my paper?",
      answer: "Delivery time depends on your chosen deadline - from 24 hours to 30 days. Urgent orders may incur additional charges."
    },
    {
      question: "Is my work plagiarism-free?",
      answer: "Yes, we guarantee 100% original, plagiarism-free content. All papers are written from scratch and checked with plagiarism detection tools."
    },
    {
      question: "Can I request revisions?",
      answer: "Yes, we offer unlimited free revisions within 14 days of delivery to ensure your complete satisfaction."
    },
    {
      question: "Is my personal information confidential?",
      answer: "Absolutely. We maintain strict confidentiality and never share your personal information or order details with third parties."
    },
    {
      question: "What if I'm not satisfied with my paper?",
      answer: "We offer a money-back guarantee if the delivered work doesn't meet your requirements or our quality standards."
    },
    {
      question: "Do you provide 24/7 support?",
      answer: "Yes, our customer support team is available 24/7 via WhatsApp to assist you with any questions or concerns."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-card border-b border-border py-4">
        <div className="container mx-auto px-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Find answers to common questions about our services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? Contact us directly
            </p>
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold"
              onClick={() => window.open('https://wa.me/YOUR_WHATSAPP_NUMBER', '_blank')}
            >
              Contact Support
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;