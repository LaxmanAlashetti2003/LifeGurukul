import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNavClick = (e: React.MouseEvent, id: string, route = "/") => {
    e.preventDefault();
    // If already on the route, just scroll. Otherwise navigate then scroll after a short delay.
    if (location === route) {
      scrollTo(id);
    } else {
      setLocation(route);
      // small delay to allow route render
      setTimeout(() => scrollTo(id), 150);
    }
    setMenuOpen(false);
  };
  return (
    <header className="w-full bg-background/60 backdrop-blur sticky top-0 z-40 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold text-foreground">
            LifeGurukul
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 items-center">
            <a
              href="#hero"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact", "/")}>
                <Button>Book a session</Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                aria-label="Open navigation menu"
                className="p-2 rounded focus:outline-none focus:ring"
                onClick={() => setMenuOpen((v) => !v)}
              >
                {/* Hamburger icon */}
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
              {/* Mobile dropdown menu */}
              {menuOpen && (
                <div className="absolute right-4 top-16 w-48 bg-background border rounded shadow-lg flex flex-col z-50 animate-in fade-in slide-in-from-top-2">
                  <a
                    href="#hero"
                    onClick={(e) => handleNavClick(e, "hero", "/")}
                    className="px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded"
                  >
                    Home
                  </a>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, "services", "/")}
                    className="px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded"
                  >
                    Services
                  </a>
                  <a
                    href="#about"
                    onClick={(e) => handleNavClick(e, "about", "/")}
                    className="px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded"
                  >
                    About
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "contact", "/")}
                    className="px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded"
                  >
                    Contact
                  </a>
                  <div className="px-4 py-2">
                    <a href="#contact" onClick={(e) => handleNavClick(e, "contact", "/")}>
                      <Button className="w-full">Book a session</Button>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
