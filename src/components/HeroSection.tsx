import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight, Shield, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const phrases = [
  "Writing Services",
  "Research Papers",
  "Thesis & Dissertations",
  "Essay Writing",
  "Academic Excellence",
];

const Image3D = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 100, damping: 18 });
  const springY = useSpring(my, { stiffness: 100, damping: 18 });
  const rotateY = useTransform(springX, [-1, 1], [-10, 10]);
  const rotateX = useTransform(springY, [-1, 1], [6, -6]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  const maskStyle = {
    WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
    WebkitMaskComposite: "destination-in" as const,
    maskImage: "linear-gradient(to bottom, black 55%, transparent 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
    maskComposite: "intersect" as const,
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative w-full max-w-[400px] sm:max-w-[480px] lg:max-w-none mx-auto"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
        className="relative"
      >
        {/* Image with mask applied directly */}
        <picture style={maskStyle}>
          <source srcSet="/hero.webp" type="image/webp" />
          <img
            src="/hero.png"
            alt="Student studying"
            width={900}
            height={1200}
            className="w-full h-[320px] sm:h-[480px] lg:h-[88vh] object-cover object-top rounded-t-[1.5rem] lg:rounded-t-[1.9rem] rounded-b-none block"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            draggable={false}
          />
        </picture>

        {/* Floating card — top left */}
        <motion.div
          initial={{ opacity: 0, x: -16, y: -8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute z-30 top-3 left-2 lg:-left-10 bg-white rounded-lg sm:rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 shadow-lg flex items-center gap-1.5 sm:gap-2 animate-float"
        >
          <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
            <Users className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-blue-500" />
          </div>
          <div>
            <p className="text-[7px] sm:text-[9px] text-gray-400 uppercase tracking-wide leading-none mb-0.5">Students</p>
            <p className="text-[10px] sm:text-xs font-bold text-gray-900">55,000+</p>
          </div>
        </motion.div>

        {/* Floating card — right middle */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute z-30 top-[35%] right-2 lg:-right-10 bg-white rounded-lg sm:rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 shadow-lg flex items-center gap-1.5 sm:gap-2 animate-float"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
            <Shield className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-green-500" />
          </div>
          <div>
            <p className="text-[7px] sm:text-[9px] text-gray-400 uppercase tracking-wide leading-none mb-0.5">Plagiarism Free</p>
            <p className="text-[10px] sm:text-xs font-bold text-gray-900">100%</p>
          </div>
        </motion.div>

        {/* Floating card — bottom left */}
        <motion.div
          initial={{ opacity: 0, x: -16, y: 8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="absolute z-30 bottom-5 left-2 lg:-left-10 bg-white rounded-lg sm:rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 shadow-lg flex items-center gap-1.5 sm:gap-2 animate-float"
          style={{ animationDelay: "2.4s" }}
        >
          <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
            <Zap className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-amber-500" />
          </div>
          <div>
            <p className="text-[7px] sm:text-[9px] text-gray-400 uppercase tracking-wide leading-none mb-0.5">Delivery</p>
            <p className="text-[10px] sm:text-xs font-bold text-gray-900">From 1 Hour</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const HeroSection = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % phrases.length), 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(216,35%,10%) 0%, hsl(217,45%,14%) 60%, hsl(216,35%,11%) 100%)" }}
    >
      {/* Faint academic SVG pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.012]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="academic" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <g transform="translate(10,10)" fill="white">
                <polygon points="20,4 40,14 20,24 0,14" />
                <rect x="32" y="14" width="3" height="12" />
                <ellipse cx="35" cy="26" rx="4" ry="2.5" />
                <rect x="17" y="22" width="6" height="8" rx="1" />
              </g>
              <g transform="translate(65,55)" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M0,0 C8,-4 16,-4 20,0 C24,-4 32,-4 40,0 L40,20 C32,16 24,16 20,20 C16,16 8,16 0,20 Z" />
                <line x1="20" y1="0" x2="20" y2="20" />
                <line x1="6" y1="6" x2="14" y2="6" />
                <line x1="6" y1="10" x2="14" y2="10" />
                <line x1="26" y1="6" x2="34" y2="6" />
                <line x1="26" y1="10" x2="34" y2="10" />
              </g>
              <g transform="translate(70,5)" fill="white">
                <rect x="0" y="0" width="6" height="22" rx="1" />
                <polygon points="0,22 6,22 3,30" />
                <rect x="0" y="0" width="6" height="4" fill="rgba(255,255,255,0.5)" />
              </g>
              <g transform="translate(5,70)" fill="none" stroke="white" strokeWidth="1.2">
                <circle cx="16" cy="16" r="3" fill="white" />
                <ellipse cx="16" cy="16" rx="14" ry="6" />
                <ellipse cx="16" cy="16" rx="14" ry="6" transform="rotate(60 16 16)" />
                <ellipse cx="16" cy="16" rx="14" ry="6" transform="rotate(120 16 16)" />
              </g>
              <g transform="translate(88,78)" fill="none" stroke="white" strokeWidth="1.2">
                <rect x="0" y="4" width="22" height="16" rx="2" />
                <line x1="4" y1="9" x2="18" y2="9" />
                <line x1="4" y1="13" x2="18" y2="13" />
                <line x1="4" y1="17" x2="12" y2="17" />
                <path d="M0,4 Q-3,12 0,20" />
                <path d="M22,4 Q25,12 22,20" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#academic)" />
        </svg>
      </div>

      {/* Glow blobs — clipped, smaller on mobile */}
      <div
        className="pointer-events-none absolute -top-40 -left-20 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, hsl(217,89%,50%) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, hsl(217,89%,55%) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end py-16 lg:min-h-[88vh] lg:py-20">

          {/* LEFT */}
          <div className="order-1 z-10 text-center lg:text-left lg:self-center pb-10 lg:pb-20">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-[2.2rem] sm:text-5xl xl:text-[3.8rem] font-black text-white leading-[1.05] tracking-tight mb-5"
            >
              Professional Academic
              <span className="block mt-1 h-[1.15em] overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phrases[index]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="block"
                    style={{
                      background: "linear-gradient(90deg, hsl(217,89%,68%), hsl(195,90%,62%))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {phrases[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="text-white/55 text-base sm:text-lg leading-relaxed max-w-[420px] mb-10 mx-auto lg:mx-0"
            >
              Essays, research papers, theses, dissertations written by PhD-qualified experts. 100% original, on time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-2xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow"
                onClick={() => window.open("https://wa.me/2347012847111", "_blank")}
              >
                Order Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-8 text-base font-semibold rounded-2xl bg-transparent text-white/75 hover:text-white transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.18)" }}
                onClick={() => navigate("/products")}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Browse Samples
              </Button>
            </motion.div>
          </div>

          {/* RIGHT — 3D image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="order-2 flex justify-center lg:justify-end items-end z-10 lg:self-end"
          >
            <Image3D />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
