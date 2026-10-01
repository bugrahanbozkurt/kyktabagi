import type { CalendarCell as CalendarCellType } from '../../types'

interface CalendarCellProps {
  cell: CalendarCellType
  onClick?: (day: number) => void
}

export function CalendarCell({ cell, onClick }: CalendarCellProps) {
  if (cell.day === null) {
    return <div />
  }

  const handleClick = () => {
    if (cell.day !== null && onClick) onClick(cell.day)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <button
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="focus-ring flex aspect-square w-full items-center justify-center rounded-lg text-sm font-medium transition-all duration-150"
      style={{
        backgroundColor: cell.isToday
          ? 'var(--color-accent)'
          : cell.isSelected
          ? 'var(--color-accent-soft)'
          : 'transparent',
        color: cell.isToday
          ? 'var(--color-accent-text)'
          : cell.isSelected
          ? 'var(--color-accent)'
          : 'var(--color-text-primary)',
        border: cell.isSelected && !cell.isToday
          ? '1.5px solid var(--color-accent)'
          : '1.5px solid transparent',
        fontFamily: 'Manrope, system-ui, sans-serif',
        fontWeight: cell.isToday || cell.isSelected ? 700 : 500,
      }}
      aria-label={`${cell.day}${cell.isToday ? ', bugün' : ''}`}
      aria-pressed={cell.isSelected}
    >
      {cell.day}
    </button>
  )
}
