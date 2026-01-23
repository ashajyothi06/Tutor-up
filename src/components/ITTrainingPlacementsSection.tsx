import { motion } from "framer-motion";

// ✅ Replace these with your real images from src/assets
import TrainingImg1 from "../assets/IT-1.jpeg";
import TrainingImg2 from "../assets/IT-2.jpeg";
import PlacementImg1 from "../assets/IT-3.jpeg";
import PlacementImg2 from "../assets/IT-4.jpeg";

const ITTrainingPlacementsSection = () => {
  const cards = [
    {
      title: "IT Training Sessions",
      meta: "Hands-on learning • Live demos",
      img: TrainingImg1,
    },
    {
      title: "Technical Skill Development",
      meta: "Projects • Real-time tools",
      img: TrainingImg2,
    },
    {
      title: "Placement Drive Highlights",
      meta: "Campus drives • Hiring support",
      img: PlacementImg1,
    },
    {
      title: "Career Guidance & Mentorship",
      meta: "Resume • Mock interviews",
      img: PlacementImg2,
    },
  ];

  return (
    <section
      id="training-placements"
      style={{ fontFamily: "Inter, sans-serif" }}
      className="py-14 md:py-18 relative overflow-hidden"
    >
      {/* ✅ teal background like sample */}
      <div className="absolute inset-0 bg-[#0f5f5a]" />
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-black/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-lg md:text-xl text-white/80 font-medium tracking-wide">
            Training & Career Support
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 leading-snug">
            IT Training & <span className="text-yellow-300">Placements</span>
          </h2>

          <p className="text-white/80 text-base md:text-lg mt-4 leading-relaxed">
            A glimpse of our IT training programs and placement activities —
            from hands-on technical sessions and project mentoring to placement
            drives, mock interviews, and career guidance.
          </p>
        </div>

        {/* ✅ 2×2 Grid like sample */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((c, i) => (
            <motion.article
              key={`${c.title}-${i}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-white/5">
                {/* fixed thumbnail size like the sample */}
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                </div>

                {/* label */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-black/25 text-white backdrop-blur border border-white/15">
                  Sklassics • Training
                </div>

                {/* text under image */}
                <div className="p-5">
                  <h3 className="text-base md:text-lg font-semibold text-white">
                    {c.title}
                  </h3>
                  <p className="text-sm text-white/75 mt-1">{c.meta}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITTrainingPlacementsSection;
