import { cn } from '@/lib/utils'

export function SectionHeading({
  children,
  subheading,
  className,
}: {
  children: React.ReactNode
  subheading?: string
  className?: string
}) {
  return (
    <div className={cn('mb-12', className)}>
      <h2 className="text-3xl md:text-[2rem] leading-tight text-text-primary">
        {children}
      </h2>
      {subheading ? (
        <p className="mt-2 text-text-muted">{subheading}</p>
      ) : null}
      <div className="mt-4 h-px w-16 bg-gold" />
    </div>
  )
}
