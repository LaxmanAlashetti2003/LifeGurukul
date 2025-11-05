import { Card } from "@/components/ui/card";
import { Heart, Users, Brain, Briefcase, Globe, Zap } from "lucide-react";

const segments = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Physical, mental, and emotional well-being for a balanced life"
  },
  {
    icon: Users,
    title: "Relationships",
    description: "Life partner, family, friends, and meaningful connections"
  },
  {
    icon: Brain,
    title: "Mind & Dreams",
    description: "Mental clarity, personal growth, and achieving your aspirations"
  },
  {
    icon: Briefcase,
    title: "Career & Business",
    description: "Professional success, job satisfaction, and financial stability"
  },
  {
    icon: Globe,
    title: "Social Life",
    description: "Community involvement, social recognition, and responsibility"
  },
  {
    icon: Zap,
    title: "Energy & Vitality",
    description: "Life force, motivation, and enthusiasm for daily activities"
  }
];

export default function LifeSegments() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" data-testid="text-segments-title">
            Life Segments We Address
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-segments-subtitle">
            Every human faces challenges across different areas of life. We provide comprehensive solutions for all aspects of your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <Card
                key={index}
                className="p-8 hover-elevate transition-all duration-300"
                data-testid={`card-segment-${index}`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
                    {segment.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {segment.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
