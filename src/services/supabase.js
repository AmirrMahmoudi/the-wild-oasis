import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dhdnytpdwyttqtahctmh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoZG55dHBkd3l0dHF0YWhjdG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAxNDc5MjYsImV4cCI6MjAyNTcyMzkyNn0.ZqV6uYHSidLIq4q00VqhcYqc8PrG5htfr0eHQyXF_5I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
