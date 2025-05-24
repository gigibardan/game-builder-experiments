
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://smqnafpjpqpgdjvoguuk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtcW5hZnBqcHFwZ2Rqdm9ndXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNDM2NzAsImV4cCI6MjA2MjYxOTY3MH0.9eozib2jo6W_PRUrytK-1XmphmDy6RmQlRl7fbnSDjQ'

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
})
