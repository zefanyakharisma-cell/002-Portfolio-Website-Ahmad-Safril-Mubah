const fieldCls =
  'w-full rounded-lg border border-border bg-surface px-3 py-2 text-text-primary placeholder:text-text-muted/50 focus:border-gold'

export function Field({
  label,
  name,
  defaultValue,
  type = 'text',
  required,
  placeholder,
}: {
  label: string
  name: string
  defaultValue?: string | number | null
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm text-text-muted">
        {label}
        {required ? <span className="text-gold"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue ?? undefined}
        className={fieldCls}
      />
    </label>
  )
}

export function TextArea({
  label,
  name,
  defaultValue,
  required,
  rows = 4,
}: {
  label: string
  name: string
  defaultValue?: string | null
  required?: boolean
  rows?: number
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm text-text-muted">
        {label}
        {required ? <span className="text-gold"> *</span> : null}
      </span>
      <textarea
        name={name}
        required={required}
        rows={rows}
        defaultValue={defaultValue ?? undefined}
        className={fieldCls}
      />
    </label>
  )
}

export function Select({
  label,
  name,
  defaultValue,
  options,
}: {
  label: string
  name: string
  defaultValue?: string
  options: { value: string; label: string }[]
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm text-text-muted">{label}</span>
      <select name={name} defaultValue={defaultValue} className={fieldCls}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  )
}
