
import { BookOpen, Clock, Users, Monitor, Brain, Target } from 'lucide-react';

import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Interactive Learning',
      description: 'Engage with hands-on exercises, quizzes, and real-time problem-solving sessions that make learning fun and effective.',
      gradient: 'from-cyan to-teal',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Learn at your own pace with 24/7 access. Schedule sessions that fit perfectly into your busy lifestyle.',
      gradient: 'from-purple-light to-purple',
    },
    {
      icon: Users,
      title: 'Personalized Attention',
      description: 'Our AI adapts to your learning style, identifying strengths and areas for improvement for a truly custom experience.',
      gradient: 'from-coral to-pink',
    },
    {
      icon: Monitor,
      title: 'Online & Offline',
      description: 'Choose between virtual classes with interactive tools or face-to-face sessions at our learning centers.',
      gradient: 'from-teal to-cyan',
    },
    {
  icon: Brain,
  title: 'AI-Powered Insights',
  description: 'Receive intelligent feedback and performance insights that help you understand and improve your learning journey.',
  gradient: 'from-indigo-500 to-cyan-500',


    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Set clear learning objectives and track your progress with detailed analytics and achievement badges.',
      gradient: 'from-cyan to-purple',
    },
  ];

  return (
    <section id="features" className="py-24 bg-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-cyan text-sm font-medium mb-6">
  Why Choose Us
</span>

          <h2 className="text-4xl md:text-5xl font-bold font-display text-primary-foreground mb-6">
            Features That Set Us
            <span className="text-gradient-cyan"> Apart</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg">
            Experience the next generation of education with our innovative features 
            designed to maximize your learning potential.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass-card rounded-2xl p-8 card-hover border border-primary-foreground/5 hover:border-cyan/30">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-secondary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary-foreground mb-3 font-display">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/60 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center gap-2 text-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Learn more</span>
                  <motion.span 
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-primary-foreground/40 text-sm">
            And many more features to discover...
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
