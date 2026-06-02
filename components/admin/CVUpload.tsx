'use client'

import { useActionState, useState } from 'react'
import { UploadCloud, FileCheck2, ExternalLink } from 'lucide-react'
import { uploadCv } from '@/lib/actions/cv'

export function CVUpload({
  available,
  lastUpdated,
}: {
  available: boolean
  lastUpdated: string | null
}) {
  const [state, formAction, pending] = useActionState(uploadCv, null)
  const [fileName, setFileName] = useState<string | null>(null)

  return (
    <div className="max-w-xl space-y-6">
      <div className="rounded-lg border border-border bg-bg-subtle p-5">
        <div className="flex items-center gap-3">
          <FileCheck2 size={20} className={available ? 'text-gold' : 'text-text-muted'} />
          <div className="flex-1">
            <p className="text-sm font-medium text-text-primary">
              {available ? 'cv.pdf' : 'No CV uploaded'}
            </p>
            {available && lastUpdated ? (
              <p className="text-xs text-text-muted">
                Last updated {new Date(lastUpdated).toLocaleString('en-GB')}
              </p>
            ) : null}
          </div>
          {available ? (
            <a
              href="/api/cv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gold hover:opacity-80"
            >
              <ExternalLink size={15} />
              Preview
            </a>
          ) : null}
        </div>
      </div>

      <form action={formAction} className="space-y-4">
        <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-bg-subtle px-6 py-10 text-center transition-colors hover:border-gold/50">
          <UploadCloud size={26} className="text-text-muted" />
          <span className="text-sm text-text-primary">
            {fileName ?? 'Choose a PDF file (max 10MB)'}
          </span>
          <span className="text-xs text-text-muted">Uploading replaces the current CV.</span>
          <input
            type="file"
            name="file"
            accept="application/pdf"
            required
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
            className="sr-only"
          />
        </label>

        {state?.error ? (
          <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-400">
            {state.error}
          </p>
        ) : null}
        {state?.success ? (
          <p className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-400">
            CV uploaded successfully.
          </p>
        ) : null}

        <button
          type="submit"
          disabled={pending}
          className="rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {pending ? 'Uploading…' : 'Upload CV'}
        </button>
      </form>
    </div>
  )
}
