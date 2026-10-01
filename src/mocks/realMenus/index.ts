// ============================================================
// Gerçek menü verisi (şehir + ay bazlı JSON)
// ============================================================
// Yeni ay/şehir eklemek için src/data/ altına JSON koy ve
// aşağıdaki REAL_MENU_SOURCES'a kaydet. Bir öğün yoksa
// (ör. sadece kahvaltı) o öğün örnek veriyle tamamlanır.
// ============================================================

import izmir202610 from '../../data/izmir-2026-10.json'
import type { City, MealSet } from '../../types'

export interface RealDayData {
  breakfast?: MealSet
  dinner?: MealSet
}

interface MonthFile {
  days: Record<string, RealDayData>
}

// Anahtar formatı: "şehirSlug-yyyy-m"  (örn: "izmir-2026-10")
const REAL_MENU_SOURCES: Record<string, MonthFile> = {
  'izmir-2026-10': izmir202610 as MonthFile,
}

function cityToSlug(city: City): string {
  return city
    .toLocaleLowerCase('tr-TR')
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ş/g, 's')
    .replace(/ç/g, 'c')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/\s+/g, '-')
}

/** Bu şehir+gün için gerçek veri varsa döndürür, yoksa null. */
export function getRealMenu(
  city: City,
  year: number,
  month: number,
  day: number
): RealDayData | null {
  const source = REAL_MENU_SOURCES[`${cityToSlug(city)}-${year}-${month}`]
  return source?.days[String(day)] ?? null
}