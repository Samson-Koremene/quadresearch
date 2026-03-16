import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, Download, ArrowRight, BookOpen, MessageSquare, X, FileText, GraduationCap, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const papers = [
  {
    title: "The Impact of Social Media on Modern Communication Patterns",
    type: "Research Paper", level: "University", pages: 12, rating: 4.9, downloads: 1247,
    category: "Communication", color: "#3b82f6",
    abstract: "This paper examines how social media platforms have fundamentally altered interpersonal communication, information dissemination, and public discourse in the 21st century.",
    tags: ["APA", "12 pages", "2024"],
  },
  {
    title: "Climate Change Policy Analysis: A Comprehensive Review",
    type: "Thesis Chapter", level: "Masters", pages: 18, rating: 5.0, downloads: 856,
    category: "Science", color: "#10b981",
    abstract: "A critical analysis of global climate change policies, evaluating their effectiveness, implementation challenges, and the role of international cooperation in achieving net-zero targets.",
    tags: ["Harvard", "18 pages", "2024"],
  },
  {
    title: "Machine Learning Applications in Healthcare Systems",
    type: "Research Paper", level: "PhD", pages: 25, rating: 4.8, downloads: 642,
    category: "Technology", color: "#8b5cf6",
    abstract: "Explores the integration of machine learning algorithms in diagnostic imaging, patient outcome prediction, and hospital resource management across Sub-Saharan African healthcare systems.",
    tags: ["IEEE", "25 pages", "2024"],
  },
  {
    title: "Financial Analysis of Emerging Markets in Sub-Saharan Africa",
    type: "Seminar Paper", level: "Masters", pages: 20, rating: 4.7, downloads: 534,
    category: "Finance", color: "#f59e0b",
    abstract: "Investigates investment patterns, risk factors, and growth opportunities in emerging African markets, with a focus on Nigeria, Kenya, and South Africa.",
    tags: ["APA", "20 pages", "2024"],
  },
  {
    title: "Psychological Effects of Remote Learning on University Students",
    type: "Research Paper", level: "Undergraduate", pages: 15, rating: 4.9, downloads: 921,
    category: "Psychology", color: "#ef4444",
    abstract: "Analyzes the mental health implications of the shift to remote learning, including anxiety, motivation loss, and social isolation among Nigerian university students.",
    tags: ["APA", "15 pages", "2024"],
  },
  {
    title: "Sustainable Agriculture Practices in Developing Nations",
    type: "Project", level: "Undergraduate", pages: 22, rating: 4.8, downloads: 703,
    category: "Science", color: "#06b6d4",
    abstract: "Reviews sustainable farming techniques applicable to smallholder farmers in West Africa, covering soil management, water conservation, and crop rotation strategies.",
    tags: ["MLA", "22 pages", "2024"],
  },
];

const categories = ["All", "Research Paper", "Thesis Chapter", "Seminar Paper", "Project"];

const levelColors: Record<string, { bg: string; text: string }> = {
  "PhD":           { bg: "#8b5cf615", text: "#8b5cf6" },
  "Masters":       { bg: "#3b82f615", text: "#3b82f6" },
  "University":    { bg: "#06b6d415", text: "#06b6d4" },
  "Undergraduate": { bg: "#10b98115", text: "#10b981" },
};

type Paper = typeof papers[0];

