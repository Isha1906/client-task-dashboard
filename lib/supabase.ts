import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ywiirfgspbbzxhtemlqn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3aWlyZmdzcGJienhodGVtbHFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzMTc5OTksImV4cCI6MjA4Njg5Mzk5OX0.a2ZBt2MeNbiPawEtEpHLRnAvTEYLrVAKcyGsGo0pYDc"
);
