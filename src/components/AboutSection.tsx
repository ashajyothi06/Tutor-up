import { CheckCircle2, Users, Award, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import kidsLearning from '@/assets/kids-learning-ai.jpg';

const AboutSection = () => {
  const features = [
    { icon: Users, text: 'Expert AI Trainers' },
    { icon: Award, text: 'Certified Curriculum' },
    { icon: Rocket, text: 'Interactive Learning' },
  ];

  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '50K+', label: 'Happy Students' },
    { value: '98%', label: 'Success Rate' },
    { value: '24/7', label: 'AI Support' },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-50">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full blur-[100px] bg-cyan/10" />
        <div className="absolute bottom-20 right-40 w-48 h-48 rounded-full blur-[80px] bg-teal/10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan/20 to-teal/20 rounded-3xl blur-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-cyan rounded-tl-3xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-teal rounded-br-3xl" />
              
              <img 
                src={kidsLearning} 
                alt="Kids learning with AI" 
                className="rounded-2xl shadow-2xl w-full relative z-10"
              />

              {/* Floating stat card */}
              <motion.div
                className="absolute -right-6 -bottom-6 glass-dark rounded-2xl p-5 shadow-xl z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan to-teal flex items-center justify-center">
                    <Award className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary-foreground">4.9/5</p>
                    <p className="text-primary-foreground/60 text-sm">Student Rating</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="flex items-center gap-2 mb-6 text-cyan text-lg font-semibold">
  <span className="bg-cyan animate-pulse" />
  About Sklassics
</h2>

            
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6 leading-tight">
              India's Premier
              <span className="text-gradient-cyan"> AI-Powered</span>
              <br />Education Platform
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We're revolutionizing education with personalized AI learning experiences. 
              Our platform adapts to each student's unique learning style, pace, and goals 
              to deliver exceptional results.
            </p>

            {/* Feature list */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/10 to-teal/10 flex items-center justify-center group-hover:from-cyan/20 group-hover:to-teal/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-cyan" />
                  </div>
                  <span className="text-foreground font-medium text-lg">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-4 gap-4 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-2xl md:text-3xl font-bold text-gradient-cyan">{stat.value}</p>
                  <p className="text-muted-foreground text-xs mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
