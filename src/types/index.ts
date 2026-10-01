export type Theme = 'dark' | 'light'

export type City = string

export interface MealItem {
  name: string
  amount: string
}

export interface MealSet {
  items: MealItem[]
  calories: number
}

export interface DayMenu {
  year: number
  month: number
  day: number
  city: City
  breakfast: MealSet
  dinner: MealSet
  realBreakfast: boolean // true = gerçek KYK verisi, false = örnek veri
  realDinner: boolean
}

export type MealType = 'breakfast' | 'dinner'

export interface CalendarCell {
  day: number | null
  isToday: boolean
  isSelected: boolean
}
