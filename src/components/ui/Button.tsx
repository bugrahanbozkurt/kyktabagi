import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md'
}

export function Button({ variant = 'ghost', size = 'md', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'focus-ring inline-flex items-center justify-center rounded-xl font-medium transition-colors duration-150',
        size === 'sm' && 'gap-1.5 px-3 py-1.5 text-xs',
        size === 'md' && 'gap-2 px-4 py-2 text-sm',
        className
      )}
      style={{
        backgroundColor: variant === 'primary' ? 'var(--color-accent)' : 'transparent',
        color: variant === 'primary' ? 'var(--color-accent-text)' : 'var(--color-text-secondary)',
        border: variant === 'ghost' ? '1px solid var(--color-border)' : 'none',
      }}
      {...props}
    >
      {children}
    </button>
  )
}
