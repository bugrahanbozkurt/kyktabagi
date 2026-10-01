import clsx from 'clsx'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'accent' | 'faint'
  className?: string
}

export function Badge({ children, variant = 'accent', className }: BadgeProps) {
  return (
    <span
      className={clsx('inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold', className)}
      style={{
        backgroundColor: variant === 'accent' ? 'var(--color-accent)' : 'var(--color-surface-alt)',
        color: variant === 'accent' ? 'var(--color-accent-text)' : 'var(--color-text-faint)',
      }}
    >
      {children}
    </span>
  )
}
