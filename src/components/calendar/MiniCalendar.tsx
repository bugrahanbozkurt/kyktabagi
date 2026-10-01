import { useMenuViewStore } from '../../store/useMenuViewStore'
import { buildCalendarCells } from '../../lib/date'
import { DAY_SHORT_TR } from '../../lib/constants'
import { CalendarCell } from './CalendarCell'

export function MiniCalendar() {
  const { viewYear, viewMonth, selectedDay, setSelectedDay, toggleCalendar } = useMenuViewStore()
  const cells = buildCalendarCells(viewYear, viewMonth, selectedDay)

  function handleDayClick(day: number) {
    setSelectedDay(day)
    // Takvimi kapat
    toggleCalendar()
    // Kısa gecikme sonrası seçili karta scroll et (kapanma animasyonu tamamlansın)
    setTimeout(() => {
      const el = document.getElementById(`day-${viewYear}-${viewMonth}-${day}`)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 320)
  }

  return (
    <div
      className="rounded-xl border p-3"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
        maxWidth: '320px',
      }}
    >
      {/* Day headers */}
      <div className="mb-1 grid grid-cols-7 gap-0.5">
        {DAY_SHORT_TR.map((d) => (
          <div
            key={d}
            className="flex items-center justify-center py-0.5 text-xs font-semibold"
            style={{ color: 'var(--color-text-faint)' }}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-0.5">
        {cells.map((cell, i) => (
          <CalendarCell
            key={i}
            cell={cell}
            onClick={handleDayClick}
          />
        ))}
      </div>
    </div>
  )
}
