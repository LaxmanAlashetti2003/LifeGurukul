import Hero from "@/components/Hero";
import LifeSegments from "@/components/LifeSegments";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import VisitUs from "@/components/VisitUs";
import FollowUs from "@/components/FollowUs";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollCTAPopup from "@/components/ScrollCTAPopup";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <LifeSegments />
      <Services />
      <Testimonials />
      <VisitUs />
      {/* <FollowUs /> */}
      <Contact />
      <FAQ />
      <Footer />
      <ScrollCTAPopup />
    </div>
  );
}
