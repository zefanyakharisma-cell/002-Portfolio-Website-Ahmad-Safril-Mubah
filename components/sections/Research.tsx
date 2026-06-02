import { useTranslations, useLocale } from 'next-intl'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal'
import { Icon } from '@/components/ui/Icon'
import { localized } from '@/lib/utils'
import { SECTION_IDS } from '@/lib/constants'
import type { ResearchTheme } from '@/types/database'

export function Research({ themes }: { themes: ResearchTheme[] }) {
  const t = useTranslations('research')
  const locale = useLocale()

  if (themes.length === 0) return null

  return (
    <section id={SECTION_IDS.research} className="border-t border-border bg-bg-subtle py-20 transition-theme md:py-24">
      <div className="container-content">
        <ScrollReveal>
          <SectionHeading subheading={t('subheading')}>{t('heading')}</SectionHeading>
        </ScrollReveal>

        <StaggerGroup className="grid gap-5 md:grid-cols-2">
          {themes.map((theme) => (
            <StaggerItem key={theme.id}>
              <article className="group h-full rounded-lg border border-border border-l-2 bg-surface p-6 transition-colors hover:border-l-gold">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold-light text-gold">
                  <Icon name={theme.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-text-primary">
                  {localized(theme.title_en, theme.title_id, locale)}
                </h3>
                <p className="mt-2 leading-relaxed text-text-muted">
                  {localized(theme.description_en, theme.description_id, locale)}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
