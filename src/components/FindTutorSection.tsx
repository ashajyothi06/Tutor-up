import { ArrowRight } from "lucide-react";
import studentsGroup from "@/assets/students-group.jpg";

const FindTutorSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background image with teal overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${studentsGroup})` }}
      />
      <div className="absolute inset-0 teal-gradient opacity-85" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* For Students */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow mb-6">
              Find a Home Tutor Near You
            </h2>
            <p className="text-white text-lg mb-8 max-w-md mx-auto">
              If you are a student/parent looking for a home tutor near you,
              please click the button below to post your requirements and get a
              free demo class from the best home tutors near you.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-semibold shadow-lg hover:opacity-95 transition text-lg"
            >
              I Need A Home/Online Tutor <ArrowRight className="ml-1" />
            </a>
          </div>

          {/* For Tutors */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              For Tutors
            </h2>
            <p className="text-white text-lg mb-8 max-w-md mx-auto">
              If you are a tutor/teacher interested in teaching part-time and
              looking for students who need home tuition, please click the
              button below to register as a home tutor for free.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:opacity-95 transition text-lg"
            >
              Register As A Tutor/Teacher <ArrowRight className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindTutorSection;
