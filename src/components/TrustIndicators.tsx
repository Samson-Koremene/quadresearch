import { Star } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";

const testimonials = [
  { name: "Adaeze O.", level: "Masters Student, UNILAG", text: "My thesis was delivered 2 days early and my supervisor was genuinely impressed. I didn't expect this level of quality.", rating: 5, image: "/testimonial 1.webp" },
  { name: "Emeka T.", level: "Undergraduate, FUTO", text: "I was skeptical at first. The research paper came back 100% original with proper citations. I'll definitely be back.", rating: 5, image: "/testimonial 2.webp" },
  { name: "Fatima B.", level: "PhD Candidate, ABU", text: "They understood my field perfectly. Fast, professional, and completely confidential. Exactly what I needed.", rating: 5, image: "/testimonial 3.webp" },
  { name: "Chukwuemeka A.", level: "Masters Student, UI", text: "Submitted my seminar paper on time and got an A. The writer clearly understood the topic inside out.", rating: 5, image: "/testimonial 1.webp" },
  { name: "Blessing N.", level: "Undergraduate, UNIPORT", text: "Very professional service. My project was well-researched and properly formatted. Highly recommend.", rating: 5, image: "/testimonial 2.webp" },
  { name: "Ibrahim K.", level: "PhD Candidate, OAU", text: "I've used them three times now. Consistent quality every single time. Worth every naira.", rating: 5, image: "/testimonial 3.webp" },
];

const Card = ({ name, level, text, rating, image }: typeof testimonials[0]) => (
  <div
    className="flex-shrink-0 rounded-2xl p-6"
    style={{
      width: 300,
      background: "rgba(255,255,255,0.07)",
      border: "1px solid rgba(255,255,255,0.12)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
    }}
  >
    <div className="flex gap-0.5 mb-4">
      {[...Array(rating)].map((_, j) => (
        <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
    <p className="text-white/70 text-sm leading-relaxed mb-6">"{text}"</p>
    <div className="flex items-center gap-3">
      <picture>
        <source srcSet={image} type="image/webp" />
        <img src={image.replace('.webp', '.jpg')} alt={name} width={36} height={36} className="w-9 h-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" loading="lazy" decoding="async" />
      </picture>
      <div>
        <p className="text-white text-sm font-semibold">{name}</p>
        <p className="text-white/35 text-xs mt-0.5">{level}</p>
      </div>
    </div>
  </div>
);

const MarqueeRow = ({ reverse = false }: { reverse?: boolean }) => {
  const controls = useAnimationControls();

  const start = () => {
    controls.start({
      x: reverse ? ["-100%", "0%"] : ["0%", "-100%"],
      transition: { duration: 30, ease: "linear", repeat: Infinity },
    });
  };

  return (
    <motion.div
      className="flex gap-5 w-max mb-5 select-none"
      style={{ willChange: "transform" }}
      animate={controls}
      onViewportEnter={start}
      onHoverStart={() => controls.stop()}
      onHoverEnd={start}
    >
      {[...testimonials, ...testimonials].map((t, i) => <Card key={i} {...t} />)}
    </motion.div>
  );
};

const TrustIndicators = () => (
  <section className="py-20 bg-[hsl(220,15%,18%)] overflow-hidden w-full max-w-[100vw]">

    {/* Heading */}
    <div className="container mx-auto px-4 md:px-8 mb-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl md:text-4xl font-black text-white"
      >
        Testimonials
      </motion.h2>
    </div>

    {/* Scrolling cards */}
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 z-10"
        style={{ background: "linear-gradient(to right, hsl(220,15%,18%), transparent)" }} />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 z-10"
        style={{ background: "linear-gradient(to left, hsl(220,15%,18%), transparent)" }} />

      <MarqueeRow />
    </div>

  </section>
);

export default TrustIndicators;
