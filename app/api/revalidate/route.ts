import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

// Called after any admin save to refresh the cached public pages.
export async function POST() {
  revalidatePath('/[locale]', 'page')
  return NextResponse.json({ revalidated: true, now: Date.now() })
}
