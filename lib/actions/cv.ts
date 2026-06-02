'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'

const CV_PATH = 'cv.pdf'
const MAX_BYTES = 10 * 1024 * 1024 // 10MB

export async function uploadCv(
  _prev: { error?: string; success?: boolean } | null,
  formData: FormData
): Promise<{ error?: string; success?: boolean }> {
  const file = formData.get('file')
  if (!(file instanceof File) || file.size === 0) {
    return { error: 'Please choose a PDF file.' }
  }
  if (file.type !== 'application/pdf') {
    return { error: 'Only PDF files are allowed.' }
  }
  if (file.size > MAX_BYTES) {
    return { error: 'File exceeds the 10MB limit.' }
  }

  const supabase = await createClient()
  const { error } = await supabase.storage
    .from('documents')
    .upload(CV_PATH, file, { upsert: true, contentType: 'application/pdf' })

  if (error) return { error: error.message }

  revalidatePath('/[locale]', 'page')
  revalidatePath('/[locale]/admin/cv', 'page')
  return { success: true }
}
