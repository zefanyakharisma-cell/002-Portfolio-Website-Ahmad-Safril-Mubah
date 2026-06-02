import { AdminNav } from './AdminNav'

export function AdminShell({
  email,
  title,
  action,
  children,
}: {
  email: string
  title: string
  action?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <AdminNav email={email} />
      <main className="flex-1 overflow-x-hidden">
        <div className="flex items-center justify-between border-b border-border px-8 py-5">
          <h1 className="font-serif text-2xl text-text-primary">{title}</h1>
          {action}
        </div>
        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}
