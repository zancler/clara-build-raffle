import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

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

    try {
      const { error } = await supabase
        .from('raffle_entries')
        .insert([{ email: trimmedEmail }]);

      if (error) {
        // Check if it's a duplicate email error
        if (error.code === '23505') {
          toast({
            title: "You're already entered! 🎉",
            description: "This email is already in the raffle.",
            className: "bg-white border-border",
          });
        } else {
          toast({
            title: "Oops! Something went wrong",
            description: "Please try again in a moment.",
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "You're in! 🎉",
          description: "Thanks for entering. We'll contact you after the show.",
          className: "bg-white border-border",
        });
        setEmail("");
      }
    } catch (error) {
      toast({
        title: "Connection error",
        description: "Please check your internet and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    // Normalize to -1 to 1 range
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
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto flex flex-col items-center">
      <div className="w-full space-y-6">
        <Label htmlFor="email" className="block text-center text-sm md:text-base font-medium" style={{ fontFamily: 'Figtree' }}>
          Your email address<span className="text-red-500">*</span>
        </Label>
        <div className="space-y-3">
          <div className="relative input-wrapper">
            <Input
              id="email"
              type="email"
              placeholder="business.name@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 text-base bg-white border-2 border-[#E5E7EB] focus:border-transparent focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-500 ease-in-out focus:outline-none relative z-10 rounded-xl placeholder:text-[#A1A1AA]"
              style={{
                fontFamily: 'Figtree',
                color: '#000000',
                backgroundClip: 'padding-box',
                fontSize: '16px',
              }}
              required
              maxLength={255}
            />
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out pointer-events-none input-gradient-border" 
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
      </div>

      <div className="relative w-full mt-12">
        <button
          ref={buttonRef}
          type="submit"
          disabled={isSubmitting}
          className="w-full h-[60px] rounded-full overflow-hidden relative group disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center bg-black transition-all duration-500"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Yellow layer */}
          <div 
            className="absolute inset-0 transition-all duration-200 ease-out"
            style={{
              background: '#FECE00',
              opacity: isHovered ? 1 : 0,
              transform: isHovered
                ? `rotate(${4 + mousePosition.x * 2 + mousePosition.y * 2}deg) translate(${mousePosition.x * 1}px, ${mousePosition.y * 1}px)`
                : 'rotate(4deg) translate(0, 0)',
              mixBlendMode: 'darken',
            }}
          />
          
          {/* Cyan layer */}
          <div 
            className="absolute inset-0 transition-all duration-200 ease-out"
            style={{
              background: '#00C6CF',
              opacity: isHovered ? 1 : 0,
              transform: isHovered
                ? `rotate(${-2 + mousePosition.x * 2 - mousePosition.y * 2}deg) translate(${-mousePosition.x * 1}px, ${mousePosition.y * 1}px)`
                : 'rotate(-2deg) translate(0, 0)',
              mixBlendMode: 'darken',
            }}
          />
          
          {/* Magenta layer */}
          <div 
            className="absolute inset-0 transition-all duration-200 ease-out"
            style={{
              background: '#FF33F1',
              opacity: isHovered ? 1 : 0,
              transform: isHovered
                ? `rotate(${2 - mousePosition.x * 2 + mousePosition.y * 2}deg) translate(${mousePosition.x * 1}px, ${-mousePosition.y * 1}px)`
                : 'rotate(2deg) translate(0, 0)',
              mixBlendMode: 'darken',
            }}
          />
          
          {/* Button content */}
          <div className="relative z-10 flex items-center gap-2 text-white">
            <span className="text-sm md:text-base font-medium" style={{ fontFamily: 'Figtree' }}>
              {isSubmitting ? "Submitting..." : "Enter the raffle"}
            </span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </div>
        </button>
      </div>
    </form>
  );
};
