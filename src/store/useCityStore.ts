import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { City } from '../types'

interface CityStore {
  city: City
  setCity: (city: City) => void
}

export const useCityStore = create<CityStore>()(
  persist(
    (set) => ({
      city: 'İzmir',
      setCity: (city) => set({ city }),
    }),
    { name: 'kyk-city' }
  )
)
