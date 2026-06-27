import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://mliilgsfqodkkfivcxvr.supabase.co";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1saWlsZ3NmcW9ka2tmaXZjeHZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0MTU5ODksImV4cCI6MjA5Nzk5MTk4OX0.E27gSwmg_HB0fZQh1dot7wyxiHsv3v6_X0t515oinP0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

export interface ConsultationSubmission {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  submittedAt: string;
}

interface SupabaseSubmissionRecord {
  id: string;
  name: string;
  phone: string;
  email?: string | null;
  service: string;
  message?: string | null;
  submitted_at?: string | null;
  created_at?: string | null;
}

const SUBMISSIONS_STORAGE_KEY = "vzn_consultation_submissions";
const TABLE_NAME = "consultation_submissions";

function normalizeSubmission(record: SupabaseSubmissionRecord): ConsultationSubmission {
  return {
    id: record.id,
    name: record.name,
    phone: record.phone,
    email: record.email || "",
    service: record.service,
    message: record.message || "",
    submittedAt: record.submitted_at || record.created_at || new Date().toISOString(),
  };
}

function getLocalSubmissions(): ConsultationSubmission[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(SUBMISSIONS_STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function persistLocalSubmissions(submissions: ConsultationSubmission[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(SUBMISSIONS_STORAGE_KEY, JSON.stringify(submissions));
}

export async function saveConsultationSubmission(
  data: Omit<ConsultationSubmission, "id" | "submittedAt">,
): Promise<ConsultationSubmission> {
  const payload = {
    name: data.name,
    phone: data.phone,
    email: data.email || null,
    service: data.service,
    message: data.message || null,
    submitted_at: new Date().toISOString(),
  };

  const { data: inserted, error } = await supabase
    .from(TABLE_NAME)
    .insert(payload)
    .select()
    .single();

  if (!error && inserted) {
    const submission = normalizeSubmission(inserted as SupabaseSubmissionRecord);
    const existing = getLocalSubmissions();
    persistLocalSubmissions([submission, ...existing]);
    return submission;
  }

  const fallbackSubmission: ConsultationSubmission = {
    id: crypto.randomUUID(),
    ...data,
    submittedAt: new Date().toISOString(),
  };

  const existing = getLocalSubmissions();
  persistLocalSubmissions([fallbackSubmission, ...existing]);
  return fallbackSubmission;
}

export async function getConsultationSubmissions(): Promise<ConsultationSubmission[]> {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("*")
    .order("submitted_at", { ascending: false });

  if (!error && data) {
    const submissions = data.map((item) => normalizeSubmission(item as SupabaseSubmissionRecord));
    persistLocalSubmissions(submissions);
    return submissions;
  }

  return getLocalSubmissions();
}

export async function deleteConsultationSubmission(id: string): Promise<boolean> {
  const { error } = await supabase.from(TABLE_NAME).delete().eq("id", id);

  if (!error) {
    const existing = getLocalSubmissions().filter((submission) => submission.id !== id);
    persistLocalSubmissions(existing);
    return true;
  }

  console.error("Failed to delete consultation submission", error);
  return false;
}
