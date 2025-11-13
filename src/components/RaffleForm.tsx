import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

export const RaffleForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { toast } = useToast();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedEmail = email.trim();
    
    if (!trimmedEmail) {
      toast({
        title: "Email required",
        description: "Please enter your email address to enter the raffle.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (trimmedEmail.length > 255) {
      toast({
        title: "Email too long",
        description: "Email must be less than 255 characters.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "You're in! 🎉",
        description: "Thanks for entering. We'll contact you after the show.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-[20px] font-normal text-[#181D27]">
          Your email address <span className="text-destructive">*</span>
        </Label>
        <div className="relative">
          <Input
            id="email"
            type="email"
            placeholder="mail@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 text-base bg-white border-2 border-[#E5E7EB] focus:border-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#B0B2B6] transition-all duration-200 focus:outline-none relative z-10 rounded-lg"
            style={{
              backgroundClip: 'padding-box',
            }}
            required
            maxLength={255}
            onFocus={(e) => e.currentTarget.parentElement?.classList.add('input-focused')}
            onBlur={(e) => e.currentTarget.parentElement?.classList.remove('input-focused')}
          />
          <div className="absolute inset-0 opacity-0 transition-opacity duration-200 pointer-events-none input-gradient-border" 
               style={{
                 background: 'linear-gradient(90deg, #FDB022 0%, #82CA9C 33%, #E63888 66%, #FF4444 100%)',
                 padding: '2px',
                 borderRadius: '0.5rem',
               }}>
            <div className="w-full h-full bg-white" style={{ borderRadius: 'calc(0.5rem - 2px)' }}></div>
          </div>
        </div>
        <p className="text-xs text-[#979797]">
          We'll only use your email to contact you about the raffle and Clara. No spam, ever.
        </p>
      </div>

      <p className="text-xs text-[#181D27] pt-4">
        By entering, you agree to the raffle{" "}
        <a 
          href="#terms" 
          className="underline hover:text-accent transition-colors"
        >
          Terms & Conditions
        </a>
        .
      </p>

      <div className="relative w-auto inline-block">
        {/* Colored layers */}
        <div
          className="absolute inset-0 rounded-full bg-[#FECE00] transition-all duration-200 ease-out pointer-events-none"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: `rotate(${4 + mousePosition.x * 2}deg) translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            mixBlendMode: 'darken',
            zIndex: 1,
          }}
        />
        <div
          className="absolute inset-0 rounded-full bg-[#00C6CF] transition-all duration-200 ease-out pointer-events-none"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: `rotate(${-2 - mousePosition.y * 2}deg) translate(${-mousePosition.x}px, ${mousePosition.y}px)`,
            mixBlendMode: 'darken',
            zIndex: 2,
          }}
        />
        <div
          className="absolute inset-0 rounded-full bg-[#FF33F1] transition-all duration-200 ease-out pointer-events-none"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: `rotate(${2 + mousePosition.y * 2}deg) translate(${mousePosition.x}px, ${-mousePosition.y}px)`,
            mixBlendMode: 'darken',
            zIndex: 3,
          }}
        />
        
        {/* Main button */}
        <Button 
          ref={buttonRef}
          type="submit" 
          className="relative h-14 text-base font-medium w-auto bg-black hover:bg-black text-white rounded-full transition-all duration-200 px-8"
          disabled={isSubmitting}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            zIndex: 10,
          }}
        >
          {isSubmitting ? "Entering..." : "Enter the raffle"}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </form>
  );
};
