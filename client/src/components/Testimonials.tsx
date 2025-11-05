import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import avatar1 from "@assets/generated_images/Female_testimonial_avatar_one_79f805b4.png";
import avatar2 from "@assets/generated_images/Male_testimonial_avatar_two_61dbdcd1.png";
import avatar3 from "@assets/generated_images/Young_female_testimonial_avatar_983dd3a8.png";
import avatar4 from "@assets/generated_images/Senior_male_testimonial_avatar_243e639c.png";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Business Owner",
    avatar: avatar1,
    rating: 5,
    text: "The graphology session transformed my confidence and helped me understand my behavioral patterns. My business has grown 300% since implementing the recommendations!"
  },
  {
    name: "Rajesh Kumar",
    role: "IT Professional",
    avatar: avatar2,
    rating: 5,
    text: "Vastu corrections in my office brought amazing positive energy. Within months, I received a promotion and my work-life balance improved significantly."
  },
  {
    name: "Ananya Patel",
    role: "Marketing Manager",
    avatar: avatar3,
    rating: 5,
    text: "The numerology consultation helped me choose the perfect timing for major life decisions. I'm now happier and more successful than ever before!"
  },
  {
    name: "Dr. Vikram Singh",
    role: "Medical Practitioner",
    avatar: avatar4,
    rating: 5,
    text: "The astrological guidance provided clarity during difficult times. The predictions were remarkably accurate and helped me make informed decisions."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" data-testid="text-testimonials-title">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-testimonials-subtitle">
            Real transformations from real people who trusted their journey with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 flex flex-col space-y-6 hover-elevate transition-all duration-300"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-sm text-foreground leading-relaxed flex-1">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-sm text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
