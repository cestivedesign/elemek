// Shared Supabase client + auth helpers for Elementr.
// This file is client-side. The anon key is safe to expose — RLS protects data.

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

export const SUPABASE_URL = "https://zcdavnatdiqybdtnbchh.supabase.co";
export const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjZGF2bmF0ZGlxeWJkdG5iY2hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3MTM4ODUsImV4cCI6MjA5MjI4OTg4NX0.-rpdtKT9dEnQ-sgwC6r3XSs6HFUzRuBQZw86wcRY9So";

export const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});

/** Return the current session (or null). */
export async function getSession() {
  const { data } = await sb.auth.getSession();
  return data.session || null;
}

/** Fetch the profile row (plan tier etc.) for the logged-in user. */
export async function getProfile() {
  const session = await getSession();
  if (!session) return null;
  const { data, error } = await sb
    .from("profiles")
    .select("id, email, plan, subscription_status")
    .eq("id", session.user.id)
    .single();
  if (error) { console.warn("profile fetch failed", error); return null; }
  return data;
}

/** True if the user has a paid plan (monthly or forever). */
export function isPaid(profile) {
  if (!profile) return false;
  return profile.plan === "monthly" || profile.plan === "forever";
}

/** Send a magic link to the given email. */
export async function signInWithEmail(email, redirectTo) {
  return sb.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: redirectTo || `${location.origin}/auth/callback.html` }
  });
}

/** Kick off Google OAuth. */
export async function signInWithGoogle(redirectTo) {
  return sb.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: redirectTo || `${location.origin}/auth/callback.html` }
  });
}

export async function signOut() {
  await sb.auth.signOut();
  location.href = "/";
}

/** Redirect to /login.html if there's no session. Returns the session when present. */
export async function requireAuth() {
  const session = await getSession();
  if (!session) {
    const next = encodeURIComponent(location.pathname + location.search);
    location.href = `/login.html?next=${next}`;
    return null;
  }
  return session;
}
