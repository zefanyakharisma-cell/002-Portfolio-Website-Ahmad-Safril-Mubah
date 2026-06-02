import Link from 'next/link'
import { BookText, Lightbulb, Newspaper, Quote } from 'lucide-react'
import { requireUser } from '@/lib/auth'
import { AdminShell } from '@/components/admin/AdminShell'
import { createClient } from '@/lib/supabase/server'
import { getCvMeta } from '@/lib/data'
import { formatDate } from '@/lib/utils'

export default async function DashboardPage() {
  const user = await requireUser()
  const supabase = await createClient()

  const [pubs, themes, media, cv] = await Promise.all([
    supabase.from('publications').select('citation_count'),
    supabase.from('research_themes').select('id', { count: 'exact', head: true }),
    supabase.from('media_items').select('id', { count: 'exact', head: true }),
    getCvMeta(),
  ])

  const pubCount = pubs.data?.length ?? 0
  const citations = (pubs.data ?? []).reduce((s, p) => s + (p.citation_count ?? 0), 0)

  const stats = [
    { label: 'Publications', value: pubCount, icon: BookText, href: '/admin/publications' },
    { label: 'Total Citations', value: citations, icon: Quote, href: '/admin/publications' },
    { label: 'Research Themes', value: themes.count ?? 0, icon: Lightbulb, href: '/admin/research' },
    { label: 'Media Items', value: media.count ?? 0, icon: Newspaper, href: '/admin/media' },
  ]

  return (
    <AdminShell email={user.email ?? ''} title="Dashboard">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, value, icon: I, href }) => (
          <Link
            key={label}
            href={href}
            className="rounded-lg border border-border bg-bg-subtle p-5 transition-colors hover:border-gold/40"
          >
            <I size={18} className="text-gold" />
            <div className="mt-3 font-serif text-3xl text-text-primary">{value}</div>
            <div className="mt-1 text-sm text-text-muted">{label}</div>
          </Link>
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-border bg-bg-subtle p-5">
        <h2 className="text-sm font-semibold text-text-primary">Curriculum Vitae</h2>
        <p className="mt-1 text-sm text-text-muted">
          {cv.available
            ? `Current CV uploaded${cv.lastUpdated ? ` · last updated ${formatDate(cv.lastUpdated)}` : ''}.`
            : 'No CV uploaded yet.'}
        </p>
        <Link href="/admin/cv" className="mt-3 inline-block text-sm font-medium text-gold hover:opacity-80">
          Manage CV →
        </Link>
      </div>
    </AdminShell>
  )
}
