import { Flame } from 'lucide-react'
import { formatCalories } from '../../lib/format'

interface CalorieBadgeProps {
  calories: number
  size?: 'sm' | 'md'
}

export function CalorieBadge({ calories, size = 'sm' }: CalorieBadgeProps) {
  return (
    <div
      className="inline-flex items-center gap-1 rounded-full px-2.5 py-1"
      style={{
        backgroundColor: 'var(--color-surface-alt)',
        color: 'var(--color-calorie)',
      }}
    >
      <Flame size={size === 'md' ? 16 : 14} />
      <span
        className="font-display font-semibold"
        style={{
          fontSize: size === 'md' ? '14px' : '12px',
          fontFamily: 'Manrope, system-ui, sans-serif',
        }}
      >
        {formatCalories(calories)}
      </span>
    </div>
  )
}
