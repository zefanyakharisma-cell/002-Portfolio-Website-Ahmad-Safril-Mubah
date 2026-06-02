'use client'

import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'

export function LocaleToggle() {
  const locale = useLocale()
  const t = useTranslations('toggles')
  const router = useRouter()
  const pathname = usePathname()

  const next = locale === 'en' ? 'id' : 'en'

  const toggle = () => {
    try {
      localStorage.setItem('preferred-locale', next)
    } catch {}
    // next-intl's locale-aware router swaps the locale prefix for us.
    router.replace(pathname, { locale: next })
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t('locale')}
      className="inline-flex h-9 min-w-9 items-center justify-center rounded-full px-2 text-sm font-medium text-text-muted transition-colors hover:text-gold"
    >
      {next.toUpperCase()}
    </button>
  )
}
