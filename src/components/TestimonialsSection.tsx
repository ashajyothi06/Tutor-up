import { Star, Quote, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import avatar1 from '@/assets/avatar-1.jpg';
import avatar2 from '@/assets/avatar-2.jpg';
import avatar3 from '@/assets/avatar-3.jpg';
import avatar4 from '@/assets/avatar-4.jpg';
import avatar5 from '@/assets/avatar-5.jpg';
import avatar6 from '@/assets/avatar-6.jpg';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const testimonials = [
    { 
      image: avatar1, 
      name: 'Priya Sharma', 
      role: 'Class 10 Student',
      text: 'The AI tutoring helped me improve my math scores by 40%. The personalized approach is amazing!',
      rating: 5 
    },
    { 
      image: avatar2, 
      name: 'Rahul Kumar', 
      role: 'Parent',
      text: 'My daughter loves the interactive lessons. She actually looks forward to studying now!',
      rating: 5 
    },
    { 
      image: avatar3, 
      name: 'Ananya Patel', 
      role: 'Class 12 Student',
      text: 'The flexible scheduling helped me balance my studies with extracurricular activities perfectly.',
      rating: 5 
    },
    { 
      image: avatar4, 
      name: 'Vikram Singh', 
      role: 'College Student',
      text: 'Best online learning platform I have used. The AI feedback is incredibly helpful!',
      rating: 5 
    },
    { 
      image: avatar5, 
      name: 'Meera Reddy', 
      role: 'Working Professional',
      text: 'Finally found a platform that fits my busy schedule. Highly recommend for lifelong learners!',
      rating: 4 
    },
    { 
      image: avatar6, 
      name: 'Arjun Nair', 
      role: 'Class 8 Student',
      text: 'The games and quizzes make learning so much fun. I actually enjoy my homework now!',
      rating: 5 
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 text-cyan text-sm font-medium mb-6">
            
            Student Success Stories
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
  What Our
  <span className="text-gradient-cyan"> Students Say</span>
</h2>

          <p className="text-muted-foreground text-lg">
            Join thousands of happy students who have transformed their learning journey with us.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl p-6 shadow-lg card-hover border border-border hover:border-cyan/30">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-cyan/20 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow fill-yellow' : 'text-muted'}`}
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-cyan/20"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-secondary via-secondary to-secondary rounded-3xl p-12 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 dot-pattern opacity-10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-primary-foreground/60 text-lg mb-8 max-w-xl mx-auto">
              Join our community of learners and tutors. Your success story starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a href="#contact">
    <Button
      size="lg"
      className="bg-gradient-to-r from-cyan to-teal text-secondary font-semibold px-8 btn-glow"
    >
      Start Learning
      <ArrowRight className="ml-2 w-5 h-5" />
    </Button>
  </a>

  <a href="#contact">
    <Button
      size="lg"
      variant="outline"
      className="border-cyan/50 text-cyan hover:bg-cyan/10"
    >
      Join as Tutor
    </Button>
  </a>
</div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
