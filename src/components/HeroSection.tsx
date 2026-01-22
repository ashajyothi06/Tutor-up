import { ArrowRight, Play, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-creative.png';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#0a1628]">
      {/* Artistic gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f3c] via-[#0a1628] to-[#1a0a2e]" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, hsl(185 100% 50%) 0%, transparent 70%)',
            top: '-10%',
            left: '-10%',
            filter: 'blur(80px)',
          }}
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-4 pt-20 md:pt-24 pb-12 md:pb-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-140px)]">
          {/* Left content */}
          <motion.div
            className="lg:col-span-5 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Heading */}
            <div className="mb-6">
              <motion.h1
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight"
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                {/* <span className="text-white">Sklassics</span> */}
                <br />
                <span className="bg-gradient-to-r from-cyan via-teal to-emerald-400 bg-clip-text text-transparent">
                  Smart Tutoring
                </span>
                <br />
                <span className="text-white/90">
                  Built for Real Results
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              className="text-white/65 text-base md:text-lg mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              At Sklassics, we combine expert tutors with AI-powered insights to help
              students learn faster, understand deeper, and perform better in every subject.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan to-teal text-white font-semibold px-8 py-6 rounded-xl shadow-xl shadow-cyan/30"
              >
                <a href="#contact" className="flex items-center">
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>

              
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-8 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { value: '50K+', label: 'Students' },
                { value: '500+', label: 'Courses' },
                { value: '4.9', label: 'Rating', icon: Star },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                    {stat.icon && (
                      <stat.icon className="w-5 h-5 text-amber-400 fill-amber-400" />
                    )}
                  </div>
                  <p className="text-white/50 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="lg:col-span-7 order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <motion.img
                  src={heroImage}
                  alt="Sklassics AI Tutoring"
                  className="w-full h-auto object-cover"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
