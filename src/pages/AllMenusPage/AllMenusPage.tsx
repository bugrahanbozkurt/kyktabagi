import { PageContainer } from '../../components/layout/PageContainer'
import { MealTypeToggle } from '../../components/menu/MealTypeToggle'
import { MiniCalendar } from '../../components/calendar/MiniCalendar'
import { DayCard } from '../../components/menu/DayCard'
import { useMenuViewStore } from '../../store/useMenuViewStore'
import { daysInMonth } from '../../lib/date'
import { MONTHS_TR } from '../../lib/constants'

export function AllMenusPage() {
  const { viewYear, viewMonth, calendarOpen } = useMenuViewStore()
  const totalDays = daysInMonth(viewYear, viewMonth)
  const days = Array.from({ length: totalDays }, (_, i) => i + 1)

  return (
    <PageContainer>
      {/* Page title */}
      <div className="mb-6">
        <h1
          className="font-display text-2xl font-extrabold"
          style={{ color: 'var(--color-text-primary)', fontFamily: 'Manrope, system-ui, sans-serif' }}
        >
          Tüm Menüler
        </h1>
        <p className="mt-1 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          {MONTHS_TR[viewMonth - 1]} {viewYear} — {totalDays} günlük menü
        </p>
      </div>

      {/* Öğün tipi seçici */}
      <div className="mb-5">
        <MealTypeToggle />
      </div>

      {/* Takvim — Header'daki ay etiketine basınca açılır/kapanır */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        aria-hidden={!calendarOpen}
        style={{
          maxHeight: calendarOpen ? '340px' : '0px',
          opacity: calendarOpen ? 1 : 0,
          visibility: calendarOpen ? 'visible' : 'hidden',
          marginBottom: calendarOpen ? '20px' : '0px',
        }}
      >
        <MiniCalendar />
      </div>

      {/* Gün kartları */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {days.map((day) => (
          <DayCard key={day} year={viewYear} month={viewMonth} day={day} />
        ))}
      </div>
    </PageContainer>
  )
}
