import { cn } from '@/lib/utils'

type Variant = 'navy' | 'gold' | 'outline'

export function Badge({
  children,
  variant = 'outline',
  className,
}: {
  children: React.ReactNode
  variant?: Variant
  className?: string
}) {
  const variants: Record<Variant, string> = {
    navy: 'bg-navy text-white',
    gold: 'bg-gold-light text-gold border border-gold/30',
    outline: 'border border-border text-text-muted',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium leading-5',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
