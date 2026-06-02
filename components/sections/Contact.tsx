'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Mail, MapPin, Send } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { PROFILE, SECTION_IDS } from '@/lib/constants'

export function Contact() {
  const t = useTranslations('contact')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || `Enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`
    )
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
  }

  const field =
    'w-full rounded-lg border border-border bg-bg px-3 py-2 text-text-primary placeholder:text-text-muted/60 focus:border-gold'

  return (
    <section id={SECTION_IDS.contact} className="border-t border-border py-20 md:py-24">
      <div className="container-content">
        <ScrollReveal>
          <SectionHeading>{t('heading')}</SectionHeading>
        </ScrollReveal>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Left: info */}
          <ScrollReveal className="space-y-8">
            <h3 className="text-lg font-semibold text-text-primary">{t('infoHeading')}</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm text-text-muted">{t('email')}</p>
                  <a href={`mailto:${PROFILE.email}`} className="text-text-primary hover:text-gold">
                    {PROFILE.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm text-text-muted">{t('institution')}</p>
                  <p className="text-text-primary">{t('institutionValue')}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-text-muted">
                {t('profiles')}
              </p>
              <SocialLinks variant="list" />
            </div>

            <p className="rounded-lg border border-gold/30 bg-gold-light/40 p-4 text-sm text-text-muted">
              {t('mediaNote')}
            </p>
          </ScrollReveal>

          {/* Right: form */}
          <ScrollReveal delay={0.08}>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm text-text-muted">
                  {t('form.name')}
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm text-text-muted">
                  {t('form.email')}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="subject" className="mb-1 block text-sm text-text-muted">
                  {t('form.subject')}
                </label>
                <input
                  id="subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm text-text-muted">
                  {t('form.message')}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={field}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <Send size={16} />
                {t('form.send')}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
