import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

interface NavItemProps {
  to: string
  icon: React.ReactNode
  label: string
}

export function NavItem({ to, icon, label }: NavItemProps) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) =>
        clsx(
          'focus-ring flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-150 mb-1',
          isActive
            ? 'font-semibold'
            : 'hover:opacity-80'
        )
      }
      style={({ isActive }) => ({
        backgroundColor: isActive ? 'var(--color-accent-soft)' : 'transparent',
        color: isActive ? 'var(--color-accent)' : 'var(--color-text-secondary)',
      })}
      aria-label={label}
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  )
}
