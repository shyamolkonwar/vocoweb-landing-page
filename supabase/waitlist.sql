-- Create the table for storing waitlist users
create table public.waitlist (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  email text not null,
  name text not null,
  business_name text,
  country text not null,
  constraint waitlist_pkey primary key (id)
) tablespace pg_default;

-- Add unique constraint on email to prevent duplicates
alter table public.waitlist add constraint waitlist_email_key unique (email);

-- Enable Row Level Security (RLS)
alter table public.waitlist enable row level security;

-- Create a policy that allows the service role (API) to insert data
create policy "Enable insert for service role only"
  on public.waitlist
  for insert
  to service_role
  with check (true);

-- Create a policy that allows the service role (API) to view data
create policy "Enable select for service role only"
  on public.waitlist
  for select
  to service_role
  using (true);

-- Create an index on email for faster lookups
create index idx_waitlist_email on public.waitlist(email);
