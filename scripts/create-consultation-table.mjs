import { Client } from "pg";

const connectionString = process.env.DATABASE_URL || process.env.SUPABASE_DB_URL;

if (!connectionString) {
  console.error(
    JSON.stringify(
      { success: false, error: "Set DATABASE_URL or SUPABASE_DB_URL before running this script." },
      null,
      2,
    ),
  );
  process.exit(1);
}

const client = new Client({ connectionString });

try {
  await client.connect();

  await client.query(`
    create table if not exists public.consultation_submissions (
      id uuid primary key default gen_random_uuid(),
      name text not null,
      phone text not null,
      email text,
      service text not null,
      message text,
      submitted_at timestamptz not null default now()
    );
  `);

  await client.query(`alter table public.consultation_submissions enable row level security;`);

  await client.query(
    `drop policy if exists "Allow anonymous inserts" on public.consultation_submissions;`,
  );
  await client.query(
    `create policy "Allow anonymous inserts" on public.consultation_submissions for insert to anon with check (true);`,
  );

  await client.query(
    `drop policy if exists "Allow anonymous reads" on public.consultation_submissions;`,
  );
  await client.query(
    `create policy "Allow anonymous reads" on public.consultation_submissions for select to anon using (true);`,
  );

  await client.query(
    `drop policy if exists "Allow authenticated reads" on public.consultation_submissions;`,
  );
  await client.query(
    `create policy "Allow authenticated reads" on public.consultation_submissions for select to authenticated using (true);`,
  );

  await client.query(
    `drop policy if exists "Allow anonymous deletes" on public.consultation_submissions;`,
  );
  await client.query(
    `create policy "Allow anonymous deletes" on public.consultation_submissions for delete to anon using (true);`,
  );

  const result = await client.query(
    `select to_regclass('public.consultation_submissions') as table_name;`,
  );
  console.log(JSON.stringify({ success: true, table: result.rows[0].table_name }, null, 2));
} catch (error) {
  console.error(JSON.stringify({ success: false, error: error.message }, null, 2));
  process.exitCode = 1;
} finally {
  await client.end();
}
