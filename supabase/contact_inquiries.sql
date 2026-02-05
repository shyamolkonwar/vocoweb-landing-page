-- Create the table for storing contact form submissions
create table public.contact_inquiries (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  name text not null,
  email text not null,
  type text not null default 'general'::text,
  message text not null,
  constraint contact_inquiries_pkey primary key (id)
) tablespace pg_default;

-- Enable Row Level Security (RLS)
alter table public.contact_inquiries enable row level security;

-- Create a policy that allows the service role (API) to insert data
-- Notes: valid for authenticated service role only
create policy "Enable insert for service role only"
  on public.contact_inquiries
  for insert
  to service_role
  with check (true);

-- Create a policy that allows the service role (API) to view data
create policy "Enable select for service role only"
  on public.contact_inquiries
  for select
  to service_role
  using (true);
