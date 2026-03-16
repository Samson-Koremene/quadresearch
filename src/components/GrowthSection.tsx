import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, UserCheck, FileCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    n: "01", icon: MessageSquare, title: "Tell us what you need",
    desc: "Share your paper type, academic level, topic, and deadline. Takes 2 minutes.",
    color: "#3b82f6",
    detail: { heading: "Simple order form", points: ["Choose your paper type", "Set your deadline", "Add any special instructions", "We'll send a quote instantly"] },
  },
  {
    n: "02", icon: UserCheck, title: "We match you with a writer",
    desc: "A qualified writer in your subject area picks up your order immediately.",
    color: "#8b5cf6",
    detail: { heading: "Expert matching", points: ["PhD-qualified writers only", "Matched by subject area", "Writer confirmed within minutes", "Direct communication available"] },
  },
  {
    n: "03", icon: FileCheck, title: "Receive and review",
    desc: "Get your paper, request any changes, then download when you're satisfied.",
    color: "#10b981",
    detail: { heading: "Delivered with confidence", points: ["Plagiarism report included", "Free revisions within 14 days", "Delivered before your deadline", "100% satisfaction guaranteed"] },
  },
];

const GrowthSection = () => {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-black text-foreground leading-tight mb-3">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-md">
            Three steps and you're sorted. Click each step to learn more.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-20 items-center">

          {/* LEFT — interactive steps */}
          <div className="space-y-3">
            {steps.map(({ n, icon: Icon, title, desc, color }, i) => {
              const isActive = active === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  onClick={() => setActive(i)}
                  className="relative cursor-pointer rounded-2xl p-5 transition-all duration-300 border"
                  style={{
                    background: isActive ? `${color}10` : "transparent",
                    borderColor: isActive ? `${color}40` : "hsl(var(--border))",
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* Step number + icon */}
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300"
                      style={{ background: isActive ? color : `${color}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: isActive ? "#fff" : color }} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold tracking-widest" style={{ color }}>{n}</span>
                        <h3 className="text-sm font-bold text-foreground">{title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                    </div>

                    {/* Active indicator */}
                    <motion.div
                      animate={{ scale: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                      style={{ background: color }}
                    />
                  </div>

                  {/* Active left border */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBorder"
                      className="absolute left-0 top-3 bottom-3 w-1 rounded-full"
                      style={{ background: color }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.4 }}
              className="pt-4"
            >
              <Button
                size="lg"
                className="h-14 px-8 text-base font-bold rounded-2xl shadow-lg shadow-primary/20"
                onClick={() => window.open('https://wa.me/2347012847111', '_blank')}
              >
                Start Your Order <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>

          {/* RIGHT — dynamic detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-3xl p-5 sm:p-8 border shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${current.color}08 0%, transparent 60%)`,
                borderColor: `${current.color}25`,
              }}
            >
              {/* Step badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                style={{ background: `${current.color}15`, color: current.color }}
              >
                <span>Step {current.n}</span>
              </div>

              <h3 className="text-xl font-black text-foreground mb-2">{current.detail.heading}</h3>
              <p className="text-muted-foreground text-sm mb-8">{current.desc}</p>

              <ul className="space-y-4">
                {current.detail.points.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.07 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${current.color}20` }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: current.color }} />
                    </div>
                    <span className="text-foreground/80 text-sm">{point}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Progress dots */}
              <div className="flex gap-2 mt-10">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: active === i ? 24 : 8,
                      background: active === i ? current.color : "hsl(var(--border))",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
