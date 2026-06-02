'use client'

import { useState, useTransition } from 'react'
import { GripVertical, Pencil } from 'lucide-react'
import { reorderResearchThemes, deleteResearchTheme } from '@/lib/actions/research'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'
import type { ResearchTheme } from '@/types/database'

export function ResearchReorder({ initial }: { initial: ResearchTheme[] }) {
  const [items, setItems] = useState(initial)
  const [dragId, setDragId] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()

  function onDrop(targetId: string) {
    if (!dragId || dragId === targetId) return
    const from = items.findIndex((i) => i.id === dragId)
    const to = items.findIndex((i) => i.id === targetId)
    const next = [...items]
    const [moved] = next.splice(from, 1)
    next.splice(to, 0, moved)
    setItems(next)
    setDragId(null)
    startTransition(() => reorderResearchThemes(next.map((i) => i.id)))
  }

  async function onDelete(id: string) {
    if (!confirm('Delete this research theme?')) return
    setItems((prev) => prev.filter((i) => i.id !== id))
    startTransition(() => deleteResearchTheme(id))
  }

  if (items.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-border p-10 text-center text-text-muted">
        No research themes yet.
      </p>
    )
  }

  return (
    <ul className={cn('space-y-3', pending && 'opacity-70')}>
      {items.map((t) => (
        <li
          key={t.id}
          draggable
          onDragStart={() => setDragId(t.id)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => onDrop(t.id)}
          className={cn(
            'flex items-start gap-3 rounded-lg border border-border bg-bg-subtle p-4',
            dragId === t.id && 'opacity-50'
          )}
        >
          <GripVertical size={18} className="mt-0.5 shrink-0 cursor-grab text-text-muted" />
          <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
            <Icon name={t.icon} className="h-4 w-4" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-medium text-text-primary">{t.title_en}</p>
            <p className="mt-0.5 line-clamp-2 text-sm text-text-muted">{t.description_en}</p>
          </div>
          <div className="flex shrink-0 items-center gap-4 text-sm">
            <a
              href={`/admin/research/${t.id}`}
              className="inline-flex items-center gap-1 text-text-muted hover:text-gold"
            >
              <Pencil size={14} />
              Edit
            </a>
            <button onClick={() => onDelete(t.id)} className="text-text-muted hover:text-red-400">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
