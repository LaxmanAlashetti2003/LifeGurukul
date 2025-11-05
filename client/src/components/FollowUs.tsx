import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Youtube, Twitter, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Facebook,
    name: "Facebook",
    handle: "@transformyourlife",
    followers: "10K+ followers",
    color: "text-blue-600"
  },
  {
    icon: Instagram,
    name: "Instagram",
    handle: "@lifetransformation",
    followers: "15K+ followers",
    color: "text-pink-600"
  },
  {
    icon: Youtube,
    name: "YouTube",
    handle: "Transform Your Life",
    followers: "8K+ subscribers",
    color: "text-red-600"
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    handle: "Dinesh Kumar Jhajhariya",
    followers: "5K+ connections",
    color: "text-blue-700"
  },
  {
    icon: Twitter,
    name: "Twitter",
    handle: "@lifeexpert",
    followers: "12K+ followers",
    color: "text-sky-500"
  },
  {
    icon: Mail,
    name: "Newsletter",
    handle: "Weekly Insights",
    followers: "Join 20K+ readers",
    color: "text-primary"
  }
];

export default function FollowUs() {
  const handleSocialClick = (platform: string) => {
    console.log(`${platform} clicked`);
  };

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" data-testid="text-follow-title">
            Follow Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-follow-subtitle">
            Stay connected and get daily inspiration, tips, and insights on your transformation journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-elevate active-elevate-2 cursor-pointer transition-all duration-300"
                onClick={() => handleSocialClick(social.name)}
                data-testid={`card-social-${index}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-background flex items-center justify-center flex-shrink-0 ${social.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1">
                      {social.name}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {social.handle}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {social.followers}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
