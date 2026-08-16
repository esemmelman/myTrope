-- My Trope v1.15.2
-- These names are isolated from every other app in the bnaimitzvah project.

create table if not exists public.mytrope_recordings_v1 (
  line_index integer primary key check (line_index between 0 and 40),
  line_label text not null,
  object_path text not null unique,
  mime_type text not null,
  byte_size bigint not null check (byte_size >= 0),
  updated_at timestamptz not null default now()
);

alter table public.mytrope_recordings_v1 enable row level security;

drop policy if exists "mytrope_recordings_v1_public_read" on public.mytrope_recordings_v1;
create policy "mytrope_recordings_v1_public_read" on public.mytrope_recordings_v1 for select to anon, authenticated using (true);
drop policy if exists "mytrope_recordings_v1_public_insert" on public.mytrope_recordings_v1;
create policy "mytrope_recordings_v1_public_insert" on public.mytrope_recordings_v1 for insert to anon, authenticated with check (true);
drop policy if exists "mytrope_recordings_v1_public_update" on public.mytrope_recordings_v1;
create policy "mytrope_recordings_v1_public_update" on public.mytrope_recordings_v1 for update to anon, authenticated using (true) with check (true);
drop policy if exists "mytrope_recordings_v1_public_delete" on public.mytrope_recordings_v1;
create policy "mytrope_recordings_v1_public_delete" on public.mytrope_recordings_v1 for delete to anon, authenticated using (true);
grant select, insert, update, delete on public.mytrope_recordings_v1 to anon, authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('mytrope-recordings-v1', 'mytrope-recordings-v1', true, 52428800,
  array['audio/webm', 'audio/ogg', 'audio/mp4', 'audio/mpeg']::text[])
on conflict (id) do update set public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "mytrope_recordings_v1_storage_read" on storage.objects;
create policy "mytrope_recordings_v1_storage_read" on storage.objects for select to anon, authenticated using (bucket_id = 'mytrope-recordings-v1');
drop policy if exists "mytrope_recordings_v1_storage_insert" on storage.objects;
create policy "mytrope_recordings_v1_storage_insert" on storage.objects for insert to anon, authenticated with check (bucket_id = 'mytrope-recordings-v1');
drop policy if exists "mytrope_recordings_v1_storage_update" on storage.objects;
create policy "mytrope_recordings_v1_storage_update" on storage.objects for update to anon, authenticated using (bucket_id = 'mytrope-recordings-v1') with check (bucket_id = 'mytrope-recordings-v1');
drop policy if exists "mytrope_recordings_v1_storage_delete" on storage.objects;
create policy "mytrope_recordings_v1_storage_delete" on storage.objects for delete to anon, authenticated using (bucket_id = 'mytrope-recordings-v1');
