import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Graphology and how can it help me?",
    answer: "Graphology is the scientific study of handwriting analysis. It reveals your personality traits, behavioral patterns, and subconscious tendencies. Through DNA correction techniques, we help you modify specific strokes in your handwriting to bring positive changes in your personality, confidence, and overall life patterns."
  },
  {
    question: "How does a Vastu consultation work?",
    answer: "Our Vastu consultation involves analyzing your home or office layout based on ancient architectural principles. We assess the energy flow, identify problem areas, and provide practical solutions to harmonize your space. Most corrections can be done without major renovations, using simple adjustments and placement of objects."
  },
  {
    question: "What information do you need for astrology readings?",
    answer: "For an accurate astrology reading, we need your birth date, exact birth time, and birth place. This information helps us create your birth chart (Kundali) and provide precise insights about your life path, career, relationships, and future opportunities."
  },
  {
    question: "How long does it take to see results?",
    answer: "Results vary depending on the service and individual circumstances. Graphology changes can show effects within 21-40 days of consistent practice. Vastu corrections often bring noticeable improvements within 3-6 months. Astrological guidance provides immediate clarity, while remedies work progressively over time."
  },
  {
    question: "Are online consultations as effective as in-person sessions?",
    answer: "Yes, our online consultations are equally effective. With modern technology, we can analyze your handwriting samples, floor plans, and birth charts remotely. We provide detailed reports and follow-up support via video calls, ensuring you receive the same quality guidance as in-person sessions."
  },
  {
    question: "What makes your approach different?",
    answer: "We combine multiple ancient sciences - Graphology, Vastu, Astrology, and Numerology - to provide holistic solutions. With over 15 years of experience and 1000+ successful transformations, we offer personalized guidance tailored to your unique situation, ensuring practical and sustainable results."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-faq-subtitle">
            Find answers to common questions about our services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-xl px-6 bg-card"
              data-testid={`accordion-faq-${index}`}
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
