import { useMenuViewStore } from '../../store/useMenuViewStore'
import { useCityStore } from '../../store/useCityStore'
import { getMenu } from '../../mocks/menuGenerator'
import { isToday } from '../../lib/date'
import { MONTHS_TR } from '../../lib/constants'
import { CalorieBadge } from './CalorieBadge'
import { MealItemList } from './MealItemList'
import { Badge } from '../ui/Badge'

interface DayCardProps {
  year: number
  month: number
  day: number
}

const WEEKDAY_NAMES_TR = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']

export function DayCard({ year, month, day }: DayCardProps) {
  const { mealType, selectedDay } = useMenuViewStore()
  const { city } = useCityStore()
  const menu = getMenu(city, year, month, day)
  const meal = mealType === 'breakfast' ? menu.breakfast : menu.dinner
  const today = isToday(year, month, day)
  const isSelected = selectedDay === day
  const weekdayName = WEEKDAY_NAMES_TR[new Date(year, month - 1, day).getDay()]

  // Kenarlık önceliği: bugün > seçili > normal
  let borderColor = 'var(--color-border)'
  if (today) borderColor = 'var(--color-accent)'
  else if (isSelected) borderColor = 'var(--color-accent)'

  return (
    <article
      id={`day-${year}-${month}-${day}`}
      className="rounded-2xl border p-4 transition-all duration-200"
      style={{
        backgroundColor: isSelected && !today
          ? 'var(--color-accent-soft)'
          : 'var(--color-surface)',
        borderColor,
        boxShadow: isSelected
          ? '0 0 0 1px var(--color-accent)'
          : 'none',
        scrollMarginTop: '80px',
      }}
      aria-label={`${day} ${MONTHS_TR[month - 1]} menüsü`}
    >
      {/* Card header */}
      <div className="mb-3 flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <span
              className="font-display text-xl font-bold"
              style={{
                color: isSelected ? 'var(--color-accent)' : 'var(--color-text-primary)',
                fontFamily: 'Manrope, system-ui, sans-serif',
              }}
            >
              {String(day).padStart(2, '0')}
            </span>
            <span
              className="font-display text-sm font-semibold"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'Manrope, system-ui, sans-serif' }}
            >
              {MONTHS_TR[month - 1]}
            </span>
            {today && <Badge variant="accent">BUGÜN</Badge>}
            {isSelected && !today && <Badge variant="faint">SEÇİLİ</Badge>}
            {/* Gerçek/Örnek veri rozeti */}
            {(mealType === 'breakfast' ? menu.realBreakfast : menu.realDinner)
              ? (
                <span
                  className="inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider"
                  style={{ backgroundColor: 'rgba(99,190,132,0.15)', color: '#63BE84' }}
                  title="Gerçek KYK menü verisi"
                >
                  ✓ Gerçek
                </span>
              )
              : (
                <span
                  className="inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider"
                  style={{ backgroundColor: 'var(--color-border)', color: 'var(--color-text-faint)' }}
                  title="Örnek veri — gerçek KYK menüsü yüklenmedi"
                >
                  Örnek
                </span>
              )
            }
          </div>
          <p className="mt-0.5 text-xs" style={{ color: 'var(--color-text-faint)' }}>
            {weekdayName}
          </p>
        </div>
        <CalorieBadge calories={meal.calories} />
      </div>

      {/* Divider */}
      <div className="mb-3 h-px" style={{ backgroundColor: 'var(--color-border-soft)' }} />

      {/* Meal items */}
      <MealItemList items={meal.items} />
    </article>
  )
}
