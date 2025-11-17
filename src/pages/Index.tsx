import { HeroSection } from "@/components/HeroSection";
import { RaffleForm } from "@/components/RaffleForm";
import tagIcon from "@/assets/tag-icon.png";

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
              href="#" 
              className="underline hover:no-underline"
              onClick={(e) => {
                e.preventDefault();
                // Add your terms and conditions logic here
              }}
            >
              Terms & Conditions
            </a>.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
