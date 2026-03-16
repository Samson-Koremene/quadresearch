import { GraduationCap, FileText, Shield, Clock, Lock, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  { icon: GraduationCap, title: "All Academic Levels",  desc: "Undergraduate, Masters, PhD — matched to writers who know your field.",        color: "#3b82f6", bg: "#3b82f610" },
  { icon: FileText,       title: "20+ Paper Types",      desc: "Essays, theses, dissertations, SIWES reports, seminar papers and more.",         color: "#8b5cf6", bg: "#8b5cf610" },
  { icon: Shield,         title: "Zero Plagiarism",      desc: "Written from scratch, checked with professional tools before delivery.",         color: "#10b981", bg: "#10b98110" },
  { icon: Clock,          title: "On-Time, Every Time",  desc: "Tight deadline? We deliver in as little as 1 hour. No excuses.",                 color: "#f59e0b", bg: "#f59e0b10" },
  { icon: Lock,           title: "Fully Confidential",   desc: "Your identity and order details are never shared with anyone.",                  color: "#ef4444", bg: "#ef444410" },
  { icon: Award,          title: "Quality Reviewed",     desc: "Every paper is reviewed by an expert before it reaches you.",                    color: "#06b6d4", bg: "#06b6d410" },
];

const FeaturesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="services-section" className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, hsl(216,35%,97%) 0%, hsl(217,50%,93%) 100%)" }}
    >
      <div className="container mx-auto px-4 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-black text-foreground leading-tight mb-3">
            Why Students Choose Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg">
            Over 55,000 students trust us. Here's what sets us apart.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ icon: Icon, title, desc, color, bg }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl p-5 sm:p-7 cursor-pointer overflow-hidden transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.92)",
                border: "1px solid rgba(255,255,255,0.7)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}
              onClick={() => navigate('/products')}
            >
              {/* Hover color wash */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ background: `linear-gradient(135deg, ${bg} 0%, transparent 70%)` }}
              />

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: bg, border: `1px solid ${color}25` }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>

                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-foreground transition-colors">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>

                {/* Bottom accent line */}
                <div
                  className="mt-5 h-0.5 w-0 group-hover:w-10 transition-all duration-300 rounded-full"
                  style={{ background: color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