const PreviewModal = ({ paper, onClose }: { paper: Paper; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
    style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
    onClick={onClose}
  >
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 60, scale: 0.97 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-card border border-border rounded-t-3xl sm:rounded-3xl w-full sm:max-w-lg p-6 sm:p-8 shadow-2xl relative"
      onClick={e => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
      >
        <X className="w-4 h-4 text-muted-foreground" />
      </button>

      {/* Color bar */}
      <div className="w-10 h-1 rounded-full mb-5" style={{ background: paper.color }} />

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: `${paper.color}15`, color: paper.color }}>
          {paper.type}
        </span>
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-full"
          style={{ background: levelColors[paper.level]?.bg ?? "#f3f4f6", color: levelColors[paper.level]?.text ?? "#6b7280" }}
        >
          {paper.level}
        </span>
      </div>

      <h3 className="text-base sm:text-lg font-black text-foreground leading-snug mb-4">{paper.title}</h3>

      <p className="text-sm text-muted-foreground leading-relaxed mb-6">{paper.abstract}</p>

      {/* Meta */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { icon: FileText, label: "Pages", value: `${paper.pages}` },
          { icon: GraduationCap, label: "Level", value: paper.level },
          { icon: Clock, label: "Year", value: "2024" },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="bg-muted/50 rounded-xl p-3 text-center">
            <Icon className="w-4 h-4 text-muted-foreground mx-auto mb-1" />
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{label}</p>
            <p className="text-xs font-bold text-foreground mt-0.5">{value}</p>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap mb-6">
        {paper.tags.map(tag => (
          <span key={tag} className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-6">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, j) => (
            <Star key={j} className={`w-3.5 h-3.5 ${j < Math.floor(paper.rating) ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/20"}`} />
          ))}
        </div>
        <span className="text-sm font-semibold text-foreground">{paper.rating}</span>
        <span className="text-xs text-muted-foreground">· {paper.downloads.toLocaleString()} downloads</span>
      </div>

      <Button
        className="w-full h-12 text-sm font-bold rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
        onClick={() => window.open(`https://wa.me/2347012847111?text=Hello! I'd like a similar paper: ${paper.title}`, "_blank")}
      >
        <MessageSquare className="w-4 h-4" />
        Order a Similar Paper
      </Button>
    </motion.div>
  </motion.div>
);

const PaperCard = ({ paper, index, onPreview }: { paper: Paper; index: number; onPreview: () => void }) => {
  const lc = levelColors[paper.level];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-shadow duration-300 hover:shadow-xl hover:border-transparent"
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full transition-all duration-500 group-hover:h-1.5"
        style={{ background: `linear-gradient(90deg, ${paper.color}, ${paper.color}80)` }}
      />

      <div className="p-5 flex flex-col flex-1">
        {/* Type + level */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: `${paper.color}12`, color: paper.color }}>
            {paper.type}
          </span>
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{ background: lc?.bg ?? "#f3f4f6", color: lc?.text ?? "#6b7280" }}
          >
            {paper.level}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-foreground leading-snug mb-1 flex-1 group-hover:text-primary transition-colors duration-200">
          {paper.title}
        </h3>
        <p className="text-xs text-muted-foreground mb-4">{paper.category} · {paper.pages} pages</p>

        {/* Rating + downloads */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, j) => (
              <Star key={j} className={`w-3 h-3 ${j < Math.floor(paper.rating) ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/20"}`} />
            ))}
            <span className="text-xs font-semibold text-foreground ml-1">{paper.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Download className="w-3 h-3" /> {paper.downloads.toLocaleString()}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-3 border-t border-border">
          <button
            className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium h-8 rounded-lg border border-border hover:border-primary/40 hover:text-primary transition-colors"
            onClick={onPreview}
          >
            <BookOpen className="w-3 h-3" /> Preview
          </button>
          <button
            className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold h-8 rounded-lg text-white transition-all hover:opacity-90"
            style={{ background: paper.color }}
            onClick={() => window.open(`https://wa.me/2347012847111?text=Hello! I'm interested in: ${paper.title}`, "_blank")}
          >
            <MessageSquare className="w-3 h-3" /> Order
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const MarketplacePreview = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [preview, setPreview] = useState<Paper | null>(null);

  const filtered = activeFilter === "All" ? papers : papers.filter(p => p.type === activeFilter);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-black text-foreground leading-tight">
              Sample Papers
            </h2>
            <p className="text-muted-foreground text-lg mt-2">
              Browse real papers from our library. Preview before you order.
            </p>
          </div>
          <button
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all shrink-0 self-start md:self-auto"
            onClick={() => window.location.href = "/products"}
          >
            View all papers <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                color: activeFilter === cat ? "#fff" : "hsl(var(--muted-foreground))",
                background: activeFilter === cat ? "hsl(var(--primary))" : "hsl(var(--muted))",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
          >
            {filtered.map((paper, i) => (
              <PaperCard key={paper.title} paper={paper} index={i} onPreview={() => setPreview(paper)} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="h-14 px-10 text-base font-bold rounded-2xl shadow-lg shadow-primary/20"
            onClick={() => window.location.href = "/products"}
          >
            Browse Full Library
          </Button>
        </motion.div>
      </div>

      {/* Preview modal */}
      <AnimatePresence>
        {preview && <PreviewModal paper={preview} onClose={() => setPreview(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default MarketplacePreview;
