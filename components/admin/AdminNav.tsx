'use client'

import { usePathname } from 'next/navigation'
import { LayoutDashboard, BookText, Lightbulb, Newspaper, FileText, LogOut, ExternalLink } from 'lucide-react'
import { signOut } from '@/lib/actions/auth'
import { cn } from '@/lib/utils'

const ITEMS = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/publications', label: 'Publications', icon: BookText },
  { href: '/admin/research', label: 'Research Themes', icon: Lightbulb },
  { href: '/admin/media', label: 'Media', icon: Newspaper },
  { href: '/admin/cv', label: 'CV', icon: FileText },
]

export function AdminNav({ email }: { email: string }) {
  const pathname = usePathname()

  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-border bg-bg-subtle">
      <div className="border-b border-border px-5 py-5">
        <p className="font-serif text-lg text-text-primary">Safril Mubah</p>
        <p className="mt-0.5 text-xs text-text-muted">Admin Panel</p>
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {ITEMS.map(({ href, label, icon: I }) => {
          const active = pathname.includes(href)
          return (
            <a
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                active
                  ? 'bg-gold/15 text-gold'
                  : 'text-text-muted hover:bg-surface hover:text-text-primary'
              )}
            >
              <I size={17} />
              {label}
            </a>
          )
        })}
      </nav>

      <div className="space-y-2 border-t border-border p-3">
        <a
          href="/"
          target="_blank"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-text-muted transition-colors hover:bg-surface hover:text-text-primary"
        >
          <ExternalLink size={17} />
          View site
        </a>
        <form action={signOut}>
          <button
            type="submit"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-text-muted transition-colors hover:bg-surface hover:text-text-primary"
          >
            <LogOut size={17} />
            Sign out
          </button>
        </form>
        <p className="truncate px-3 pt-1 text-xs text-text-muted">{email}</p>
      </div>
    </aside>
  )
}
