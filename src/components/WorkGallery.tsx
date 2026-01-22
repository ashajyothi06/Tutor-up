import { motion } from "framer-motion";

// ✅ Your real images from src/assets
import AdithyaImg from "../assets/adithya-1.png";
import GayathriImg from "../assets/gayathri-1.png";
import CMRImg from "../assets/CMR-1.png";
import AuroraImg from "../assets/aurora.png";
import ComboImg from "../assets/combined_college_horizontal.png";
import AvcollegeImg from "../assets/AVCollege11.png";
import padmavathiImg from "../assets/padmavathi.jpeg";

const WorkshopGallerySection = () => {
  const albums = [
    {
      title: "Adithya University",
      meta: "Gen AI Workshop • Faculty & Students",
      img: AdithyaImg,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Gayatri Vidya Parishad College of Engineering (Autonomous) (GVP) (GVPCE)",
      meta: " Gen Ai Workshop,• Campus Session",
      img: GayathriImg,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "CMR Technical Campus",
      meta: "Power BI Workshop • Hands-on Training",
      img: CMRImg,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Aurora’s Engineering College",
      meta: "POWER BI Workshop • Practical Lab Session",
      img: AuroraImg,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Some of the Achievements",
      meta: "Training Program • College Seminar",
      img: ComboImg,
      className: "md:col-span-2 md:row-span-1",
    },
    {
      title: "A.V. College of Arts, Science & Commerce",
      meta: "DataScience Workshop • AI Awareness Session",
      img: AvcollegeImg,
      className: "md:col-span-1 md:row-span-1",
    },
     {
      title: "SRI PADMAVATI MAHILA VISVAVIDYALAYAM",
      meta: "Training Program • DataScience",
      img: padmavathiImg,
      className: "md:col-span-1 md:row-span-1",
    },
     {
      title: "Aurora’s Engineering College",
      meta: "POWER BI Workshop • Practical Lab Session",
      img: AuroraImg,
      className: "md:col-span-1 md:row-span-1",
    },
  ];

  return (
    <section
      id="workshops"
      style={{ fontFamily: "Inter, sans-serif" }}
      className="pt-12 md:pt-16 pb-10 md:pb-14 bg-background relative overflow-hidden font-sans"
    >
      {/* soft background blobs */}
      <div className="absolute top-0 left-0 w-1/2 h-full opacity-50">
        <div className="absolute top-24 left-24 w-72 h-72 rounded-full blur-[110px] bg-cyan/10" />
        <div className="absolute bottom-24 left-40 w-56 h-56 rounded-full blur-[90px] bg-teal/10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <p className="text-3xl md:text-4xl text-foreground/80 font-medium tracking-wide">
            Workshops
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
            Conducted Across{" "}
            <span className="text-gradient-cyan">Different Colleges</span>
          </h2>

          <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
            Real college campuses. Real students. Real outcomes. Here’s a snapshot
            of our workshops conducted across different colleges.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {albums.map((a, i) => (
            <motion.article
              key={`${a.title}-${i}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className={a.className}
            >
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={a.img}
                    alt={a.title}
                    className="h-60 md:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-70" />

                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-background/20 text-white backdrop-blur border border-white/15">
                    Sklassics • Workshop
                  </div>
                </div>

                {/* ✅ Only related info under the image */}
                <div className="mt-3">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    {a.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{a.meta}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-6 md:mt-8 flex items-center justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-cyan to-teal text-secondary font-semibold shadow-lg hover:opacity-95 transition"
          >
            Book a Workshop for Your College
            <span className="text-secondary/90">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkshopGallerySection;
