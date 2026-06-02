import 'server-only'
import { createClient, createServiceClient } from '@/lib/supabase/server'
import type { Publication, ResearchTheme, MediaItem } from '@/types/database'

export function isSupabaseConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
}

const CV_PATH = 'cv.pdf'

export async function getResearchThemes(): Promise<ResearchTheme[]> {
  if (!isSupabaseConfigured()) return []
  const supabase = await createClient()
  const { data } = await supabase
    .from('research_themes')
    .select('*')
    .order('order', { ascending: true })
  return data ?? []
}

export async function getPublications(): Promise<Publication[]> {
  if (!isSupabaseConfigured()) return []
  const supabase = await createClient()
  const { data } = await supabase
    .from('publications')
    .select('*')
    .order('year', { ascending: false })
  return data ?? []
}

export async function getMediaItems(): Promise<MediaItem[]> {
  if (!isSupabaseConfigured()) return []
  const supabase = await createClient()
  const { data } = await supabase
    .from('media_items')
    .select('*')
    .order('date', { ascending: false })
  return data ?? []
}

/** Metadata for the current CV in the private documents bucket. */
export async function getCvMeta(): Promise<{ available: boolean; lastUpdated: string | null }> {
  if (!isSupabaseConfigured()) return { available: false, lastUpdated: null }
  try {
    const supabase = await createServiceClient()
    const { data } = await supabase.storage
      .from('documents')
      .list('', { search: CV_PATH })
    const file = data?.find((f) => f.name === CV_PATH)
    if (!file) return { available: false, lastUpdated: null }
    return { available: true, lastUpdated: file.updated_at ?? file.created_at ?? null }
  } catch {
    return { available: false, lastUpdated: null }
  }
}

/** Short-lived signed URL for downloading the CV. */
export async function getCvSignedUrl(): Promise<string | null> {
  if (!isSupabaseConfigured()) return null
  try {
    const supabase = await createServiceClient()
    const { data } = await supabase.storage
      .from('documents')
      .createSignedUrl(CV_PATH, 3600)
    return data?.signedUrl ?? null
  } catch {
    return null
  }
}
