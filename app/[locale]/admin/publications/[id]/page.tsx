import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { requireUser } from '@/lib/auth'
import { createClient } from '@/lib/supabase/server'
import { AdminShell } from '@/components/admin/AdminShell'
import { Field, TextArea, Select } from '@/components/admin/Fields'
import { SubmitButton } from '@/components/admin/SubmitButton'
import { savePublication } from '@/lib/actions/publications'
import type { Publication } from '@/types/database'

export default async function PublicationFormPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const user = await requireUser()
  const isNew = id === 'new'

  let pub: Publication | null = null
  if (!isNew) {
    const supabase = await createClient()
    const { data } = await supabase.from('publications').select('*').eq('id', id).single()
    if (!data) notFound()
    pub = data
  }

  const action = savePublication.bind(null, id)

  return (
    <AdminShell email={user.email ?? ''} title={isNew ? 'New Publication' : 'Edit Publication'}>
      <Link
        href="/admin/publications"
        className="mb-6 inline-flex items-center gap-1 text-sm text-text-muted hover:text-gold"
      >
        <ArrowLeft size={15} />
        Back to publications
      </Link>

      <form action={action} className="max-w-3xl space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Title (EN)" name="title_en" required defaultValue={pub?.title_en} />
          <Field label="Title (ID)" name="title_id" defaultValue={pub?.title_id} />
        </div>

        <Field
          label="Authors"
          name="authors"
          required
          placeholder="A. Safril Mubah, S. Anabarja"
          defaultValue={pub?.authors}
        />

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Journal / Publisher" name="journal" defaultValue={pub?.journal} />
          <Field label="Year" name="year" type="number" required defaultValue={pub?.year} />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <Select
            label="Type"
            name="type"
            defaultValue={pub?.type ?? 'article'}
            options={[
              { value: 'article', label: 'Article' },
              { value: 'book', label: 'Book' },
              { value: 'chapter', label: 'Chapter' },
            ]}
          />
          <Field label="Citations" name="citation_count" type="number" defaultValue={pub?.citation_count ?? 0} />
          <Field label="DOI" name="doi" placeholder="10.1142/..." defaultValue={pub?.doi} />
        </div>

        <Field label="Fallback URL" name="url" placeholder="https://…" defaultValue={pub?.url} />

        <div className="grid gap-5 md:grid-cols-2">
          <TextArea label="Abstract (EN)" name="abstract_en" defaultValue={pub?.abstract_en} />
          <TextArea label="Abstract (ID)" name="abstract_id" defaultValue={pub?.abstract_id} />
        </div>

        <div className="flex items-center gap-3 pt-2">
          <SubmitButton />
          <Link href="/admin/publications" className="text-sm text-text-muted hover:text-text-primary">
            Cancel
          </Link>
        </div>
      </form>
    </AdminShell>
  )
}
