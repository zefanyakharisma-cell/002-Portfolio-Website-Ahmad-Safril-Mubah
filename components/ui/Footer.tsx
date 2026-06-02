import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { SocialLinks } from './SocialLinks'
import { PROFILE } from '@/lib/constants'

export function Footer() {
  const t = useTranslations('footer')
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-bg-subtle transition-theme">
      <div className="container-content flex flex-col items-center gap-6 py-12 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-serif text-base text-text-primary">{PROFILE.name}</p>
          <p className="mt-1 text-sm text-text-muted">{t('builtWith')}</p>
          <p className="mt-1 text-sm text-text-muted">
            © {year} · {t('rights')}
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:items-end">
          <SocialLinks variant="strip" />
          <Link
            href="/admin/login"
            className="text-xs text-text-muted/40 transition-colors hover:text-text-muted"
          >
            Admin
          </Link>
        </div>
      </div>
    </footer>
  )
}
