'use client'

import { useFormStatus } from 'react-dom'

export function SubmitButton({ label = 'Save' }: { label?: string }) {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-opacity hover:opacity-90 disabled:opacity-60"
    >
      {pending ? 'Saving…' : label}
    </button>
  )
}
