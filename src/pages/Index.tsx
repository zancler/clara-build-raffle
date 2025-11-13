import { HeroSection } from "@/components/HeroSection";
import { RaffleForm } from "@/components/RaffleForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Clara × London Build Expo
          </h1>
          
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
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
