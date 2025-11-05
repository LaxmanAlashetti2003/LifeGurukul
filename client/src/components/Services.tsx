import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PenTool, Home, Star, Hash } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Graphology DNA Correction",
    description: "Transform your personality and life patterns through scientific handwriting analysis",
    features: [
      "Personality trait analysis",
      "Behavioral pattern correction",
      "Confidence building techniques",
      "Success mindset development"
    ]
  },
  {
    icon: Home,
    title: "Vastu Shastra",
    description: "Harmonize your living and working spaces with ancient architectural wisdom",
    features: [
      "Home energy optimization",
      "Office layout guidance",
      "Prosperity enhancement",
      "Health improvement zones"
    ]
  },
  {
    icon: Star,
    title: "Astrology",
    description: "Unlock cosmic insights for better decision-making and life direction",
    features: [
      "Birth chart analysis",
      "Career guidance",
      "Relationship compatibility",
      "Future predictions"
    ]
  },
  {
    icon: Hash,
    title: "Numerology",
    description: "Discover the hidden power of numbers in your personal journey",
    features: [
      "Life path number analysis",
      "Name vibration correction",
      "Lucky number identification",
      "Timing recommendations"
    ]
  }
];

export default function Services() {
  const handleLearnMore = (serviceName: string) => {
    console.log(`Learn more about ${serviceName} clicked`);
  };

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" data-testid="text-services-title">
            Our Transformative Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-subtitle">
            Ancient wisdom meets modern application. Our specialized tools help you overcome life's challenges and unlock your true potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 flex flex-col hover-elevate transition-all duration-300"
                data-testid={`card-service-${index}`}
              >
                <div className="space-y-6 flex-1 flex flex-col">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2 flex-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="ghost"
                    className="w-full justify-start px-0 text-primary hover:text-primary"
                    onClick={() => handleLearnMore(service.title)}
                    data-testid={`button-learn-more-${index}`}
                  >
                    Learn More →
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
