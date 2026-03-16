import { Button } from "@/components/ui/button";
import { MessageCircle, FileText, CheckCircle, Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const steps = [
  {
    icon: MessageCircle,
    title: "Contact Us",
    number: "01",
    color: "#3b82f6",
    description: "Reach out via WhatsApp with your requirements and get a personalized quote within minutes.",
  },
  {
    icon: FileText,
    title: "Place Your Order",
    number: "02",
    color: "#8b5cf6",
    description: "Provide detailed instructions, confirm your deadline, and make payment to lock in your order.",
  },
  {
    icon: CheckCircle,
    title: "We Write",
    number: "03",
    color: "#10b981",
    description: "A PhD-qualified writer matched to your subject crafts your paper from scratch.",
  },
  {
    icon: Download,
    title: "Receive Your Paper",
    number: "04",
    color: "#f59e0b",
    description: "Get your completed, plagiarism-free paper before your deadline. Request revisions if needed.",
  },
];

const requirements = [
  { label: "Basic Requirements", items: ["Academic level (High School to PhD)", "Paper type (Essay, Research, Thesis, etc.)", "Number of pages or word count", "Deadline for submission"] },
  { label: "Additional Details",  items: ["Subject / Topic", "Citation style (APA, MLA, Chicago, etc.)", "Specific instructions or requirements", "Any reference materials"] },
];

const HowItWorks = () => {
  useSEO({
    title: "How It Works — Order Your Paper in 4 Steps",
    description: "Ordering from Quad Research is simple. Contact us, place your order, we write it, you receive it. PhD-qualified writers, plagiarism-free, delivered on time.",
    canonical: "/how-it-works",
  });

  return (
  <div className="min-h-screen bg-background">
    <Header />

    <main>

      {/* Hero */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(216,35%,10%) 0%, hsl(217,45%,14%) 60%, hsl(216,35%,11%) 100%)" }}
      >
        <div className="pointer-events-none absolute -top-32 -left-20 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, hsl(217,89%,50%) 0%, transparent 70%)" }} />

        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Simple Process
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
          >
            How It Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/55 text-lg max-w-xl mx-auto"
          >
            From order to delivery in four simple steps. No stress, no guesswork.
          </motion.p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ icon: Icon, title, number, color, description }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl p-7 border border-border hover:border-transparent transition-all duration-300 group"
                style={{ background: "hsl(var(--card))" }}
              >
                {/* Hover wash */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${color}10 0%, transparent 70%)` }}
                />

                <div className="relative z-10">
                  {/* Number */}
                  <span
                    className="text-5xl font-black leading-none mb-4 block"
                    style={{ color: `${color}20` }}
                  >
                    {number}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color }} />
                  </div>

                  <h3 className="text-base font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>

                  {/* Accent line */}
                  <div
                    className="mt-5 h-0.5 w-0 group-hover:w-10 transition-all duration-300 rounded-full"
                    style={{ background: color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connector line — desktop only */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block h-px bg-border origin-left mt-[-120px] mb-[100px] mx-16 relative z-0"
          />
        </div>
      </section>

      {/* What we need */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-3">What Information Do We Need?</h2>
            <p className="text-muted-foreground">The more detail you give us, the better your paper will be.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {requirements.map(({ label, items }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-7"
              >
                <h4 className="font-bold text-foreground mb-5 text-sm uppercase tracking-wide">{label}</h4>
                <ul className="space-y-3">
                  {items.map((item, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: j * 0.07 }}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(216,35%,10%) 0%, hsl(217,45%,14%) 100%)" }}
      >
        <div className="pointer-events-none absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(217,89%,55%) 0%, transparent 70%)" }} />

        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-3xl sm:text-4xl font-black text-white mb-4"
          >
            Ready to place your order?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/55 text-lg mb-10 max-w-md mx-auto"
          >
            Message us on WhatsApp and we'll get you sorted in minutes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              size="lg"
              className="h-14 px-10 text-base font-bold rounded-2xl shadow-lg shadow-primary/30"
              onClick={() => window.open('https://wa.me/2347012847111?text=Hello! I would like to place an order.', '_blank')}
            >
              Get Started Now <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

    </main>

    <Footer />
  </div>
  );
};

export default HowItWorks;
