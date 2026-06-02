import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin · Ahmad Safril Mubah',
  robots: { index: false, follow: false },
}

// The admin panel is always dark, independent of the public theme toggle.
// The `dark` class redefines the CSS color tokens for everything inside.
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark min-h-screen bg-bg text-text-primary">{children}</div>
  )
}
