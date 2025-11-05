import Hero from "@/components/Hero";
import LifeSegments from "@/components/LifeSegments";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <LifeSegments />
      <Services />
      <Testimonials />
      <CTA />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}
