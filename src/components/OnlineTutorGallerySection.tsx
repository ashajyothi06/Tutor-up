import { motion } from "framer-motion";

// ✅ Replace with your 3 real images from src/assets
import TutorImg1 from "../assets/tutor-1.jpeg";
import TutorImg2 from "../assets/tutor-2.jpeg";
import TutorImg3 from "../assets/tutor-3.jpeg";

const OnlineTutorGallerySection = () => {
  const tiles = [
    {
      title: "1:1 Online Tutoring",
      meta: "Personalized learning",
      img: TutorImg1,
      className: "md:col-span-2 md:row-span-2", // ✅ BIG LEFT
    },
    {
      title: "Expert Guidance",
      meta: "Top tutors support",
      img: TutorImg2,
      className: "md:col-span-2 md:row-span-1", // ✅ TOP RIGHT
    },
    {
      title: "Live Doubt Clearing",
      meta: "Instant Q&A sessions",
      img: TutorImg3,
      className: "md:col-span-2 md:row-span-1", // ✅ BOTTOM RIGHT
    },
  ];

  return (
    <section id="tutor-gallery" className="relative py-16 md:py-20 overflow-hidden">
      {/* ✅ Dark Background (like reference) */}
      <div className="absolute inset-0 bg-[#0b0f14]" />
      <div className="absolute inset-0 opacity-35">
        <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 w-[30rem] h-[30rem] rounded-full bg-cyan/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* ✅ Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-white/70 text-sm md:text-base font-medium tracking-wide">
            Online Tutor Gallery
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Learn Anytime with{" "}
            <span className="text-cyan-300">Online Tutors</span>
          </h2>

          <p className="text-white/70 text-base md:text-lg mt-4 leading-relaxed">
            Explore our online teaching experience — personalized sessions, expert
            guidance, and doubt-clearing support designed to help students learn
            better and score higher.
          </p>
        </div>

        {/* ✅ 3 Image Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-7 auto-rows-[200px] md:auto-rows-[220px]">
          {tiles.map((t, i) => (
            <motion.div
              key={`${t.title}-${i}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`group relative ${t.className}`}
            >
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
                <img
                  src={t.img}
                  alt={t.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  loading="lazy"
                />

                {/* ✅ Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/25 transition-colors" />

                {/* ✅ Caption */}
                <div className="absolute left-4 right-4 bottom-4">
                  <div className="rounded-2xl bg-black/35 backdrop-blur px-4 py-3 border border-white/10">
                    <p className="text-white font-semibold text-sm md:text-base leading-tight">
                      {t.title}
                    </p>
                    <p className="text-white/70 text-xs md:text-sm mt-0.5">
                      {t.meta}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineTutorGallerySection;
