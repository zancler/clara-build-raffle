import { HeroSection } from "@/components/HeroSection";
import { RaffleForm } from "@/components/RaffleForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <main className="container mx-auto px-4 py-16 md:py-24 bg-white">
        <div className="max-w-2xl mx-auto space-y-8 text-center">
          <h1 className="text-[40px] font-semibold text-[#181D27] leading-tight">
            Clara × London Build Expo
          </h1>
          
          <p className="text-base text-[#181D27] leading-relaxed">
            Enter our Expo raffle and see how Clara can transform your call handling and lead capture. Leave your email to join the raffle and get a quick follow-up from the Clara team after the show.
          </p>

          <div className="pt-8">
            <RaffleForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
