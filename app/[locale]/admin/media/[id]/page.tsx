import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { requireUser } from '@/lib/auth'
import { createClient } from '@/lib/supabase/server'
import { AdminShell } from '@/components/admin/AdminShell'
import { Field, Select } from '@/components/admin/Fields'
import { SubmitButton } from '@/components/admin/SubmitButton'
import { saveMediaItem } from '@/lib/actions/media'
import type { MediaItem } from '@/types/database'

export default async function MediaFormPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const user = await requireUser()
  const isNew = id === 'new'

  let item: MediaItem | null = null
  if (!isNew) {
    const supabase = await createClient()
    const { data } = await supabase.from('media_items').select('*').eq('id', id).single()
    if (!data) notFound()
    item = data
  }

  const action = saveMediaItem.bind(null, id)

  return (
    <AdminShell email={user.email ?? ''} title={isNew ? 'New Media Item' : 'Edit Media Item'}>
      <Link
        href="/admin/media"
        className="mb-6 inline-flex items-center gap-1 text-sm text-text-muted hover:text-gold"
      >
        <ArrowLeft size={15} />
        Back to media
      </Link>

      <form action={action} className="max-w-3xl space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Title (EN)" name="title_en" required defaultValue={item?.title_en} />
          <Field label="Title (ID)" name="title_id" defaultValue={item?.title_id} />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Outlet" name="outlet" defaultValue={item?.outlet} />
          <Field label="Date" name="date" type="date" defaultValue={item?.date} />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="URL" name="url" placeholder="https://…" defaultValue={item?.url} />
          <Select
            label="Type"
            name="type"
            defaultValue={item?.type ?? 'press_mention'}
            options={[
              { value: 'interview', label: 'Interview' },
              { value: 'commentary', label: 'Commentary' },
              { value: 'press_mention', label: 'Press Mention' },
            ]}
          />
        </div>

        <div className="flex items-center gap-3 pt-2">
          <SubmitButton />
          <Link href="/admin/media" className="text-sm text-text-muted hover:text-text-primary">
            Cancel
          </Link>
        </div>
      </form>
    </AdminShell>
  )
}
