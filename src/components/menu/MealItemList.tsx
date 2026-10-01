import type { MealItem } from '../../types'

interface MealItemListProps {
  items: MealItem[]
}

export function MealItemList({ items }: MealItemListProps) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-center justify-between gap-4">
          <span
            className="text-sm"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {item.name}
          </span>
          <span
            className="shrink-0 text-xs font-medium"
            style={{ color: 'var(--color-text-faint)' }}
          >
            {item.amount}
          </span>
        </li>
      ))}
    </ul>
  )
}
