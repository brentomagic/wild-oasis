import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jcegfhlvvcfynzisztgb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjZWdmaGx2dmNmeW56aXN6dGdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzOTkyNzYsImV4cCI6MjA2ODk3NTI3Nn0.jKOAO0di1kSxxvLtOxBE5OdhcnVsc3HcGB3A_HR8q04";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
