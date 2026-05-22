create extension if not exists "pgcrypto";

create table if not exists public.cars (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null,
  capacity integer not null check (capacity > 0),
  price integer not null check (price >= 0),
  transmission text not null,
  fuel text not null,
  year integer not null,
  image_url text,
  images jsonb not null default '[]'::jsonb,
  features jsonb not null default '[]'::jsonb,
  description text not null default '',
  terms text not null default '',
  testimonials jsonb not null default '[]'::jsonb,
  "order" integer,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists cars_set_updated_at on public.cars;
create trigger cars_set_updated_at
before update on public.cars
for each row
execute function public.set_updated_at();

alter table public.cars enable row level security;

drop policy if exists "Cars are readable by everyone" on public.cars;
create policy "Cars are readable by everyone"
on public.cars
for select
to anon, authenticated
using (true);

drop policy if exists "Authenticated users can insert cars" on public.cars;
create policy "Authenticated users can insert cars"
on public.cars
for insert
to authenticated
with check (true);

drop policy if exists "Authenticated users can update cars" on public.cars;
create policy "Authenticated users can update cars"
on public.cars
for update
to authenticated
using (true)
with check (true);

drop policy if exists "Authenticated users can delete cars" on public.cars;
create policy "Authenticated users can delete cars"
on public.cars
for delete
to authenticated
using (true);

insert into storage.buckets (id, name, public)
values ('car-images', 'car-images', true)
on conflict (id) do update set public = true;

drop policy if exists "Car images are public" on storage.objects;
create policy "Car images are public"
on storage.objects
for select
to anon, authenticated
using (bucket_id = 'car-images');

drop policy if exists "Authenticated users can upload car images" on storage.objects;
create policy "Authenticated users can upload car images"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'car-images');

drop policy if exists "Authenticated users can update car images" on storage.objects;
create policy "Authenticated users can update car images"
on storage.objects
for update
to authenticated
using (bucket_id = 'car-images')
with check (bucket_id = 'car-images');

drop policy if exists "Authenticated users can delete car images" on storage.objects;
create policy "Authenticated users can delete car images"
on storage.objects
for delete
to authenticated
using (bucket_id = 'car-images');
