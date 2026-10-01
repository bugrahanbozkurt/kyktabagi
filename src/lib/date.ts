import type { CalendarCell } from '../types'
import { TODAY } from './constants'

export function daysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate()
}

// Returns Monday=0, Tuesday=1, ..., Sunday=6
function weekdayMon0(year: number, month: number, day: number): number {
  const d = new Date(year, month - 1, day).getDay() // 0=Sun, 1=Mon...
  return (d + 6) % 7
}

export function isToday(year: number, month: number, day: number): boolean {
  return year === TODAY.y && month === TODAY.m && day === TODAY.d
}

// Builds a flat array of 42 calendar cells (6 weeks × 7 days).
// Cells before the first day of the month and after the last are null.
export function buildCalendarCells(
  year: number,
  month: number,
  selectedDay: number | null
): CalendarCell[] {
  const totalDays = daysInMonth(year, month)
  const firstWeekday = weekdayMon0(year, month, 1)
  const cells: CalendarCell[] = []

  // Leading empty cells
  for (let i = 0; i < firstWeekday; i++) {
    cells.push({ day: null, isToday: false, isSelected: false })
  }

  // Actual days
  for (let d = 1; d <= totalDays; d++) {
    cells.push({
      day: d,
      isToday: isToday(year, month, d),
      isSelected: selectedDay === d,
    })
  }

  // Trailing empty cells to fill 42 slots
  while (cells.length < 42) {
    cells.push({ day: null, isToday: false, isSelected: false })
  }

  return cells
}

export function formatDate(year: number, month: number, day: number): string {
  return `${String(day).padStart(2, '0')}.${String(month).padStart(2, '0')}.${year}`
}
