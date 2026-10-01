import type { MealSet, MealType } from '../../types'
import { Coffee, UtensilsCrossed } from 'lucide-react'
import { CalorieBadge } from './CalorieBadge'
import { MealItemList } from './MealItemList'

interface MealCardProps {
  meal: MealSet
  type: MealType
}

const MEAL_LABELS: Record<MealType, string> = {
  breakfast: 'Sabah Kahvaltısı',
  dinner: 'Akşam Yemeği',
}

export function MealCard({ meal, type }: MealCardProps) {
  const Icon = type === 'breakfast' ? Coffee : UtensilsCrossed

  return (
    <article
      className="flex flex-col rounded-2xl border p-5"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
      aria-label={MEAL_LABELS[type]}
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{ backgroundColor: 'var(--color-accent-soft)', color: 'var(--color-accent)' }}
          >
            <Icon size={18} />
          </div>
          <h2
            className="font-display text-base font-bold"
            style={{
              color: 'var(--color-text-primary)',
              fontFamily: 'Manrope, system-ui, sans-serif',
            }}
          >
            {MEAL_LABELS[type]}
          </h2>
        </div>
        <CalorieBadge calories={meal.calories} size="md" />
      </div>

      {/* Divider */}
      <div className="mb-4 h-px" style={{ backgroundColor: 'var(--color-border-soft)' }} />

      {/* Items */}
      <MealItemList items={meal.items} />
    </article>
  )
}
