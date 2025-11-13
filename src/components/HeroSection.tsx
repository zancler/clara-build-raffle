import claraLogo from "@/assets/clara-logo.png";
import londonBuildLogo from "@/assets/london-build-logo.png";
import leftLine from "@/assets/left_line.svg";
import rightLine from "@/assets/right_line.svg";

export const HeroSection = () => {
  return (
    <header className="relative bg-white border-b border-border overflow-hidden">
      {/* Decorative Lines */}
      <img 
        src={leftLine} 
        alt="" 
        className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block md:w-40 lg:w-60 h-auto md:-translate-x-4 lg:-translate-x-8"
        aria-hidden="true"
      />
      <img 
        src={rightLine} 
        alt="" 
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block md:w-48 lg:w-80 h-auto md:translate-x-4 lg:translate-x-8"
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
