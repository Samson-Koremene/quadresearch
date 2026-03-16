import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Star, Download, MessageSquare, BookOpen,
  X, FileText, GraduationCap, Clock, ArrowRight, SlidersHorizontal,
} from "lucide-react";
import useSEO from "@/hooks/useSEO";

const allPapers = [
  { title: "The Impact of Social Media on Modern Communication Patterns", type: "Research Paper", level: "University", pages: 12, rating: 4.9, downloads: 1247, category: "Communication", color: "#3b82f6", tags: ["APA", "2024"], abstract: "Examines how social media platforms have fundamentally altered interpersonal communication, information dissemination, and public discourse in the 21st century." },
  { title: "Climate Change Policy Analysis: A Comprehensive Review", type: "Thesis Chapter", level: "Masters", pages: 18, rating: 5.0, downloads: 856, category: "Science", color: "#10b981", tags: ["Harvard", "2024"], abstract: "Critical analysis of global climate change policies, evaluating their effectiveness, implementation challenges, and the role of international cooperation in achieving net-zero targets." },
  { title: "Machine Learning Applications in Healthcare Systems", type: "Research Paper", level: "PhD", pages: 25, rating: 4.8, downloads: 642, category: "Technology", color: "#8b5cf6", tags: ["IEEE", "2024"], abstract: "Explores integration of machine learning algorithms in diagnostic imaging, patient outcome prediction, and hospital resource management across Sub-Saharan African healthcare systems." },
  { title: "Financial Analysis of Emerging Markets in Sub-Saharan Africa", type: "Seminar Paper", level: "Masters", pages: 20, rating: 4.7, downloads: 534, category: "Finance", color: "#f59e0b", tags: ["APA", "2024"], abstract: "Investigates investment patterns, risk factors, and growth opportunities in emerging African markets, with a focus on Nigeria, Kenya, and South Africa." },
  { title: "Psychological Effects of Remote Learning on University Students", type: "Research Paper", level: "Undergraduate", pages: 15, rating: 4.9, downloads: 921, category: "Psychology", color: "#ef4444", tags: ["APA", "2024"], abstract: "Analyzes the mental health implications of the shift to remote learning, including anxiety, motivation loss, and social isolation among Nigerian university students." },
  { title: "Sustainable Agriculture Practices in Developing Nations", type: "Project", level: "Undergraduate", pages: 22, rating: 4.8, downloads: 703, category: "Science", color: "#06b6d4", tags: ["MLA", "2024"], abstract: "Reviews sustainable farming techniques applicable to smallholder farmers in West Africa, covering soil management, water conservation, and crop rotation strategies." },
  { title: "Corporate Governance and Firm Performance in Nigerian Banks", type: "Research Paper", level: "Masters", pages: 30, rating: 4.9, downloads: 489, category: "Finance", color: "#3b82f6", tags: ["APA", "2024"], abstract: "Investigates the relationship between board composition, ownership structure, and financial performance across ten major Nigerian commercial banks from 2018–2023." },
  { title: "Blockchain Technology in Supply Chain Management", type: "Seminar Paper", level: "Undergraduate", pages: 14, rating: 4.6, downloads: 612, category: "Technology", color: "#8b5cf6", tags: ["IEEE", "2024"], abstract: "Explores how distributed ledger technology can improve transparency, traceability, and efficiency in global supply chains, with case studies from the food and pharmaceutical sectors." },
  { title: "Gender Inequality in STEM Education: A Nigerian Perspective", type: "Research Paper", level: "Masters", pages: 19, rating: 4.8, downloads: 774, category: "Education", color: "#ec4899", tags: ["APA", "2024"], abstract: "Examines structural and cultural barriers preventing female students from pursuing STEM disciplines in Nigerian tertiary institutions, with policy recommendations." },
  { title: "The Role of Microfinance in Poverty Alleviation", type: "Project", level: "Undergraduate", pages: 24, rating: 4.7, downloads: 558, category: "Finance", color: "#f59e0b", tags: ["Harvard", "2024"], abstract: "Assesses the effectiveness of microfinance institutions in reducing poverty levels among rural women entrepreneurs in Ogun and Oyo states." },
  { title: "Cybersecurity Threats in Online Banking Systems", type: "Research Paper", level: "PhD", pages: 28, rating: 5.0, downloads: 391, category: "Technology", color: "#ef4444", tags: ["IEEE", "2024"], abstract: "Comprehensive threat modeling and risk assessment of internet banking platforms in Nigeria, with proposed mitigation frameworks aligned to CBN guidelines." },
  { title: "Urban Planning and Housing Deficit in Lagos Metropolis", type: "Thesis Chapter", level: "Masters", pages: 35, rating: 4.8, downloads: 427, category: "Urban Studies", color: "#10b981", tags: ["Chicago", "2024"], abstract: "Analyzes the structural causes of Lagos's housing deficit, evaluating government intervention programs and proposing sustainable urban development strategies." },
  { title: "Effects of Malnutrition on Child Cognitive Development", type: "Research Paper", level: "Undergraduate", pages: 16, rating: 4.7, downloads: 683, category: "Health", color: "#06b6d4", tags: ["APA", "2024"], abstract: "Reviews longitudinal studies on the relationship between early childhood malnutrition and academic performance, IQ scores, and behavioral outcomes in sub-Saharan Africa." },
  { title: "Renewable Energy Adoption in Rural Nigeria", type: "Project", level: "Undergraduate", pages: 20, rating: 4.6, downloads: 502, category: "Science", color: "#10b981", tags: ["MLA", "2024"], abstract: "Evaluates the feasibility and community acceptance of solar and wind energy solutions in off-grid rural communities across northern and southern Nigeria." },
  { title: "Impact of Inflation on Consumer Purchasing Power in Nigeria", type: "Seminar Paper", level: "Masters", pages: 17, rating: 4.8, downloads: 619, category: "Finance", color: "#f59e0b", tags: ["APA", "2024"], abstract: "Quantitative analysis of how rising inflation rates between 2020–2024 have eroded household purchasing power and altered consumer spending patterns in Nigeria." },
  { title: "Social Media Marketing Strategies for SMEs in Africa", type: "Research Paper", level: "Undergraduate", pages: 13, rating: 4.7, downloads: 845, category: "Business", color: "#3b82f6", tags: ["APA", "2024"], abstract: "Explores how small and medium enterprises in West Africa leverage Instagram, TikTok, and WhatsApp Business to drive customer acquisition and brand loyalty." },
  { title: "Mental Health Stigma Among Nigerian Youth", type: "Research Paper", level: "Masters", pages: 21, rating: 4.9, downloads: 731, category: "Psychology", color: "#ec4899", tags: ["APA", "2024"], abstract: "Investigates cultural, religious, and social factors that perpetuate mental health stigma among 18–35 year olds in Nigeria, with implications for public health campaigns." },
  { title: "E-Learning Adoption in Nigerian Secondary Schools", type: "Thesis Chapter", level: "PhD", pages: 32, rating: 4.8, downloads: 364, category: "Education", color: "#8b5cf6", tags: ["Harvard", "2024"], abstract: "Examines the readiness, infrastructure gaps, and teacher training needs for large-scale e-learning adoption in Nigerian public secondary schools post-COVID-19." },
];

