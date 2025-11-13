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
        <Input
          id="email"
          type="email"
          placeholder="mail@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 text-base border-2 border-[#E5E7EB] focus:border-clara-cyan focus:ring-2 focus:ring-clara-cyan/20 placeholder:text-[#B0B2B6] transition-all duration-200"
          required
          maxLength={255}
        />
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
        className="h-14 text-base font-medium w-auto px-8 bg-[#181D27] hover:bg-[#181D27]/90 text-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Entering..." : "Enter the raffle"}
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </form>
  );
};
