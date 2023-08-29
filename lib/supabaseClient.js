import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://nvqbiwmggrcjdwcmmbfe.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52cWJpd21nZ3JjamR3Y21tYmZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzMDQzMDksImV4cCI6MjAwODg4MDMwOX0.ridxCXFs3NEoaSb6WXIAG8a-tL74tGqqQjeFKEwFtBg')