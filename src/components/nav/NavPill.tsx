import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

interface NavPillProps {
  to: string
  icon: React.ReactNode
  label: string
}

export function NavPill({ to, icon, label }: NavPillProps) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) =>
        clsx(
          'focus-ring flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-150',
          isActive ? 'font-semibold' : ''
        )
      }
      style={({ isActive }) => ({
        backgroundColor: isActive ? 'var(--color-accent)' : 'var(--color-surface)',
        color: isActive ? 'var(--color-accent-text)' : 'var(--color-text-secondary)',
        border: `1px solid ${isActive ? 'var(--color-accent)' : 'var(--color-border)'}`,
      })}
      aria-label={label}
    >
      {icon}
      <span className="whitespace-nowrap">{label}</span>
    </NavLink>
  )
}
