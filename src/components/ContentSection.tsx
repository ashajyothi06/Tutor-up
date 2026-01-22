import { motion } from 'framer-motion';
import tutorStudent from '@/assets/tutor-student.jpg';
import parentChild from '@/assets/parent-child-learning.jpg';
import onlineLearning from '@/assets/online-learning.jpg';

const ContentSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* First Row - Text | Image | Text */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Column 1 - Text 01 */}
          <motion.div 
            className="order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan to-teal"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xl font-bold text-secondary">01</span>
            </div>
            <div className="w-0.5 h-8 bg-gradient-to-b from-cyan to-cyan/20 ml-1 mb-4 rounded-full" />
            <p className="text-muted-foreground leading-relaxed">
              Sklassics is a premier tutoring company offering both online and offline education, delivering a personalized learning experience that caters to the diverse needs of today's students. With a team of expert trainers, Sklassics ensures high-quality instruction across various subjects, empowering students to excel, whether they're attending interactive online sessions or offline sessions.
            </p>
          </motion.div>

          {/* Column 2 - Center Image */}
          <motion.div 
            className="order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white">
                <img 
                  src={tutorStudent} 
                  alt="Tutor with student" 
                  className="w-full h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Column 3 - Text 02 */}
          <motion.div 
            className="order-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan to-teal"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              />
              <span className="text-xl font-bold text-secondary">02</span>
            </div>
            <div className="w-0.5 h-8 bg-gradient-to-b from-cyan to-cyan/20 ml-1 mb-4 rounded-full" />
            <p className="text-muted-foreground leading-relaxed">
  What makes Sklassics stand out is its AI-driven exam preparation application, which transforms how students prepare through personalized learning paths, intelligent feedback, and adaptive tests based on individual performance. By integrating AI, Sklassics ensures students are well-equipped to approach competitive exams with confidence and precision.
</p>

          </motion.div>
        </div>

        {/* Second Row - Image | Text + 03 | Image */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mt-16 items-start">
          {/* Left Image */}
          <motion.div 
            className="order-2 lg:order-1 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white">
                <img 
                  src={parentChild} 
                  alt="Parent and child learning" 
                  className="w-full h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Center - Text paragraph first, then 03, then more text */}
          <motion.div 
            className="order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* First paragraph */}
            {/* <p className="text-muted-foreground leading-relaxed mb-6">
              Whether learning from the comfort of home or in an immersive classroom environment, students benefit from tailored guidance by industry experts, up-to-date knowledge, and flexible learning options. With a mission to make education more accessible and effective, Sklassics is committed to helping students reach their full potential in the most efficient way possible.
            </p> */}
            
            {/* 03 indicator */}
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan to-teal"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              />
              <span className="text-xl font-bold text-secondary">03</span>
            </div>
            <div className="w-0.5 h-8 bg-gradient-to-b from-cyan to-cyan/20 ml-1 mb-4 rounded-full" />
            
            {/* Second paragraph - 03 content */}
            <p className="text-muted-foreground leading-relaxed">
  Sklassics combines expert-led instruction with advanced AI technology to deliver flexible, personalized learning experiences. Through adaptive guidance, up-to-date content, and intelligent support, the platform helps students build confidence, improve performance, and achieve academic and professional success anytime, anywhere.
</p>

          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="order-3 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white">
                <img 
                  src={onlineLearning} 
                  alt="Online learning" 
                  className="w-full h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;