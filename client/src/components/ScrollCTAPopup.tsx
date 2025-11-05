import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

export default function ScrollCTAPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasShown) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage > 40 && !isVisible) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShown, isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleConsultation = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    setIsVisible(false);
  };

  const handleCall = () => {
    window.location.href = 'tel:+91XXXXXXXXXX';
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
      data-testid="popup-cta"
    >
      <Card className="max-w-lg w-full p-8 relative shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-close-popup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6 text-center">
          <div className="space-y-3">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              Ready to Transform Your Life?
            </h3>
            <p className="text-base text-muted-foreground">
              Join thousands who have already transformed their lives. Your journey to success starts today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="px-6"
              onClick={handleConsultation}
              data-testid="button-popup-consultation"
            >
              Start Free Analysis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-6"
              onClick={handleCall}
              data-testid="button-popup-call"
            >
              Call: +91 XXXXX XXXXX
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
