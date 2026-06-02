import { useTranslations, useLocale } from 'next-intl'
import { ExternalLink, Mail } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal'
import { localized, formatDate } from '@/lib/utils'
import { PROFILE, SECTION_IDS } from '@/lib/constants'
import type { MediaItem } from '@/types/database'

export function MediaCommentary({ items }: { items: MediaItem[] }) {
  const t = useTranslations('media')
  const locale = useLocale()

  return (
    <section id={SECTION_IDS.media} className="border-t border-border py-20 md:py-24">
      <div className="container-content">
        <ScrollReveal>
          <SectionHeading subheading={t('subheading')}>{t('heading')}</SectionHeading>
        </ScrollReveal>

        {items.length === 0 ? (
          <ScrollReveal>
            <div className="rounded-lg border border-dashed border-border bg-bg-subtle p-10 text-center">
              <h3 className="font-serif text-xl text-text-primary">{t('emptyTitle')}</h3>
              <p className="mx-auto mt-2 max-w-md text-text-muted">{t('emptyBody')}</p>
              <a
                href={`mailto:${PROFILE.email}`}
                className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-navy px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <Mail size={16} />
                {t('emptyCta')}
              </a>
            </div>
          </ScrollReveal>
        ) : (
          <StaggerGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((m) => (
              <StaggerItem key={m.id}>
                <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-6">
                  <div className="flex items-center justify-between gap-2 text-sm text-text-muted">
                    <span className="truncate">{m.outlet}</span>
                    {m.date ? <span className="shrink-0">{formatDate(m.date, locale)}</span> : null}
                  </div>
                  <h3 className="mt-3 flex-1 font-serif text-lg leading-snug text-text-primary">
                    {m.url ? (
                      <a
                        href={m.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-1 hover:text-gold"
                      >
                        {localized(m.title_en, m.title_id, locale)}
                        <ExternalLink size={14} className="mt-1 shrink-0" />
                      </a>
                    ) : (
                      localized(m.title_en, m.title_id, locale)
                    )}
                  </h3>
                  <div className="mt-4">
                    <Badge variant="gold">{t(`types.${m.type}`)}</Badge>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        )}
      </div>
    </section>
  )
}
