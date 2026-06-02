'use client'

import { useActionState } from 'react'
import { signIn } from '@/lib/actions/auth'

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(signIn, null)

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="font-serif text-2xl text-text-primary">Admin Sign In</h1>
          <p className="mt-1 text-sm text-text-muted">Ahmad Safril Mubah · Portfolio</p>
        </div>

        <form action={formAction} className="space-y-4 rounded-lg border border-border bg-bg-subtle p-6">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-text-muted">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-text-primary focus:border-gold"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1 block text-sm text-text-muted">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-text-primary focus:border-gold"
            />
          </div>

          {state?.error ? (
            <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-400">
              {state.error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-navy transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {pending ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}
