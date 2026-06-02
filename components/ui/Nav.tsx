'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Menu, X, Download } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { LocaleToggle } from './LocaleToggle'
import { SECTION_IDS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const LINKS = [
  SECTION_IDS.about,
  SECTION_IDS.research,
  SECTION_IDS.publications,
  SECTION_IDS.teaching,
  SECTION_IDS.media,
  SECTION_IDS.contact,
] as const

export function Nav() {
  const t = useTranslations('nav')
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md transition-theme">
      <nav className="container-content flex h-16 items-center justify-between">
        <a href="#top" className="font-serif text-lg text-text-primary">
          Ahmad Safril Mubah
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-5 text-sm">
            {LINKS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-text-muted transition-colors hover:text-gold"
                >
                  {t(id)}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-1 border-l border-border pl-3">
            <LocaleToggle />
            <ThemeToggle />
          </div>
          <a
            href="/api/cv"
            className="inline-flex items-center gap-1.5 rounded-lg border border-gold px-3 py-1.5 text-sm font-medium text-gold transition-colors hover:bg-gold-light"
          >
            <Download size={15} />
            {t('downloadCv')}
          </a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <LocaleToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={t('menu')}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center text-text-primary"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          'overflow-hidden border-t border-border md:hidden',
          open ? 'max-h-96' : 'max-h-0 border-t-0'
        )}
      >
        <ul className="container-content flex flex-col py-2">
          {LINKS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block py-2 text-text-muted transition-colors hover:text-gold"
              >
                {t(id)}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/api/cv"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-gold px-3 py-1.5 text-sm font-medium text-gold"
            >
              <Download size={15} />
              {t('downloadCv')}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
