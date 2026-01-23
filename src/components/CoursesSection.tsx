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
  info: string; // ✅ shown under class range in modal
}

const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState<CourseDetails | null>(null);

  const courses: CourseDetails[] = [
    {
      name: 'SSC',
      gradientFrom: '#10b981',
      gradientTo: '#059669',
      description:
        'SSC syllabus coaching for Classes 1–10 with strong focus on fundamentals, school exams, and board preparation.',
      classRange: 'Class I-X',
      info: 'Core subjects • Concept clarity • Board-focused practice',
    },
    {
      name: 'CBSE',
      gradientFrom: '#f97316',
      gradientTo: '#ea580c',
      description:
        'CBSE coaching for Classes 1–12 aligned with NCERT, including concept clarity, practice sessions, and board exam guidance.',
      classRange: 'Class I-XII',
      info: 'NCERT aligned • Sample papers • Board exam support',
    },
    {
      name: 'ISC',
      gradientFrom: '#a855f7',
      gradientTo: '#9333ea',
      description:
        'ISC subject coaching with structured learning for Classes 1–10 and focused preparation support for Intermediate students.',
      classRange: 'Class I-X',
      info: 'Detailed learning • Strong fundamentals • Exam readiness',
    },
    {
      name: 'ICSE',
      gradientFrom: '#ec4899',
      gradientTo: '#db2777',
      description:
        'ICSE coaching for Classes 1–10 with detailed subject coverage, application-based learning, and exam-oriented practice.',
      classRange: 'Class I-X',
      info: 'Application-based • Strong foundation • Practice tests',
    },
    {
      name: 'IGCSE',
      gradientFrom: '#3b82f6',
      gradientTo: '#2563eb',
      description:
        'Cambridge IGCSE curriculum training with concept-building, critical thinking skills, and subject-wise preparation.',
      classRange: 'Class IX-X',
      info: 'Cambridge pattern • Critical thinking • Global standards',
    },
    {
      name: 'Class XI-XII',
      gradientFrom: '#f59e0b',
      gradientTo: '#d97706',
      description:
        'Class 11 & 12 coaching across all boards with strong focus on subject mastery and competitive exam readiness.',
      classRange: 'Class XI-XII',
      info: 'Advanced concepts • Boards focus • Career readiness',
    },
    {
      name: 'EAMCET',
      gradientFrom: '#06b6d4',
      gradientTo: '#0891b2',
      description:
        'EAMCET coaching with topic-wise coverage, mock tests, previous papers, and exam-focused preparation strategy.',
      classRange: 'Intermediate',
      info: 'Topic-wise modules • Mock tests • Previous papers',
    },
    {
      name: 'JEE MAINS',
      gradientFrom: '#1e293b',
      gradientTo: '#0f172a',
      description:
        'JEE Main coaching for Physics, Chemistry, and Maths with advanced problem-solving, practice tests, and performance tracking.',
      classRange: 'Class XI-XII',
      info: 'PCM focus • Advanced problems • Test strategies',
    },
  ];

  const whyUsPoints = [
    'Tutorials by industry experts',
    'Peer & expert test review',
    'Intensive Learning',
    'Access to our GitHub repos',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
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
            Explore our curriculum designed for different boards and competitive exams
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
          {courses.map((course) => (
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
                  <ArrowUpRight className="w-5 h-5 text-white absolute top-2.5 right-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
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
              <DialogTitle className="text-2xl font-bold text-secondary font-display">Join our community</DialogTitle>
            </DialogHeader>
            <p className="text-muted-foreground mt-4 leading-relaxed">{selectedCourse?.description}</p>
          </div>

          {/* Bottom section with two columns */}
          <div className="grid grid-cols-2">
            {/* Left - Yellow section */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-6">
              <h4 className="text-xl font-bold text-secondary mb-2">{selectedCourse?.classRange}</h4>

              {/* ✅ updated info */}
              <p className="text-secondary/80 text-sm mb-4 leading-relaxed">{selectedCourse?.info}</p>

              {/* ✅ connect navigates to contact */}
              <a href="#contact" className="block">
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full font-semibold shadow-lg">
                  Connect
                </Button>
              </a>
            </div>

            {/* Right - Teal section */}
            <div className="bg-gradient-to-br from-teal to-cyan p-6">
              <h4 className="text-xl font-bold text-white mb-3">Why Us</h4>
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
