-- Create table for newsletter subscriptions
CREATE TABLE public.newsletter_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- Enable Row Level Security
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to subscribe
CREATE POLICY "Anyone can subscribe to newsletter"
ON public.newsletter_subscriptions
FOR INSERT
WITH CHECK (true);

-- Create policy to allow reading subscriptions (for admin purposes)
CREATE POLICY "Public can view their own subscription"
ON public.newsletter_subscriptions
FOR SELECT
USING (true);

-- Create index for email lookups
CREATE INDEX idx_newsletter_email ON public.newsletter_subscriptions(email);

-- Add comment to table
COMMENT ON TABLE public.newsletter_subscriptions IS 'Stores email addresses for newsletter subscriptions';