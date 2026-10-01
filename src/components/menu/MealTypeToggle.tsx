import { Coffee, UtensilsCrossed } from 'lucide-react'
import { useMenuViewStore } from '../../store/useMenuViewStore'
import type { MealType } from '../../types'

export function MealTypeToggle() {
  const { mealType, setMealType } = useMenuViewStore()

  const options: { value: MealType; label: string; icon: React.ReactNode }[] = [
    { value: 'breakfast', label: 'Sabah Kahvaltısı', icon: <Coffee size={14} /> },
    { value: 'dinner', label: 'Akşam Yemeği', icon: <UtensilsCrossed size={14} /> },
  ]

  return (
    <div
      className="flex rounded-xl p-1"
      style={{ backgroundColor: 'var(--color-surface-alt)' }}
      role="group"
      aria-label="Öğün tipi seç"
    >
      {options.map((opt) => {
        const isActive = mealType === opt.value
        return (
          <button
            key={opt.value}
            onClick={() => setMealType(opt.value)}
            className="focus-ring flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all sm:px-4 duration-200"
            style={{
              backgroundColor: isActive ? 'var(--color-accent)' : 'transparent',
              color: isActive ? 'var(--color-accent-text)' : 'var(--color-text-secondary)',
            }}
            aria-pressed={isActive}
          >
            {opt.icon}
            <span className="whitespace-nowrap">{opt.label}</span>
          </button>
        )
      })}
    </div>
  )
}
