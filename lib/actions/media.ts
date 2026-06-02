'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import type { MediaType } from '@/types/database'

const TYPES: MediaType[] = ['interview', 'commentary', 'press_mention']

function emptyToNull(v: FormDataEntryValue | null): string | null {
  const s = String(v ?? '').trim()
  return s.length ? s : null
}

export async function saveMediaItem(id: string, formData: FormData) {
  const supabase = await createClient()
  const typeRaw = String(formData.get('type') ?? 'press_mention') as MediaType
  const payload = {
    title_en: String(formData.get('title_en') ?? '').trim(),
    title_id: emptyToNull(formData.get('title_id')),
    outlet: emptyToNull(formData.get('outlet')),
    date: emptyToNull(formData.get('date')),
    url: emptyToNull(formData.get('url')),
    type: TYPES.includes(typeRaw) ? typeRaw : 'press_mention',
    updated_at: new Date().toISOString(),
  }

  if (id === 'new') {
    await supabase.from('media_items').insert(payload)
  } else {
    await supabase.from('media_items').update(payload).eq('id', id)
  }

  revalidatePath('/[locale]', 'page')
  redirect('/admin/media')
}

export async function deleteMediaItem(id: string) {
  const supabase = await createClient()
  await supabase.from('media_items').delete().eq('id', id)
  revalidatePath('/[locale]', 'page')
  revalidatePath('/[locale]/admin/media', 'page')
}
