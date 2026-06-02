'use client'

import { Trash2 } from 'lucide-react'

/** Submit button that asks for confirmation before posting its parent form. */
export function ConfirmButton({
  message = 'Are you sure? This cannot be undone.',
  label,
}: {
  message?: string
  label?: string
}) {
  return (
    <button
      type="submit"
      onClick={(e) => {
        if (!confirm(message)) e.preventDefault()
      }}
      className="inline-flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-red-400"
    >
      <Trash2 size={15} />
      {label}
    </button>
  )
}
