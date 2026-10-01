export function formatCalories(cal: number): string {
  return cal.toLocaleString('tr-TR') + ' kcal'
}

export function formatDayLabel(day: number, month: number): string {
  return `${String(day).padStart(2, '0')}.${String(month).padStart(2, '0')}`
}
