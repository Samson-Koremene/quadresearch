import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "./faqData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      className="border border-border rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: open ? "hsl(var(--card))" : "hsl(var(--card))",
        boxShadow: open ? "0 4px 24px rgba(0,0,0,0.07)" : "none",
      }}
    >
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
      >
        <span className="text-sm sm:text-base font-semibold text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
          {question}
        </span>

        {/* Eye icon toggle */}
        <motion.div
          animate={{ scale: open ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200"
          style={{
            background: open ? "hsl(var(--primary) / 0.12)" : "hsl(var(--muted))",
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="eye-open"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.15 }}
              >
                <Eye className="w-4 h-4 text-primary" />
              </motion.span>
            ) : (
              <motion.span
                key="eye-off"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.15 }}
              >
                <EyeOff className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5">
              <div className="h-px bg-border mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  useSEO({
    title: "Frequently Asked Questions",
    description: "Got questions about Quad Research? Find answers about our academic writing process, pricing, plagiarism policy, revisions, confidentiality and delivery times.",
    canonical: "/faq",
    keywords: "academic writing FAQ Nigeria, Quad Research questions, plagiarism-free guarantee, revision policy, confidential academic writing, how to order essay Nigeria",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(({ question, answer }) => ({
          "@type": "Question",
          "name": question,
          "acceptedAnswer": { "@type": "Answer", "text": answer },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://quadtechsolutions.online/" },
          { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://quadtechsolutions.online/faq" },
        ],
      },
    ],
  });

  return (
  <div className="min-h-screen bg-background">
    <Header />

    <main>
      {/* Hero */}
      <section
        className="relative py-16 sm:py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(220,15%,18%) 0%, hsl(220,12%,22%) 60%, hsl(220,15%,19%) 100%)" }}
      >
        <div className="pointer-events-none absolute -top-32 -left-20 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, hsl(217,89%,50%) 0%, transparent 70%)" }} />
        <div className="container mx-auto px-4 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-3"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/55 text-base sm:text-lg max-w-xl"
          >
            Everything you need to know before placing your order.
          </motion.p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} index={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 text-center"
          >
            <p className="text-muted-foreground text-sm mb-5">Still have questions? We're on WhatsApp 24/7.</p>
            <Button
              size="lg"
              className="h-14 px-10 text-base font-bold rounded-2xl shadow-lg shadow-primary/20 flex items-center gap-2 mx-auto"
              onClick={() => window.open("https://wa.me/2347012847111", "_blank")}
            >
              <MessageSquare className="w-4 h-4" />
              Chat with Us
            </Button>
          </motion.div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
  );
};

export default FAQ;
