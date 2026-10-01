import { PageContainer } from '../../components/layout/PageContainer'
import { MealCard } from '../../components/menu/MealCard'
import { CalorieBadge } from '../../components/menu/CalorieBadge'
import { useCityStore } from '../../store/useCityStore'
import { getMenu } from '../../mocks/menuGenerator'
import { TODAY, MONTHS_TR } from '../../lib/constants'
import { Badge } from '../../components/ui/Badge'

const WEEKDAY_NAMES_TR = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']

export function TodayMenuPage() {
  const { city } = useCityStore()
  const menu = getMenu(city, TODAY.y, TODAY.m, TODAY.d)
  const totalCalories = menu.breakfast.calories + menu.dinner.calories
  const weekdayName = WEEKDAY_NAMES_TR[new Date(TODAY.y, TODAY.m - 1, TODAY.d).getDay()]
  const monthName = MONTHS_TR[TODAY.m - 1]

  return (
    <PageContainer>
      {/* Page header */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-3">
          <h1
            className="font-display text-2xl font-extrabold"
            style={{ color: 'var(--color-text-primary)', fontFamily: 'Manrope, system-ui, sans-serif' }}
          >
            Günün Menüsü
          </h1>
          <Badge variant="accent">BUGÜN</Badge>
        </div>
        <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          {weekdayName}, {TODAY.d} {monthName} {TODAY.y} — {city}
        </p>
      </div>

      {/* Summary card */}
      <div
        className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border p-4"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-accent)',
        }}
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--color-text-faint)' }}>
            Toplam Günlük Kalori
          </p>
          <p
            className="mt-1 font-display text-3xl font-extrabold"
            style={{ color: 'var(--color-calorie)', fontFamily: 'Manrope, system-ui, sans-serif' }}
          >
            {totalCalories.toLocaleString('tr-TR')}
            <span className="ml-1 text-base font-semibold">kcal</span>
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-center">
            <p className="text-xs" style={{ color: 'var(--color-text-faint)' }}>Kahvaltı</p>
            <CalorieBadge calories={menu.breakfast.calories} size="md" />
          </div>
          <div className="text-center">
            <p className="text-xs" style={{ color: 'var(--color-text-faint)' }}>Akşam</p>
            <CalorieBadge calories={menu.dinner.calories} size="md" />
          </div>
        </div>
      </div>

      {/* Meal cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <MealCard meal={menu.breakfast} type="breakfast" />
        <MealCard meal={menu.dinner} type="dinner" />
      </div>
    </PageContainer>
  )
}
