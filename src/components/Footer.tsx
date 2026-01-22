import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Footer = () => {
  const platformLinks = ['Plans & Pricing', 'AI Tutor', 'Course Catalog', 'Mobile App'];
  const companyLinks = ['About Us', 'Careers', 'Blog', 'Press'];
  const resourceLinks = ['Help Center', 'Community', 'Webinars', 'Tutorials'];
  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal/5 rounded-full blur-[100px]" />
      </div>

      {/* Newsletter section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold font-display text-primary-foreground mb-2">
                Stay Updated with <span className="text-gradient-cyan">Sklassics</span>
              </h3>
              <p className="text-primary-foreground/60">
                Get the latest updates on courses, features, and learning tips.
              </p>
            </div> */}

            {/* <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-cyan/50 min-w-[280px]"
              />
              <Button className="bg-gradient-to-r from-cyan to-teal text-secondary font-semibold px-6 btn-glow whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src={logo}
                alt="Sklassics Logo"
                className="h-12 w-auto"
              />
            </div>

            <p className="text-primary-foreground/60 mb-6 max-w-sm">
              Revolutionizing education with AI-powered personalized learning experiences.
              Your journey to success starts here.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-primary-foreground/60">
                <Phone className="w-5 h-5 text-cyan" />
                <span>+91 9392732341</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/60">
                <Mail className="w-5 h-5 text-cyan" />
                <span>info@sklassics.com</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/60">
                <MapPin className="w-5 h-5 text-cyan" />
                <span>ECIL, Hyderabad - 500016</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-primary-foreground/5 flex items-center justify-center text-primary-foreground/60 hover:bg-cyan/20 hover:text-cyan transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-lg font-bold text-primary-foreground mb-6">Platform</h4>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/60 hover:text-cyan transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold text-primary-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/60 hover:text-cyan transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold text-primary-foreground mb-6">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/60 hover:text-cyan transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/40 text-sm">
              © 2024 Sklassics. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/40 text-sm hover:text-cyan transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/40 text-sm hover:text-cyan transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/40 text-sm hover:text-cyan transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
