import { Button } from '@/components/ui/button';
import learningCenter1 from '@/assets/learning-center-1.jpg';
import learningCenter2 from '@/assets/learning-center-2.jpg';

const LearningCentersSection = () => {
  const centers = [
    {
      name: 'Sklassics',
      location: 'Location: This is the content of the second card. It can have more descriptive text.',
      image: learningCenter1,
    },
    {
      name: 'Sklassics',
      location: 'Location: is the content of the second card. It can have more descriptive text.',
      image: learningCenter2,
    },
  ];

  return (
    <section id="centers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Our Learning Centers
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {centers.map((center, index) => (
            <div key={index} className="bg-card rounded-2xl overflow-hidden shadow-xl">
              {/* Main image */}
              <div className="relative h-64">
                <img
                  src={center.image}
                  alt={center.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gallery thumbnails */}
              <div className="grid grid-cols-2 gap-1">
                <div className="h-20 bg-muted">
                  <img
                    src={center.image}
                    alt=""
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
                <div className="h-20 bg-muted">
                  <img
                    src={center.image}
                    alt=""
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {center.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {center.location}
                </p>
                <Button className="bg-coral text-white hover:bg-coral/90 rounded-full px-8">
                  View More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningCentersSection;
