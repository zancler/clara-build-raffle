import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

export const RaffleForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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
            className="h-12 text-base bg-white border-2 border-[#E5E7EB] focus:border-transparent placeholder:text-[#B0B2B6] transition-all duration-200 focus:outline-none relative z-10 rounded-lg"
            style={{
              backgroundClip: 'padding-box',
            }}
            required
            maxLength={255}
            onFocus={(e) => e.currentTarget.parentElement?.classList.add('input-focused')}
            onBlur={(e) => e.currentTarget.parentElement?.classList.remove('input-focused')}
          />
          <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-200 pointer-events-none input-gradient-border" 
               style={{
                 background: 'linear-gradient(90deg, #FDB022 0%, #82CA9C 33%, #E63888 66%, #FF4444 100%)',
                 padding: '2px',
                 borderRadius: '0.5rem',
               }}>
            <div className="w-full h-full bg-white rounded-[calc(0.5rem-2px)]"></div>
          </div>
        </div>
        <p className="text-xs text-[#979797]">
          We'll only use your email to contact you about the raffle and Clara. No spam, ever.
        </p>
      </div>

      <p className="text-xs text-[#181D27]">
        By entering, you agree to the raffle{" "}
        <a 
          href="#terms" 
          className="underline hover:text-accent transition-colors"
        >
          Terms & Conditions
        </a>
        .
      </p>

      <Button 
        type="submit" 
        variant="pill"
        size="lg"
        className="h-14 text-base font-medium w-full bg-[#181D27] hover:bg-[#181D27]/90 text-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Entering..." : "Enter the raffle"}
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </form>
  );
};
