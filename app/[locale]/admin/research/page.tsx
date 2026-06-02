import Link from 'next/link'
import { Plus } from 'lucide-react'
import { requireUser } from '@/lib/auth'
import { createClient } from '@/lib/supabase/server'
import { AdminShell } from '@/components/admin/AdminShell'
import { ResearchReorder } from '@/components/admin/ResearchReorder'

export default async function ResearchAdminPage() {
  const user = await requireUser()
  const supabase = await createClient()
  const { data } = await supabase
    .from('research_themes')
    .select('*')
    .order('order', { ascending: true })

  return (
    <AdminShell
      email={user.email ?? ''}
      title="Research Themes"
      action={
        <Link
          href="/admin/research/new"
          className="inline-flex items-center gap-1.5 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-navy hover:opacity-90"
        >
          <Plus size={16} />
          New
        </Link>
      }
    >
      <p className="mb-4 text-sm text-text-muted">Drag cards to reorder how they appear on the site.</p>
      <ResearchReorder initial={data ?? []} />
    </AdminShell>
  )
}
