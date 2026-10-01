import type { MealSet } from '../types'

// Mock akşam yemeği varyasyonları — gerçek KYK verisi değildir
export const DINNER_SETS: MealSet[] = [
  {
    items: [
      { name: 'Mercimek Çorbası', amount: '1 kase' },
      { name: 'Tavuk Sote', amount: '150g' },
      { name: 'Pilav', amount: '200g' },
      { name: 'Mevsim Salata', amount: '100g' },
      { name: 'Ekmek', amount: '100g' },
      { name: 'Meyve', amount: '1 adet' },
    ],
    calories: 780,
  },
  {
    items: [
      { name: 'Domates Çorbası', amount: '1 kase' },
      { name: 'Kuru Fasulye', amount: '200g' },
      { name: 'Pilav', amount: '200g' },
      { name: 'Turşu', amount: '50g' },
      { name: 'Ekmek', amount: '100g' },
      { name: 'Ayran', amount: '200ml' },
    ],
    calories: 720,
  },
  {
    items: [
      { name: 'Ezogelin Çorbası', amount: '1 kase' },
      { name: 'Et Sote', amount: '150g' },
      { name: 'Bulgur Pilavı', amount: '200g' },
      { name: 'Cacık', amount: '100g' },
      { name: 'Ekmek', amount: '100g' },
      { name: 'Komposto', amount: '150ml' },
    ],
    calories: 830,
  },
  {
    items: [
      { name: 'Yeşil Mercimek Çorbası', amount: '1 kase' },
      { name: 'Fırın Tavuk', amount: '200g' },
      { name: 'Makarna', amount: '200g' },
      { name: 'Çoban Salata', amount: '100g' },
      { name: 'Ekmek', amount: '100g' },
      { name: 'Meyve', amount: '1 adet' },
    ],
    calories: 850,
  },
  {
    items: [
      { name: 'Tarhana Çorbası', amount: '1 kase' },
      { name: 'Köfte', amount: '150g' },
      { name: 'Patates Yemeği', amount: '200g' },
      { name: 'Mevsim Salata', amount: '100g' },
      { name: 'Ekmek', amount: '100g' },
      { name: 'Ayran', amount: '200ml' },
    ],
    calories: 760,
  },
  {
    items: [
      { name: 'Sebze Çorbası', amount: '1 kase' },
      { name: 'Bezelye Yemeği', amount: '200g' },
      { name: 'Pilav', amount: '200g' },
      { name: 'Turşu', amount: '50g' },
      { name: 'Ekmek', amount: '100g' },
      { name: 'Komposto', amount: '150ml' },
    ],
    calories: 670,
  },
]
