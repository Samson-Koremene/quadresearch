import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const paperTypes = ["Essay", "Research Paper", "Project", "Seminar Paper", "Thesis", "Dissertation", "Assignment", "SIWES Technical Report"];
const levels = ["High School", "College", "Undergraduate", "Masters", "PhD"];

const ContactForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", paperType: "", level: "", email: "", phone: "", topic: "", notes: "" });
  const set = (f: string, v: string) => setForm(p => ({ ...p, [f]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.paperType || !form.level || !form.email || !form.phone) {
      toast({ title: "Fill in all required fields", variant: "destructive" });
      return;
    }
    const msg = `Hello! Order request:\n\n👤 ${form.name}\n📝 ${form.paperType}\n🎓 ${form.level}\n📧 ${form.email}\n📞 ${form.phone}${form.topic ? `\n📚 Topic: ${form.topic}` : ""}${form.notes ? `\n📋 Notes: ${form.notes}` : ""}\n\nPlease send a quote.`;
    window.open(`https://wa.me/2347012847111?text=${encodeURIComponent(msg)}`, "_blank");
    toast({ title: "Opening WhatsApp…" });
  };

  return (
    <section className="py-16 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:top-28"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-black text-foreground leading-tight mb-3">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              Fill in your details and we'll connect you with the right writer. Fast, confidential, professional.
            </p>
            <div className="space-y-3 mb-7">
              {["100% plagiarism-free, every time", "Delivery from as fast as 1 hour", "Free revisions until you're satisfied", "Completely confidential — always"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="flex items-center gap-3 text-foreground/75 text-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </motion.div>
              ))}
            </div>
            <button
              onClick={() => window.open('https://wa.me/2347012847111', '_blank')}
              className="flex items-center gap-3 p-4 rounded-2xl border border-green-200 bg-green-50 hover:bg-green-100 transition-colors w-full text-left"
            >
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-green-900">Prefer to chat first?</p>
                <p className="text-xs text-green-600">Message us directly on WhatsApp</p>
              </div>
            </button>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-card border border-border rounded-2xl p-5 sm:p-8 shadow-xl"
          >
            <form onSubmit={submit} className="space-y-4">
              {/* Name */}
              <div className="space-y-1.5">
                <Label className="text-sm font-semibold">Full Name *</Label>
                <Input type="text" placeholder="Your full name" value={form.name} onChange={e => set("name", e.target.value)} required />
              </div>

              {/* Paper type + level — stack on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-sm font-semibold">Paper Type *</Label>
                  <Select value={form.paperType} onValueChange={v => set("paperType", v)}>
                    <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                    <SelectContent>{paperTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-sm font-semibold">Academic Level *</Label>
                  <Select value={form.level} onValueChange={v => set("level", v)}>
                    <SelectTrigger><SelectValue placeholder="Select level" /></SelectTrigger>
                    <SelectContent>{levels.map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
              </div>

              {/* Email + phone — stack on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-sm font-semibold">Email *</Label>
                  <Input type="email" placeholder="you@email.com" value={form.email} onChange={e => set("email", e.target.value)} required />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-sm font-semibold">Phone *</Label>
                  <Input type="tel" placeholder="+234 XXX XXX XXXX" value={form.phone} onChange={e => set("phone", e.target.value)} required />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-sm font-semibold">Research Topic <span className="font-normal text-muted-foreground">(optional)</span></Label>
                <Textarea placeholder="Your approved topic, if any…" value={form.topic} onChange={e => set("topic", e.target.value)} className="min-h-[70px] resize-none" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm font-semibold">Instructions <span className="font-normal text-muted-foreground">(optional)</span></Label>
                <Textarea placeholder="Deadline, formatting style, specific requirements…" value={form.notes} onChange={e => set("notes", e.target.value)} className="min-h-[80px] resize-none" />
              </div>

              <Button type="submit" size="lg" className="w-full text-base font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 py-6">
                <MessageSquare className="w-5 h-5" />
                Send Order via WhatsApp
              </Button>
              <p className="text-center text-xs text-muted-foreground">Your information is kept strictly confidential.</p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
