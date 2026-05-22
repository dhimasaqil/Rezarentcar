-- Add order column to cars table
ALTER TABLE public.cars ADD COLUMN IF NOT EXISTS "order" integer;

-- Set initial order values based on created_at (oldest first)
UPDATE public.cars
SET "order" = (
  SELECT COUNT(*)
  FROM public.cars c2
  WHERE c2.created_at <= public.cars.created_at
) - 1
WHERE "order" IS NULL;
