import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Professional_expert_portrait_hero_a987f9a9.png";

export default function Hero() {
  const handleConsultation = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground" data-testid="text-hero-title">
                Transform Your Life
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-xl" data-testid="text-hero-subtitle">
                Expert solutions through Graphology, Vastu, Astrology & Numerology - helping thousands achieve health, wealth, and happiness
              </p>
            </div>

            <div className="flex flex-wrap gap-6 lg:gap-8">
              <div className="text-center" data-testid="stat-lives-changed">
                <div className="font-serif text-3xl md:text-4xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground mt-1">Lives Changed</div>
              </div>
              <div className="text-center" data-testid="stat-experience">
                <div className="font-serif text-3xl md:text-4xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div className="text-center" data-testid="stat-certification">
                <div className="font-serif text-3xl md:text-4xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Certified Expert</div>
              </div>
              <div className="text-center" data-testid="stat-results">
                <div className="font-serif text-3xl md:text-4xl font-bold text-primary">Proven</div>
                <div className="text-sm text-muted-foreground mt-1">Results</div>
              </div>
            </div>

            <div>
              <Button 
                size="lg" 
                className="px-8 py-6 text-lg rounded-full"
                onClick={handleConsultation}
                data-testid="button-get-consultation"
              >
                Get Free Consultation
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Dinesh Kumar Jhajhariya - Life Transformation Expert"
                className="w-full h-auto object-cover"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
