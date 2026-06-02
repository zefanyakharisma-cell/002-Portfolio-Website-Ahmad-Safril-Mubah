import { GraduationCap, FileText, BookMarked, Linkedin, Library, BarChart3 } from 'lucide-react'
import { PROFILE_LINKS, HERO_SOCIAL_KEYS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const ICON_FOR: Record<string, React.ComponentType<{ size?: number }>> = {
  scholar: GraduationCap,
  scopus: FileText,
  researchgate: BookMarked,
  academia: Library,
  sinta: BarChart3,
  linkedin: Linkedin,
}

export function SocialLinks({
  variant = 'strip',
  className,
}: {
  variant?: 'strip' | 'list'
  className?: string
}) {
  const links =
    variant === 'strip'
      ? PROFILE_LINKS.filter((l) => (HERO_SOCIAL_KEYS as readonly string[]).includes(l.key))
      : PROFILE_LINKS

  if (variant === 'strip') {
    return (
      <ul className={cn('flex items-center gap-4', className)}>
        {links.map((l) => {
          const I = ICON_FOR[l.key]
          return (
            <li key={l.key}>
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                className="text-text-muted transition-colors hover:text-gold"
              >
                <I size={20} />
              </a>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <ul className={cn('space-y-2', className)}>
      {links.map((l) => {
        const I = ICON_FOR[l.key]
        return (
          <li key={l.key}>
            <a
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-primary transition-colors hover:text-gold"
            >
              <I size={18} />
              <span>{l.label}</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
