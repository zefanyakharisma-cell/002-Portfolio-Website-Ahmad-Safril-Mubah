import Link from 'next/link'
import { Plus, Pencil } from 'lucide-react'
import { requireUser } from '@/lib/auth'
import { createClient } from '@/lib/supabase/server'
import { AdminShell } from '@/components/admin/AdminShell'
import { ConfirmButton } from '@/components/admin/ConfirmButton'
import { deletePublication } from '@/lib/actions/publications'

export default async function PublicationsAdminPage() {
  const user = await requireUser()
  const supabase = await createClient()
  const { data: publications } = await supabase
    .from('publications')
    .select('*')
    .order('year', { ascending: false })

  return (
    <AdminShell
      email={user.email ?? ''}
      title="Publications"
      action={
        <Link
          href="/admin/publications/new"
          className="inline-flex items-center gap-1.5 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-navy hover:opacity-90"
        >
          <Plus size={16} />
          New
        </Link>
      }
    >
      <div className="overflow-hidden rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-bg-subtle text-left text-text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Year</th>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Type</th>
              <th className="px-4 py-3 font-medium">Citations</th>
              <th className="px-4 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {(publications ?? []).map((p) => (
              <tr key={p.id} className="align-top">
                <td className="px-4 py-3 text-text-muted">{p.year}</td>
                <td className="px-4 py-3 text-text-primary">
                  <span className="line-clamp-2">{p.title_en}</span>
                </td>
                <td className="px-4 py-3 capitalize text-text-muted">{p.type}</td>
                <td className="px-4 py-3 text-text-muted">{p.citation_count}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-4">
                    <Link
                      href={`/admin/publications/${p.id}`}
                      className="inline-flex items-center gap-1 text-text-muted hover:text-gold"
                    >
                      <Pencil size={15} />
                      Edit
                    </Link>
                    <form action={deletePublication.bind(null, p.id)}>
                      <ConfirmButton label="Delete" />
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {(!publications || publications.length === 0) && (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-text-muted">
                  No publications yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminShell>
  )
}
