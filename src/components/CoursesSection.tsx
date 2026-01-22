import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface CourseDetails {
  name: string;
  gradientFrom: string;
  gradientTo: string;
  description: string;
  classRange: string;
  price: string;
}

const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState<CourseDetails | null>(null);

  const courses: CourseDetails[] = [
    { 
      name: 'SSC', 
      gradientFrom: '#10b981',
      gradientTo: '#059669',
      description: 'Grades 1-10: Comprehensive SSC curriculum covering all core subjects with focus on board exam preparation and conceptual understanding.',
      classRange: 'Class I-X',
      price: 'Full access for less than $1 a day'
    },
    { 
      name: 'CBSE', 
      gradientFrom: '#f97316',
      gradientTo: '#ea580c',
      description: 'Grades 1-12: Complete CBSE syllabus with NCERT-aligned content, practice papers, and expert guidance for board exams.',
      classRange: 'Class I-XII',
      price: 'Full access for less than $1 a day'
    },
    { 
      name: 'ISC', 
      gradientFrom: '#a855f7',
      gradientTo: '#9333ea',
      description: 'Grades 1-10: Solid foundation in ISC-approved subjects, fostering strong academic skills and knowledge. 1st and 2nd Year: Advanced tutoring for ISC intermediate students, focusing on thorough subject comprehension and exam readiness.',
      classRange: 'Class I-X',
      price: 'Full access for less than $1 a day'
    },
    { 
      name: 'ICSE', 
      gradientFrom: '#ec4899',
      gradientTo: '#db2777',
      description: 'Grades 1-10: Comprehensive ICSE curriculum with detailed subject coverage, application-based learning, and competitive exam preparation.',
      classRange: 'Class I-X',
      price: 'Full access for less than $1 a day'
    },
    { 
      name: 'IGCSE', 
      gradientFrom: '#3b82f6',
      gradientTo: '#2563eb',
      description: 'International curriculum covering Cambridge IGCSE subjects with global standards, critical thinking development, and university preparation.',
      classRange: 'Class IX-X',
      price: 'Full access for less than $1 a day'
    },
    { 
      name: 'Class XI-XII', 
      gradientFrom: '#f59e0b',
      gradientTo: '#d97706',
      description: 'Advanced level preparation for Class 11 and 12 students across all boards with focus on competitive exams and career readiness.',
      classRange: 'Class XI-XII',
      price: 'Full access for less than $1 a day'
    },
    { 
      name: 'EAMCET', 
      gradientFrom: '#06b6d4',
      gradientTo: '#0891b2',
      description: 'Comprehensive EAMCET preparation with topic-wise modules, previous year papers, mock tests, and personalized coaching for engineering and medical aspirants.',
      classRange: 'Intermediate',
      price: 'Full access for less than $1 a day'
    },
    { 
      name: 'JEE MAINS', 
      gradientFrom: '#1e293b',
      gradientTo: '#0f172a',
      description: 'Complete JEE Main preparation covering Physics, Chemistry, and Mathematics with advanced problem-solving techniques and test strategies.',
      classRange: 'Class XI-XII',
      price: 'Full access for less than $1 a day'
    },
  ];

  const whyUsPoints = [
    'Tutorials by industry experts',
    'Peer & expert test review',
    'Intensive Learning',
    'Access to our GitHub repos'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="courses" className="py-24 bg-gradient-to-b from-slate-100 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan/10 text-cyan text-sm font-semibold mb-4">
            Our Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-4">
            Choose Your <span className="text-gradient-cyan">Learning Path</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our comprehensive curriculum designed for various educational boards and competitive exams
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.name}
              variants={cardVariants}
              onClick={() => setSelectedCourse(course)}
              className="group cursor-pointer"
            >
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
                {/* Card content */}
                <div className="p-8 pt-12 pb-10">
                  <h3 className="text-xl md:text-2xl font-bold text-secondary text-center group-hover:text-cyan transition-colors duration-300">
                    {course.name}
                  </h3>
                </div>
                
                {/* Colored corner badge with arrow */}
                <div 
                  className="absolute top-0 right-0 w-14 h-14 flex items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${course.gradientFrom} 0%, ${course.gradientTo} 100%)`,
                    clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                  }}
                >
                  <ArrowUpRight 
                    className="w-5 h-5 text-white absolute top-2.5 right-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" 
                  />
                </div>

                {/* Subtle bottom gradient line */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${course.gradientFrom}, ${course.gradientTo})`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Course Detail Modal */}
      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="sm:max-w-lg p-0 overflow-hidden rounded-3xl border-0 shadow-2xl">
          <div className="p-8 pb-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-secondary font-display">
                Join our community
              </DialogTitle>
            </DialogHeader>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              {selectedCourse?.description}
            </p>
          </div>

          {/* Bottom section with two columns */}
          <div className="grid grid-cols-2">
            {/* Left - Yellow section */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-6">
              <h4 className="text-xl font-bold text-secondary mb-3">
                {selectedCourse?.classRange}
              </h4>
              <p className="text-secondary/80 text-sm mb-4">
                {selectedCourse?.price}
              </p>
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full font-semibold shadow-lg">
                Connect
              </Button>
            </div>

            {/* Right - Teal section */}
            <div className="bg-gradient-to-br from-teal to-cyan p-6">
              <h4 className="text-xl font-bold text-white mb-3">
                Why Us
              </h4>
              <ul className="space-y-2">
                {whyUsPoints.map((point) => (
                  <li key={point} className="text-white/90 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CoursesSection;