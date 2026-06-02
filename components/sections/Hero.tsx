import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Download } from 'lucide-react'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { PROFILE, SECTION_IDS } from '@/lib/constants'

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section
      id="top"
      className="relative overflow-hidden"
      aria-label="Introduction"
    >
      {/* Faint navy radial (light) / golden glow (dark) accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_85%_0%,var(--color-gold-light),transparent_70%)] opacity-60"
      />
      <div className="container-content grid items-center gap-12 py-20 md:grid-cols-[3fr_2fr] md:py-28">
        <div>
          <h1 className="text-4xl leading-[1.1] text-text-primary md:text-5xl lg:text-6xl">
            {PROFILE.name}
          </h1>
          <p className="mt-3 text-sm uppercase tracking-[0.18em] text-text-muted">
            {t('credentials')}
          </p>
          <p className="mt-6 text-lg text-text-primary">{t('title')}</p>
          <p className="text-text-muted">{t('institution')}</p>
          <p className="mt-6 max-w-xl text-balance text-lg italic text-text-muted">
            “{t('tagline')}”
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`#${SECTION_IDS.publications}`}
              className="inline-flex items-center rounded-lg bg-navy px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              {t('viewPublications')}
            </a>
            <a
              href="/api/cv"
              className="inline-flex items-center gap-1.5 rounded-lg border border-gold px-5 py-2.5 text-sm font-medium text-gold transition-colors hover:bg-gold-light"
            >
              <Download size={16} />
              {t('downloadCv')}
            </a>
          </div>

          <SocialLinks variant="strip" className="mt-8" />
        </div>

        <div className="relative mx-auto w-full max-w-xs md:max-w-none">
          <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-lg bg-gold-light" aria-hidden />
          <Image
            src={PROFILE.photoUrl}
            alt={t('photoAlt')}
            width={520}
            height={640}
            priority
            className="aspect-[4/5] w-full rounded-lg border border-border object-cover object-top"
          />
        </div>
      </div>
    </section>
  )
}
