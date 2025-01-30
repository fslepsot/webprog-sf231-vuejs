import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://pnsvsrvrcpmfjjwqrqll.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuc3ZzcnZyY3BtZmpqd3FycWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyMTc3NjcsImV4cCI6MjA1Mzc5Mzc2N30.tCUiUwnEUt--N1kpc8H1odC-jJCfW-pdnjLhLkkLTkc')