import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { useLocation } from "wouter";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (platform: string) => {
    console.log(`${platform} link clicked`);
  };

  const [location, setLocation] = useLocation();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNavClick = (e: React.MouseEvent, id: string, route = "/") => {
    e.preventDefault();
    if (location === route) {
      scrollTo(id);
    } else {
      setLocation(route);
      setTimeout(() => scrollTo(id), 150);
    }
  };

  return (
    <footer id="about" className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-foreground">
              LifeGurukul <br /> Transform Your Life
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Expert solutions through Graphology, Vastu, Astrology & Numerology helping thousands achieve their dreams.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Contact'].map((link) => {
                const idMap: Record<string, string> = {
                  Home: 'hero',
                  Services: 'services',
                  About: 'about',
                  Contact: 'contact',
                };
                const id = idMap[link] || 'hero';
                return (
                  <li key={link}>
                    <button
                      onClick={(e) => handleNavClick(e, id, '/')}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Our Services</h4>
            <ul className="space-y-2">
              {['Graphology', 'Vastu Shastra', 'Astrology', 'Numerology'].map((service) => (
                <li key={service}>
                  <button
                    onClick={(e) => handleNavClick(e, 'services', '/')}
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
