// ============================================================
// Menü Üretici
// ============================================================
// Önce gerçek KYK veri tabanına bakar (src/mocks/realMenus/).
// Eşleşme yoksa deterministik mock veri üretir.
// Math.random() KULLANILMAZ — aynı gün+şehir her zaman aynı sonucu verir.
// ============================================================

import type { DayMenu, City } from '../types'
import { BREAKFAST_SETS } from './breakfastSets'
import { DINNER_SETS } from './dinnerSets'
import { CITIES } from './cities'
import { getRealMenu } from './realMenus'

function dayOfYear(year: number, month: number, day: number): number {
  const start = new Date(year, 0, 0)
  const date = new Date(year, month - 1, day)
  const diff = date.getTime() - start.getTime()
  const oneDay = 1000 * 60 * 60 * 24
  return Math.floor(diff / oneDay)
}

export function getMenu(city: City, year: number, month: number, day: number): DayMenu {
  // Önce deterministik mock veri üret, sonra gerçek veri olan öğünlerin üstüne yaz
  const cityOffset = CITIES.indexOf(city)
  const offset = cityOffset >= 0 ? cityOffset : 0
  const doy = dayOfYear(year, month, day)

  const breakfastIndex = (doy + offset) % BREAKFAST_SETS.length
  const dinnerIndex = (doy + offset + 2) % DINNER_SETS.length

  const real = getRealMenu(city, year, month, day)

  return {
    year,
    month,
    day,
    city,
    breakfast: real?.breakfast ?? BREAKFAST_SETS[breakfastIndex],
    dinner: real?.dinner ?? DINNER_SETS[dinnerIndex],
    realBreakfast: Boolean(real?.breakfast),
    realDinner: Boolean(real?.dinner),
  }
}
