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
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6 flex flex-col items-center">
      <div className="w-full space-y-6">
        <Label htmlFor="email" className="block text-center text-base font-medium" style={{ fontFamily: 'Figtree' }}>
          Your email address<span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <Input
            id="email"
            type="email"
            placeholder="business.name@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 text-base bg-white border-2 border-[#E5E7EB] focus:border-transparent focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-700 ease-in-out focus:outline-none relative z-10 rounded-xl"
            style={{
              fontFamily: 'Figtree',
              color: '#71717A',
              backgroundClip: 'padding-box',
            }}
            required
            maxLength={255}
            onFocus={(e) => e.currentTarget.parentElement?.classList.add('input-focused')}
            onBlur={(e) => e.currentTarget.parentElement?.classList.remove('input-focused')}
          />
          <div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-in-out pointer-events-none input-gradient-border" 
               style={{
                 background: 'linear-gradient(90deg, #FDB022 0%, #82CA9C 33%, #E63888 66%, #FF4444 100%)',
                 padding: '2px',
                 borderRadius: '0.75rem',
               }}>
            <div className="w-full h-full bg-white" style={{ borderRadius: 'calc(0.75rem - 2px)' }}></div>
          </div>
        </div>
        <p className="text-xs text-center" style={{ fontFamily: 'Figtree', color: '#71717A' }}>
          We'll only use your email to contact you about the raffle and Clara. No spam, ever.
        </p>
      </div>

      <div className="relative w-full mt-12">
        <button
          ref={buttonRef}
          type="submit"
          disabled={isSubmitting}
          className="w-full h-[60px] rounded-full relative group disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Base gradient background */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, #00BFD8 0%, #E63888 50%, #82CA9C 100%)',
            }}
          />
          
          {/* Animated hover overlay */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(90deg, #82CA9C 0%, #00BFD8 50%, #E63888 100%)',
            }}
          />
          
          {/* Button content */}
          <div className="relative z-10 flex items-center justify-center gap-2 text-white h-full">
            <span className="text-base font-medium" style={{ fontFamily: 'Figtree' }}>
              {isSubmitting ? "Submitting..." : "Enter the raffle"}
            </span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </div>
        </button>
      </div>
    </form>
  );
};
