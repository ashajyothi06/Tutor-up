import { useMemo, useState } from "react";
import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Send,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

type RoleType = "" | "student" | "parent" | "tutor" | "institution";

type ContactFormState = {
  name: string;
  phone: string;
  email: string;
  role: RoleType;
  message: string;
};

type SubmitStatus =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const ContactSection = () => {
  const ACCESS_KEY = "6c55b960-9434-4d60-aa94-646dda04d083"; // Web3Forms token

  const [formData, setFormData] = useState<ContactFormState>({
    name: "",
    phone: "",
    email: "",
    role: "",
    message: "",
  });

  const [status, setStatus] = useState<SubmitStatus>({ type: "idle" });

  const canSubmit = useMemo(() => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      formData.phone.trim() &&
      formData.role &&
      formData.message.trim()
    );
  }, [formData]);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "7-1-414/1 \nECIL, Hyderabad - 500016",
      gradient: "from-cyan to-teal",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 9392732341",
      gradient: "from-teal to-cyan",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@sklassics.com",
      gradient: "from-purple to-pink",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: MessageCircle, href: "#", label: "WhatsApp", color: "hover:bg-green-500" },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color:
        "hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) return;

    try {
      setStatus({ type: "loading" });

      const payload = {
        access_key: ACCESS_KEY,
        subject: "New Contact Form Submission — sklassics",
        from_name: "sklassics Website",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        message: formData.message,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data: { success: boolean; message?: string } = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setStatus({ type: "success", message: "Message sent successfully! We'll contact you soon." });

      setFormData({
        name: "",
        phone: "",
        email: "",
        role: "",
        message: "",
      });

      // Optional: auto-hide success after 4s
      setTimeout(() => setStatus({ type: "idle" }), 4000);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to send. Try again later.";
      setStatus({ type: "error", message: msg });
    }
  };

  return (
    
      <section id="contact" className="pt-24 pb-0 bg-secondary relative overflow-hidden">

      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-cyan text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-primary-foreground mb-6">
            Let's Start a <span className="text-gradient-cyan">Conversation</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              className={`w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-primary-foreground/60 transition-all duration-300 ${social.color} hover:text-primary-foreground hover:scale-110`}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="group glass-card rounded-2xl p-6 card-hover border border-primary-foreground/5 hover:border-cyan/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <info.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-foreground mb-2 font-display">{info.title}</h4>
                    <p className="text-primary-foreground/60 whitespace-pre-line leading-relaxed">{info.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-3xl p-8 md:p-10 border border-primary-foreground/5 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-cyan/20 to-teal/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-primary-foreground font-display">Send a Message</h3>
                    <p className="text-primary-foreground/40 text-sm">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                {/* ✅ Functional form */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-primary-foreground/60 text-sm font-medium">Full Name</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 rounded-xl h-12 focus:border-cyan/50 focus:ring-cyan/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-primary-foreground/60 text-sm font-medium">Phone Number</label>
                      <Input
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 rounded-xl h-12 focus:border-cyan/50 focus:ring-cyan/20"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-primary-foreground/60 text-sm font-medium">Email Address</label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 rounded-xl h-12 focus:border-cyan/50 focus:ring-cyan/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-primary-foreground/60 text-sm font-medium">I am a</label>
                      <Select
                        value={formData.role}
                        onValueChange={(value: RoleType) => setFormData({ ...formData, role: value })}
                      >
                        <SelectTrigger className="bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground rounded-xl h-12 focus:border-cyan/50 focus:ring-cyan/20">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent className="bg-secondary border-primary-foreground/10">
                          <SelectItem value="student" className="text-primary-foreground">Student</SelectItem>
                          <SelectItem value="parent" className="text-primary-foreground">Parent</SelectItem>
                          <SelectItem value="tutor" className="text-primary-foreground">Tutor</SelectItem>
                          <SelectItem value="institution" className="text-primary-foreground">Institution</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-primary-foreground/60 text-sm font-medium">Your Message</label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you need..."
                      className="bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 rounded-xl min-h-[140px] focus:border-cyan/50 focus:ring-cyan/20 resize-none"
                    />
                  </div>

                  {/* Status message */}
                  {status.type === "success" && (
                    <div className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-green-200 text-sm">
                      {status.message}
                    </div>
                  )}
                  {status.type === "error" && (
                    <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-red-200 text-sm">
                      {status.message}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={status.type === "loading" || !canSubmit}
                    className="w-full bg-gradient-to-r from-cyan to-teal text-secondary font-semibold rounded-xl h-14 text-lg btn-glow group disabled:opacity-60"
                  >
                    {status.type === "loading" ? "Sending..." : "Send Message"}
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                    {["Fast Response", "Secure Data", "Free Consultation"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-primary-foreground/40 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
