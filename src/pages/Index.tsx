import { HeroSection } from "@/components/HeroSection";
import { RaffleForm } from "@/components/RaffleForm";
import tagIcon from "@/assets/tag-icon.png";
import { ArrowUpRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero overflow-x-hidden">
      <HeroSection />
      
      <main className="container mx-auto px-4 py-16 md:py-24 -mt-5 md:-mt-[60px]">
        <div className="max-w-2xl mx-auto text-center">
          {/* Block 1: Tag, Headline, Description */}
          <div className="space-y-6 mb-12">
            {/* Tag */}
            <div className="inline-flex items-center gap-1 bg-white rounded-full px-4 py-2 shadow-sm">
              <img src={tagIcon} alt="" className="w-5 h-5" />
              <span className="font-semibold text-xs text-foreground uppercase" style={{ fontFamily: 'Figtree' }}>
                Available in late 2025
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl font-semibold text-foreground" style={{ fontFamily: 'Figtree' }}>
              Clara × London Build Expo
            </h1>
            
            {/* Description */}
            <p className="text-base font-normal text-foreground" style={{ fontFamily: 'Figtree' }}>
              Win an iPad at the Expo! Enter the raffle with your email and discover how Clara can transform your calls and lead capture.
            </p>
          </div>

          {/* Block 2: Email Section */}
          <div className="mb-3">
            <RaffleForm />
          </div>

          {/* Block 3: Agreement Text */}
          <p className="text-xs font-normal text-black" style={{ fontFamily: 'Figtree' }}>
            By entering you agree to the raffle{' '}
            <a 
              href="https://clara-build-promo-terms.lovable.app" 
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              Terms & Conditions
            </a>.
          </p>
        </div>

        {/* Contact Section */}
        <div className="max-w-2xl mx-auto text-center mt-24 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4" style={{ fontFamily: 'Figtree' }}>
            Let's get in touch
          </h2>
          <p className="text-base font-normal text-foreground mb-6" style={{ fontFamily: 'Figtree' }}>
            We'd love to hear from you. Reach out anytime at
          </p>
          <a 
            href="mailto:hello@44pixels.ai"
            className="inline-flex items-center gap-2 text-2xl md:text-3xl font-semibold text-foreground underline hover:no-underline transition-all"
            style={{ fontFamily: 'Figtree' }}
          >
            hello@44pixels.ai
            <ArrowUpRight className="w-6 h-6" />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Index;
