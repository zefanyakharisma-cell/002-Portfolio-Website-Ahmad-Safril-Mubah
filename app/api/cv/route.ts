import { NextResponse } from 'next/server'
import { getCvSignedUrl } from '@/lib/data'

// Public CV download: mint a short-lived signed URL and redirect to it.
export async function GET() {
  const url = await getCvSignedUrl()
  if (!url) {
    return NextResponse.json({ error: 'CV not available' }, { status: 404 })
  }
  return NextResponse.redirect(url)
}
