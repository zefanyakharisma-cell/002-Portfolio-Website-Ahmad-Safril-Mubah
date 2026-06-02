import { useTranslations } from 'next-intl'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal'
import { Icon } from '@/components/ui/Icon'
import { SECTION_IDS } from '@/lib/constants'

type Course = { title: string; description: string; syllabus?: string }

// Lucide icon name per course, in JSON order.
const COURSE_ICONS = ['shield-alert', 'network', 'scale', 'globe', 'flag']

export function Teaching() {
  const t = useTranslations('teaching')
  const courses = t.raw('courses') as Course[]

  return (
    <section id={SECTION_IDS.teaching} className="border-t border-border bg-bg-subtle py-20 transition-theme md:py-24">
      <div className="container-content">
        <ScrollReveal>
          <SectionHeading subheading={t('subheading')}>{t('heading')}</SectionHeading>
        </ScrollReveal>

        <StaggerGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <StaggerItem key={c.title}>
              <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold-light text-gold">
                  <Icon name={COURSE_ICONS[i] ?? 'book-open'} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-text-primary">{c.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-text-muted">{c.description}</p>
                {c.syllabus ? (
                  <a
                    href={c.syllabus}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-sm font-medium text-gold hover:opacity-80"
                  >
                    {t('syllabus')} →
                  </a>
                ) : null}
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
