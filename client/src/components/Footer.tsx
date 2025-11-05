import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (platform: string) => {
    console.log(`${platform} link clicked`);
  };

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Transform Your Life
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Expert solutions through Graphology, Vastu, Astrology & Numerology helping thousands achieve their dreams.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Testimonials', 'FAQ', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => console.log(`Navigate to ${link}`)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Our Services</h4>
            <ul className="space-y-2">
              {['Graphology', 'Vastu Shastra', 'Astrology', 'Numerology'].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => console.log(`View ${service}`)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect With Us</h4>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => handleSocialClick('Facebook')}
                data-testid="button-facebook"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => handleSocialClick('Instagram')}
                data-testid="button-instagram"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => handleSocialClick('LinkedIn')}
                data-testid="button-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => handleSocialClick('YouTube')}
                data-testid="button-youtube"
              >
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground pt-4">
              Mon-Sat: 9AM - 7PM<br />
              Sunday: 10AM - 5PM
            </p>
          </div>
        </div>

        <div className="pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Dinesh Kumar Jhajhariya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
