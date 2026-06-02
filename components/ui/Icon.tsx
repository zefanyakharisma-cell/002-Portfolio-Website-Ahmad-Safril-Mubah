import {
  Globe,
  Users,
  ShieldAlert,
  Landmark,
  BookOpen,
  Newspaper,
  GraduationCap,
  Network,
  Scale,
  Flag,
  type LucideIcon,
} from 'lucide-react'

/**
 * Resolve a lucide icon by the kebab-case name stored in the database
 * (e.g. "shield-alert"). Falls back to a globe when unknown.
 */
const ICONS: Record<string, LucideIcon> = {
  globe: Globe,
  users: Users,
  'shield-alert': ShieldAlert,
  landmark: Landmark,
  'book-open': BookOpen,
  newspaper: Newspaper,
  'graduation-cap': GraduationCap,
  network: Network,
  scale: Scale,
  flag: Flag,
}

export function Icon({
  name,
  className,
  ...props
}: { name: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = ICONS[name] ?? Globe
  return <Cmp className={className} aria-hidden {...props} />
}
