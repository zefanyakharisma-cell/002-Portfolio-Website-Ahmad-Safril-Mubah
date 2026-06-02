'use client'

import { useMemo, useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { ExternalLink, ArrowUpDown } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { localized, highlightAuthor, cn } from '@/lib/utils'
import { PROFILE, SECTION_IDS } from '@/lib/constants'
import type { Publication, PublicationType } from '@/types/database'

type Filter = 'all' | PublicationType
type Sort = 'newest' | 'cited'

const FILTERS: Filter[] = ['all', 'article', 'book', 'chapter']

export function Publications({ publications }: { publications: Publication[] }) {
  const t = useTranslations('publications')
  const locale = useLocale()
  const [filter, setFilter] = useState<Filter>('all')
  const [sort, setSort] = useState<Sort>('newest')

  const items = useMemo(() => {
    const filtered =
      filter === 'all' ? publications : publications.filter((p) => p.type === filter)
    return [...filtered].sort((a, b) =>
      sort === 'newest' ? b.year - a.year : b.citation_count - a.citation_count
    )
  }, [publications, filter, sort])

  return (
    <section id={SECTION_IDS.publications} className="border-t border-border py-20 md:py-24">
      <div className="container-content">
        <ScrollReveal>
          <SectionHeading>{t('heading')}</SectionHeading>
        </ScrollReveal>

        {publications.length === 0 ? (
          <p className="text-text-muted">{t('empty')}</p>
        ) : (
          <>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2" role="tablist" aria-label={t('heading')}>
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    role="tab"
                    aria-selected={filter === f}
                    onClick={() => setFilter(f)}
                    className={cn(
                      'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                      filter === f
                        ? 'border-navy bg-navy text-white'
                        : 'border-border text-text-muted hover:border-gold hover:text-gold'
                    )}
                  >
                    {t(`filters.${f}`)}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setSort((s) => (s === 'newest' ? 'cited' : 'newest'))}
                className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-gold"
              >
                <ArrowUpDown size={14} />
                {t(`sort.${sort}`)}
              </button>
            </div>

            <ul className="space-y-4">
              {items.map((p) => (
                <PublicationCard key={p.id} pub={p} locale={locale} t={t} />
              ))}
            </ul>

            <div className="mt-10">
              <a
                href={PROFILE.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-opacity hover:opacity-80"
              >
                {t('viewAll')}
                <ExternalLink size={14} />
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

function PublicationCard({
  pub,
  locale,
  t,
}: {
  pub: Publication
  locale: string
  t: ReturnType<typeof useTranslations<'publications'>>
}) {
  const title = localized(pub.title_en, pub.title_id, locale)
  const link = pub.doi ? `https://doi.org/${pub.doi}` : pub.url

  return (
    <li className="flex gap-4 rounded-lg border border-border bg-surface p-5 transition-colors hover:border-gold/40">
      <span className="hidden h-fit shrink-0 sm:block">
        <Badge variant="navy">{pub.year}</Badge>
      </span>
      <div className="min-w-0 flex-1">
        <div className="mb-2 flex flex-wrap items-center gap-2 sm:hidden">
          <Badge variant="navy">{pub.year}</Badge>
        </div>
        <h3 className="font-serif text-lg leading-snug text-text-primary">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="mt-1 text-sm text-text-muted">
          {highlightAuthor(pub.authors).map((seg, i) => (
            <span key={i} className={seg.highlight ? 'font-semibold text-text-primary' : undefined}>
              {seg.text}
            </span>
          ))}
        </p>
        {pub.journal ? (
          <p className="mt-0.5 text-sm italic text-text-muted">{pub.journal}</p>
        ) : null}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Badge variant="outline">{t(`types.${pub.type}`)}</Badge>
          {pub.citation_count > 0 ? (
            <Badge variant="gold">{t('citations', { count: pub.citation_count })}</Badge>
          ) : null}
        </div>
      </div>
    </li>
  )
}
