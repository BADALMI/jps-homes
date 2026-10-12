/*
# Create leads table for lead capture form

1. New Tables
- `leads`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — the visitor's full name
  - `email` (text, not null) — the visitor's email address
  - `company` (text, nullable) — optional company name
  - `message` (text, nullable) — optional message or question
  - `created_at` (timestamptz, defaults to now()) — when the lead was submitted

2. Security
- Enable RLS on `leads`.
- This is a no-auth landing page, so anon + authenticated can INSERT new leads.
- Only authenticated users can SELECT (so the site owner can view leads later if they add auth).
- No UPDATE or DELETE policies — leads are immutable once submitted.

3. Important Notes
- The landing page has no sign-in screen, so the frontend operates as the `anon` role.
- INSERT is allowed for anon so visitors can submit the form without logging in.
- SELECT is restricted to authenticated to prevent public read access to collected leads.
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_leads" ON leads;
CREATE POLICY "anon_insert_leads"
  ON leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_select_leads" ON leads;
CREATE POLICY "authenticated_select_leads"
  ON leads FOR SELECT
  TO authenticated
  USING (true);
