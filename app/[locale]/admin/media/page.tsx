import Link from 'next/link'
import { Plus, Pencil } from 'lucide-react'
import { requireUser } from '@/lib/auth'
import { createClient } from '@/lib/supabase/server'
import { AdminShell } from '@/components/admin/AdminShell'
import { ConfirmButton } from '@/components/admin/ConfirmButton'
import { deleteMediaItem } from '@/lib/actions/media'
import { formatDate } from '@/lib/utils'

const TYPE_LABEL: Record<string, string> = {
  interview: 'Interview',
  commentary: 'Commentary',
  press_mention: 'Press Mention',
}

export default async function MediaAdminPage() {
  const user = await requireUser()
  const supabase = await createClient()
  const { data: items } = await supabase
    .from('media_items')
    .select('*')
    .order('date', { ascending: false })

  return (
    <AdminShell
      email={user.email ?? ''}
      title="Media"
      action={
        <Link
          href="/admin/media/new"
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
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Outlet</th>
              <th className="px-4 py-3 font-medium">Type</th>
              <th className="px-4 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {(items ?? []).map((m) => (
              <tr key={m.id} className="align-top">
                <td className="px-4 py-3 text-text-muted">{m.date ? formatDate(m.date) : '—'}</td>
                <td className="px-4 py-3 text-text-primary">
                  <span className="line-clamp-2">{m.title_en}</span>
                </td>
                <td className="px-4 py-3 text-text-muted">{m.outlet ?? '—'}</td>
                <td className="px-4 py-3 text-text-muted">{TYPE_LABEL[m.type] ?? m.type}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-4">
                    <Link
                      href={`/admin/media/${m.id}`}
                      className="inline-flex items-center gap-1 text-text-muted hover:text-gold"
                    >
                      <Pencil size={15} />
                      Edit
                    </Link>
                    <form action={deleteMediaItem.bind(null, m.id)}>
                      <ConfirmButton label="Delete" />
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {(!items || items.length === 0) && (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-text-muted">
                  No media items yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminShell>
  )
}
