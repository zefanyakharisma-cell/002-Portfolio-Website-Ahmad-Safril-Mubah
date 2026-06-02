'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { useTranslations } from 'next-intl'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const t = useTranslations('toggles')
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={t('theme')}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-text-muted transition-colors hover:text-gold"
    >
      {/* Render a stable icon before hydration to avoid mismatch */}
      {mounted && isDark ? (
        <Sun size={18} aria-hidden />
      ) : (
        <Moon size={18} aria-hidden />
      )}
    </button>
  )
}
