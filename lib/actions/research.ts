'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

function emptyToNull(v: FormDataEntryValue | null): string | null {
  const s = String(v ?? '').trim()
  return s.length ? s : null
}

export async function saveResearchTheme(id: string, formData: FormData) {
  const supabase = await createClient()
  const payload = {
    title_en: String(formData.get('title_en') ?? '').trim(),
    title_id: emptyToNull(formData.get('title_id')),
    description_en: String(formData.get('description_en') ?? '').trim(),
    description_id: emptyToNull(formData.get('description_id')),
    icon: String(formData.get('icon') ?? 'globe').trim() || 'globe',
    order: Number(formData.get('order') ?? 0),
    updated_at: new Date().toISOString(),
  }

  if (id === 'new') {
    await supabase.from('research_themes').insert(payload)
  } else {
    await supabase.from('research_themes').update(payload).eq('id', id)
  }

  revalidatePath('/[locale]', 'page')
  redirect('/admin/research')
}

export async function deleteResearchTheme(id: string) {
  const supabase = await createClient()
  await supabase.from('research_themes').delete().eq('id', id)
  revalidatePath('/[locale]', 'page')
  revalidatePath('/[locale]/admin/research', 'page')
}

/** Persist a new ordering after drag-to-reorder. */
export async function reorderResearchThemes(orderedIds: string[]) {
  const supabase = await createClient()
  await Promise.all(
    orderedIds.map((id, index) =>
      supabase.from('research_themes').update({ order: index + 1 }).eq('id', id)
    )
  )
  revalidatePath('/[locale]', 'page')
  revalidatePath('/[locale]/admin/research', 'page')
}
