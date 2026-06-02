import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { requireUser } from '@/lib/auth'
import { createClient } from '@/lib/supabase/server'
import { AdminShell } from '@/components/admin/AdminShell'
import { Field, TextArea } from '@/components/admin/Fields'
import { SubmitButton } from '@/components/admin/SubmitButton'
import { saveResearchTheme } from '@/lib/actions/research'
import type { ResearchTheme } from '@/types/database'

export default async function ResearchFormPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const user = await requireUser()
  const isNew = id === 'new'

  let theme: ResearchTheme | null = null
  let nextOrder = 1
  const supabase = await createClient()

  if (isNew) {
    const { count } = await supabase
      .from('research_themes')
      .select('id', { count: 'exact', head: true })
    nextOrder = (count ?? 0) + 1
  } else {
    const { data } = await supabase.from('research_themes').select('*').eq('id', id).single()
    if (!data) notFound()
    theme = data
  }

  const action = saveResearchTheme.bind(null, id)

  return (
    <AdminShell email={user.email ?? ''} title={isNew ? 'New Research Theme' : 'Edit Research Theme'}>
      <Link
        href="/admin/research"
        className="mb-6 inline-flex items-center gap-1 text-sm text-text-muted hover:text-gold"
      >
        <ArrowLeft size={15} />
        Back to research themes
      </Link>

      <form action={action} className="max-w-3xl space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Title (EN)" name="title_en" required defaultValue={theme?.title_en} />
          <Field label="Title (ID)" name="title_id" defaultValue={theme?.title_id} />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <TextArea label="Description (EN)" name="description_en" required defaultValue={theme?.description_en} />
          <TextArea label="Description (ID)" name="description_id" defaultValue={theme?.description_id} />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Field
            label="Icon (lucide name)"
            name="icon"
            placeholder="globe, users, shield-alert, landmark…"
            defaultValue={theme?.icon ?? 'globe'}
          />
          <Field label="Order" name="order" type="number" defaultValue={theme?.order ?? nextOrder} />
        </div>

        <div className="flex items-center gap-3 pt-2">
          <SubmitButton />
          <Link href="/admin/research" className="text-sm text-text-muted hover:text-text-primary">
            Cancel
          </Link>
        </div>
      </form>
    </AdminShell>
  )
}
