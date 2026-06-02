import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Pick the localized value, falling back to English when a translation is missing. */
export function localized(
  en: string | null | undefined,
  id: string | null | undefined,
  locale: string
): string {
  if (locale === 'id') return (id && id.trim()) || en || ''
  return en || ''
}

export function formatDate(date: string | Date, locale = 'en'): string {
  return new Intl.DateTimeFormat(locale === 'id' ? 'id-ID' : 'en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date))
}

/** Bold the author's surname ("Mubah") within an authors string. Returns segments. */
export function highlightAuthor(
  authors: string,
  needle = 'Mubah'
): { text: string; highlight: boolean }[] {
  const parts = authors.split(new RegExp(`(${needle})`, 'gi'))
  return parts
    .filter((p) => p.length > 0)
    .map((p) => ({ text: p, highlight: p.toLowerCase() === needle.toLowerCase() }))
}