const paperTypes = ["All Types", "Research Paper", "Thesis Chapter", "Seminar Paper", "Project"];
const levels = ["All Levels", "Undergraduate", "University", "Masters", "PhD"];
const categories = ["All", "Communication", "Science", "Technology", "Finance", "Psychology", "Education", "Health", "Business", "Urban Studies"];

const levelColors: Record<string, { bg: string; text: string }> = {
  "PhD":           { bg: "#8b5cf615", text: "#8b5cf6" },
  "Masters":       { bg: "#3b82f615", text: "#3b82f6" },
  "University":    { bg: "#06b6d415", text: "#06b6d4" },
  "Undergraduate": { bg: "#10b98115", text: "#10b981" },
};

type Paper = typeof allPapers[0];

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
      className="bg-card border border-border rounded-t-3xl sm:rounded-3xl w-full sm:max-w-lg p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
      onClick={e => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
      >
        <X className="w-4 h-4 text-muted-foreground" />
      </button>

      <div className="w-10 h-1 rounded-full mb-5" style={{ background: paper.color }} />

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

      <div className="flex gap-2 flex-wrap mb-6">
        {paper.tags.map(tag => (
          <span key={tag} className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">{tag}</span>
        ))}
        <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">{paper.category}</span>
      </div>

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.4) }}
      whileHover={{ y: -4, transition: { duration: 0.18 } }}
      className="group bg-card border border-border rounded-2xl overflow-hidden flex flex-col hover:shadow-xl hover:border-transparent transition-shadow duration-300"
    >
      <div className="h-1 w-full transition-all duration-500 group-hover:h-1.5"
        style={{ background: `linear-gradient(90deg, ${paper.color}, ${paper.color}70)` }} />

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: `${paper.color}12`, color: paper.color }}>
            {paper.type}
          </span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{ background: lc?.bg ?? "#f3f4f6", color: lc?.text ?? "#6b7280" }}>
            {paper.level}
          </span>
        </div>

        <h3 className="text-sm font-semibold text-foreground leading-snug mb-1 flex-1 group-hover:text-primary transition-colors duration-200">
          {paper.title}
        </h3>
        <p className="text-xs text-muted-foreground mb-4">{paper.category} · {paper.pages} pages</p>

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

