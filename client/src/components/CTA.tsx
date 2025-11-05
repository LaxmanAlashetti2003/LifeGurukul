import { Button } from "@/components/ui/button";

export default function CTA() {
  const handleConsultation = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCall = () => {
    window.location.href = 'tel:+91XXXXXXXXXX';
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" data-testid="text-cta-title">
            Ready to Transform Your Life?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-cta-subtitle">
            Join thousands who have already transformed their lives. Your journey to success starts today.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="px-8 py-6 text-lg"
            onClick={handleConsultation}
            data-testid="button-cta-consultation"
          >
            Start Free Analysis
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg"
            onClick={handleCall}
            data-testid="button-cta-call"
          >
            Call: +91 XXXXX XXXXX
          </Button>
        </div>
      </div>
    </section>
  );
}
