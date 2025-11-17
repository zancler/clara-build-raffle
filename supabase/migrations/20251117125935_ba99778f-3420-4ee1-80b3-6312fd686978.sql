-- Create raffle_entries table
CREATE TABLE public.raffle_entries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.raffle_entries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert their email (public raffle)
CREATE POLICY "Anyone can insert raffle entries"
ON public.raffle_entries
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Prevent anyone from viewing entries (privacy)
CREATE POLICY "No public access to view entries"
ON public.raffle_entries
FOR SELECT
TO anon, authenticated
USING (false);

-- Create index for faster email lookups
CREATE INDEX idx_raffle_entries_email ON public.raffle_entries(email);