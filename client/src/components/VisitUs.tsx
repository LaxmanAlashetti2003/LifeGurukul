import { Card } from "@/components/ui/card";
import { MapPin, Building2, Navigation } from "lucide-react";

export default function VisitUs() {
  const handleGetDirections = () => {
    console.log('Get directions clicked');
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" data-testid="text-visit-title">
            Come Visit Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-visit-subtitle">
            Experience transformative consultations in person at our peaceful office space
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 text-center hover-elevate transition-all duration-300" data-testid="card-location">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
              Our Location
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your City, Your State<br />
              India - 000000
            </p>
          </Card>

          <Card className="p-8 text-center hover-elevate transition-all duration-300" data-testid="card-office">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
              Office Hours
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Monday - Saturday<br />
              9:00 AM - 7:00 PM<br />
              Sunday: 10:00 AM - 5:00 PM
            </p>
          </Card>

          <Card className="p-8 text-center hover-elevate transition-all duration-300" data-testid="card-directions">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Navigation className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
              Get Directions
            </h3>
            <button
              onClick={handleGetDirections}
              className="text-sm text-primary hover:underline mt-2"
              data-testid="button-directions"
            >
              View on Maps →
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
}
