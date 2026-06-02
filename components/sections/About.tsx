import { useTranslations } from 'next-intl'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SECTION_IDS } from '@/lib/constants'

type Education = { degree: string; institution: string }
type Metric = { value: string; label: string }

export function About() {
  const t = useTranslations('about')
  const education = t.raw('education') as Education[]
  const metrics = t.raw('metrics') as Metric[]

  return (
    <section id={SECTION_IDS.about} className="border-t border-border py-20 md:py-24">
      <div className="container-content">
        <ScrollReveal>
          <SectionHeading>{t('heading')}</SectionHeading>
        </ScrollReveal>

        <div className="grid gap-12 md:grid-cols-[2fr_3fr]">
          {/* Left: metrics + education */}
          <ScrollReveal className="space-y-10">
            <div className="grid grid-cols-3 gap-4">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-border bg-bg-subtle p-4 text-center"
                >
                  <div className="font-serif text-2xl text-gold">{m.value}</div>
                  <div className="mt-1 text-xs text-text-muted">{m.label}</div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-muted">
                {t('educationHeading')}
              </h3>
              <ul className="space-y-4 border-l-2 border-gold pl-5">
                {education.map((e) => (
                  <li key={e.degree}>
                    <p className="font-medium text-text-primary">{e.degree}</p>
                    <p className="text-sm text-text-muted">{e.institution}</p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Right: bio */}
          <ScrollReveal delay={0.08} className="space-y-5 text-lg leading-relaxed text-text-muted">
            <p>{t('bio1')}</p>
            <p>{t('bio2')}</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
