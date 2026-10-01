import { ChevronDown } from 'lucide-react'
import { useMenuViewStore } from '../../store/useMenuViewStore'
import { MONTHS_TR } from '../../lib/constants'

export function MonthNavigator() {
  const { viewYear, viewMonth, toggleCalendar, calendarOpen } = useMenuViewStore()

  return (
    <button
      onClick={toggleCalendar}
      className="focus-ring flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors duration-150"
      style={{
        backgroundColor: calendarOpen ? 'var(--color-accent-soft)' : 'var(--color-surface)',
        color: calendarOpen ? 'var(--color-accent)' : 'var(--color-text-primary)',
        border: `1px solid ${calendarOpen ? 'var(--color-accent)' : 'var(--color-border)'}`,
        fontFamily: 'Manrope, system-ui, sans-serif',
      }}
      aria-expanded={calendarOpen}
      aria-label="Takvimi aç/kapat"
    >
      {MONTHS_TR[viewMonth - 1]} {viewYear}
      <ChevronDown
        size={13}
        className="transition-transform duration-200"
        style={{
          transform: calendarOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          color: calendarOpen ? 'var(--color-accent)' : 'var(--color-text-faint)',
        }}
      />
    </button>
  )
}