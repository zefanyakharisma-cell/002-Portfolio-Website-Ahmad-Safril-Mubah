-- =============================================================
-- Ahmad Safril Mubah — Portfolio database schema
-- Run in the Supabase SQL editor (or via the CLI).
-- =============================================================

create extension if not exists "uuid-ossp";

-- ---------- Tables -------------------------------------------

create table if not exists research_themes (
  id             uuid primary key default uuid_generate_v4(),
  title_en       text not null,
  title_id       text,
  description_en text not null,
  description_id text,
  icon           text default 'globe',
  "order"        integer default 0,
  created_at     timestamptz default now(),
  updated_at     timestamptz default now()
);

create table if not exists publications (
  id             uuid primary key default uuid_generate_v4(),
  title_en       text not null,
  title_id       text,
  authors        text not null,
  journal        text,
  year           integer not null,
  type           text check (type in ('article', 'book', 'chapter')) default 'article',
  doi            text,
  url            text,
  citation_count integer default 0,
  abstract_en    text,
  abstract_id    text,
  created_at     timestamptz default now(),
  updated_at     timestamptz default now()
);

create table if not exists media_items (
  id         uuid primary key default uuid_generate_v4(),
  title_en   text not null,
  title_id   text,
  outlet     text,
  date       date,
  url        text,
  type       text check (type in ('interview', 'commentary', 'press_mention')) default 'press_mention',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists site_settings (
  id         uuid primary key default uuid_generate_v4(),
  key        text unique not null,
  value_en   text,
  value_id   text,
  updated_at timestamptz default now()
);

create index if not exists publications_year_idx   on publications (year desc);
create index if not exists publications_type_idx   on publications (type);
create index if not exists media_items_date_idx    on media_items (date desc);
create index if not exists research_themes_ord_idx on research_themes ("order");

-- ---------- Row-Level Security -------------------------------

alter table research_themes enable row level security;
alter table publications    enable row level security;
alter table media_items     enable row level security;
alter table site_settings   enable row level security;

-- Public read access
create policy "Public read research_themes" on research_themes for select using (true);
create policy "Public read publications"    on publications    for select using (true);
create policy "Public read media_items"     on media_items     for select using (true);
create policy "Public read site_settings"   on site_settings   for select using (true);

-- Authenticated (admin) full CRUD
create policy "Auth full access research_themes" on research_themes for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Auth full access publications" on publications for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Auth full access media_items" on media_items for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Auth full access site_settings" on site_settings for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

-- ---------- Storage buckets ----------------------------------

insert into storage.buckets (id, name, public)
values ('avatars', 'avatars', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('documents', 'documents', false)
on conflict (id) do nothing;

create policy "Public read avatars" on storage.objects for select
  using (bucket_id = 'avatars');
create policy "Auth upload avatars" on storage.objects for insert
  with check (bucket_id = 'avatars' and auth.role() = 'authenticated');
create policy "Auth manage documents" on storage.objects for all
  using (bucket_id = 'documents' and auth.role() = 'authenticated')
  with check (bucket_id = 'documents' and auth.role() = 'authenticated');
