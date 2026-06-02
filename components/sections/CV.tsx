import { useTranslations, useLocale } from 'next-intl'
import { Download, FileText } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { formatDate } from '@/lib/utils'
import { SECTION_IDS } from '@/lib/constants'

export function CV({
  available,
  lastUpdated,
}: {
  available: boolean
  lastUpdated: string | null
}) {
  const t = useTranslations('cv')
  const locale = useLocale()

  return (
    <section id={SECTION_IDS.cv} className="border-t border-border bg-bg-subtle py-20 transition-theme md:py-24">
      <div className="container-content max-w-2xl text-center">
        <ScrollReveal>
          <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-light text-gold">
            <FileText size={22} />
          </span>
          <h2 className="mt-6 text-3xl md:text-[2rem]">{t('heading')}</h2>
          <p className="mx-auto mt-4 max-w-prose text-lg leading-relaxed text-text-muted">
            {t('summary')}
          </p>

          {available ? (
            <div className="mt-8">
              <a
                href="/api/cv"
                className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <Download size={16} />
                {t('download')}
              </a>
              {lastUpdated ? (
                <p className="mt-3 text-sm text-text-muted">
                  {t('lastUpdated', { date: formatDate(lastUpdated, locale) })}
                </p>
              ) : null}
            </div>
          ) : (
            <p className="mt-8 text-sm text-text-muted">{t('unavailable')}</p>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
