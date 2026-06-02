'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import type { PublicationType } from '@/types/database'

const TYPES: PublicationType[] = ['article', 'book', 'chapter']

function parseForm(formData: FormData) {
  const typeRaw = String(formData.get('type') ?? 'article') as PublicationType
  return {
    title_en: String(formData.get('title_en') ?? '').trim(),
    title_id: emptyToNull(formData.get('title_id')),
    authors: String(formData.get('authors') ?? '').trim(),
    journal: emptyToNull(formData.get('journal')),
    year: Number(formData.get('year') ?? 0),
    type: TYPES.includes(typeRaw) ? typeRaw : 'article',
    doi: emptyToNull(formData.get('doi')),
    url: emptyToNull(formData.get('url')),
    citation_count: Number(formData.get('citation_count') ?? 0),
    abstract_en: emptyToNull(formData.get('abstract_en')),
    abstract_id: emptyToNull(formData.get('abstract_id')),
    updated_at: new Date().toISOString(),
  }
}

function emptyToNull(v: FormDataEntryValue | null): string | null {
  const s = String(v ?? '').trim()
  return s.length ? s : null
}

export async function savePublication(id: string, formData: FormData) {
  const supabase = await createClient()
  const payload = parseForm(formData)

  if (id === 'new') {
    await supabase.from('publications').insert(payload)
  } else {
    await supabase.from('publications').update(payload).eq('id', id)
  }

  revalidatePath('/[locale]', 'page')
  redirect('/admin/publications')
}

export async function deletePublication(id: string) {
  const supabase = await createClient()
  await supabase.from('publications').delete().eq('id', id)
  revalidatePath('/[locale]', 'page')
  revalidatePath('/[locale]/admin/publications', 'page')
}
