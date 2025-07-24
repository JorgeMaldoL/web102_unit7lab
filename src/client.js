import { createClient } from '@supabase/supabase-js';
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

const supabaseUrl = 'https://hobwnrhummeodwjlvboy.supabase.co';
const supabaseKey = VITE_API_KEY ;

export const supabase = createClient(supabaseUrl, supabaseKey);