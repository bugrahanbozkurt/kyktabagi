import { create } from 'zustand'
import type { MealType } from '../types'
import { TODAY } from '../lib/constants'

interface MenuViewStore {
  mealType: MealType
  viewYear: number
  viewMonth: number
  selectedDay: number | null
  calendarOpen: boolean
  setMealType: (mealType: MealType) => void
  setSelectedDay: (day: number | null) => void
  toggleCalendar: () => void
}

export const useMenuViewStore = create<MenuViewStore>()((set) => ({
  mealType: 'breakfast',
  viewYear: TODAY.y,
  viewMonth: TODAY.m,
  selectedDay: TODAY.d,
  calendarOpen: false,
  setMealType: (mealType) => set({ mealType }),
  setSelectedDay: (selectedDay) => set({ selectedDay }),
  toggleCalendar: () => set((state) => ({ calendarOpen: !state.calendarOpen })),
}))
