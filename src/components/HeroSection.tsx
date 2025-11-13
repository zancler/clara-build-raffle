import claraLogo from "@/assets/clara-logo.png";
import londonBuildLogo from "@/assets/london-build-logo.png";
import swooshCyan from "@/assets/swoosh-cyan.png";
import swooshMagenta from "@/assets/swoosh-magenta.png";
import swooshGreen from "@/assets/swoosh-green.png";

export const HeroSection = () => {
  return (
    <header className="relative bg-background border-b border-border overflow-hidden">
      {/* Decorative Swooshes */}
      <img 
        src={swooshCyan} 
        alt="" 
        className="absolute left-0 top-0 w-64 h-64 object-contain opacity-60 -translate-x-16 -translate-y-8"
        aria-hidden="true"
      />
      <img 
        src={swooshMagenta} 
        alt="" 
        className="absolute left-20 top-8 w-48 h-48 object-contain opacity-50 rotate-45"
        aria-hidden="true"
      />
      <img 
        src={swooshGreen} 
        alt="" 
        className="absolute right-0 top-0 w-64 h-64 object-contain opacity-60 translate-x-16 -translate-y-8"
        aria-hidden="true"
      />
      <img 
        src={swooshMagenta} 
        alt="" 
        className="absolute right-20 top-12 w-56 h-56 object-contain opacity-40 -rotate-12"
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-8 md:py-12">
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          <img 
            src={claraLogo} 
            alt="Clara" 
            className="h-8 md:h-12 w-auto"
          />
          <span className="text-3xl md:text-4xl font-light text-foreground">×</span>
          <img 
            src={londonBuildLogo} 
            alt="London Build 2025 Expo - 19-20 November, Olympia London" 
            className="h-16 md:h-24 w-auto"
          />
        </div>
      </div>
    </header>
  );
};
