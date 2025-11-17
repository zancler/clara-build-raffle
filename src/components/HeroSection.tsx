import claraLogo from "@/assets/clara-logo.png";
import londonBuildLogo from "@/assets/london-build-logo.png";
import leftLine from "@/assets/left_line.svg";
import rightLine from "@/assets/right_line.svg";

export const HeroSection = () => {
  return (
    <header className="relative bg-transparent overflow-x-hidden">
      {/* Decorative Lines */}
      <img 
        src={leftLine} 
        alt="" 
        className="absolute left-0 top-0 -translate-y-1/2 md:-translate-y-1/4 -translate-x-12 w-32 h-auto md:w-40 lg:w-60 md:-translate-x-4 lg:-translate-x-8"
        aria-hidden="true"
      />
      <img 
        src={rightLine} 
        alt="" 
        className="absolute right-0 top-0 -translate-y-1/4 translate-x-16 w-40 h-auto md:w-48 lg:w-80 md:translate-x-4 lg:translate-x-8"
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-8 md:py-12 text-center">
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          <img 
            src={claraLogo} 
            alt="Clara" 
            className="h-8 md:h-14 lg:h-16 w-auto"
          />
          <span className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground">×</span>
          <img 
            src={londonBuildLogo} 
            alt="London Build 2025 Expo - 19-20 November, Olympia London" 
            className="h-16 md:h-28 lg:h-32 w-auto"
          />
        </div>
      </div>
    </header>
  );
};