const Products = () => {
  useSEO({
    title: "Browse Sample Papers — Essays, Research, Thesis & More",
    description: "Browse 18+ sample academic papers across all subjects and levels. Filter by type, level or subject. Preview any paper and order a custom version from our PhD writers.",
    canonical: "/products",
  });

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [levelFilter, setLevelFilter] = useState("All Levels");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [preview, setPreview] = useState<Paper | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return allPapers.filter(p => {
      const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase());
      const matchType = typeFilter === "All Types" || p.type === typeFilter;
      const matchLevel = levelFilter === "All Levels" || p.level === levelFilter;
      const matchCat = categoryFilter === "All" || p.category === categoryFilter;
      return matchSearch && matchType && matchLevel && matchCat;
    });
  }, [search, typeFilter, levelFilter, categoryFilter]);

  const hasActiveFilters = typeFilter !== "All Types" || levelFilter !== "All Levels" || categoryFilter !== "All" || search;

  const clearFilters = () => {
    setSearch("");
    setTypeFilter("All Types");
    setLevelFilter("All Levels");
    setCategoryFilter("All");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Page hero */}
        <section
          className="relative py-16 sm:py-20 overflow-hidden"
          style={{ background: "linear-gradient(135deg, hsl(216,35%,10%) 0%, hsl(217,45%,14%) 60%, hsl(216,35%,11%) 100%)" }}
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
              Browse Papers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/55 text-base sm:text-lg max-w-xl mb-8"
            >
              {allPapers.length} sample papers across all subjects and levels. Preview any paper, then order a custom version.
            </motion.p>

            {/* Search bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative max-w-xl"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                placeholder="Search by title or subject…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full h-12 pl-11 pr-4 rounded-2xl text-sm text-white placeholder:text-white/35 outline-none focus:ring-2 focus:ring-primary/60 transition-all"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)" }}
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70">
                  <X className="w-4 h-4" />
                </button>
              )}
            </motion.div>
          </div>
        </section>

        {/* Filters + grid */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4 md:px-8">

            {/* Filter bar */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {/* Mobile toggle */}
              <button
                onClick={() => setShowFilters(v => !v)}
                className="sm:hidden flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-medium text-foreground hover:border-primary/40 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters {hasActiveFilters ? "·" : ""}
              </button>

              {/* Desktop filters always visible, mobile collapsible */}
              <div className={`flex flex-wrap gap-2 w-full sm:w-auto ${showFilters ? "flex" : "hidden sm:flex"}`}>
                {/* Type */}
                <select
                  value={typeFilter}
                  onChange={e => setTypeFilter(e.target.value)}
                  className="h-9 px-3 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
                >
                  {paperTypes.map(t => <option key={t}>{t}</option>)}
                </select>

                {/* Level */}
                <select
                  value={levelFilter}
                  onChange={e => setLevelFilter(e.target.value)}
                  className="h-9 px-3 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
                >
                  {levels.map(l => <option key={l}>{l}</option>)}
                </select>

                {/* Category pills */}
                <div className="flex flex-wrap gap-1.5">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setCategoryFilter(cat)}
                      className="h-9 px-3 rounded-xl text-sm font-medium transition-all duration-200"
                      style={{
                        color: categoryFilter === cat ? "#fff" : "hsl(var(--muted-foreground))",
                        background: categoryFilter === cat ? "hsl(var(--primary))" : "hsl(var(--muted))",
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear + count */}
              <div className="flex items-center gap-3 ml-auto">
                {hasActiveFilters && (
                  <button onClick={clearFilters} className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
                    <X className="w-3 h-3" /> Clear
                  </button>
                )}
                <span className="text-sm text-muted-foreground">
                  {filtered.length} paper{filtered.length !== 1 ? "s" : ""}
                </span>
              </div>
            </div>

            {/* Grid */}
            <AnimatePresence mode="wait">
              {filtered.length > 0 ? (
                <motion.div
                  key={`${typeFilter}-${levelFilter}-${categoryFilter}-${search}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                >
                  {filtered.map((paper, i) => (
                    <PaperCard key={paper.title} paper={paper} index={i} onPreview={() => setPreview(paper)} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-24"
                >
                  <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
                    <Search className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <p className="text-foreground font-semibold mb-1">No papers found</p>
                  <p className="text-muted-foreground text-sm mb-5">Try adjusting your filters or search term.</p>
                  <button onClick={clearFilters} className="text-primary text-sm font-semibold hover:underline">Clear all filters</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-16 sm:py-20 relative overflow-hidden"
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
              className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3"
            >
              Don't see your topic?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/55 text-base sm:text-lg mb-8 max-w-md mx-auto"
            >
              We write on any subject, any level. Message us and get a custom quote in minutes.
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
                onClick={() => window.open("https://wa.me/2347012847111?text=Hello! I'd like a custom paper.", "_blank")}
              >
                Order Custom Paper <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {preview && <PreviewModal paper={preview} onClose={() => setPreview(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default Products;
