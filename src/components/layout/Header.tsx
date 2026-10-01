import { useLocation } from 'react-router-dom'
import { CitySelect } from '../city/CitySelect'
import { MonthNavigator } from '../calendar/MonthNavigator'
import { ThemeToggle } from '../ui/ThemeToggle'

export function Header() {
  const location = useLocation()
  const isAllMenus = location.pathname === '/'

  return (
    <header
      className="sticky top-0 z-40 flex flex-wrap items-center gap-3 border-b px-4 py-3 md:px-6 transition-colors duration-300"
      style={{
        backgroundColor: 'var(--color-bg)',
        borderColor: 'var(--color-border)',
      }}
    >
      <CitySelect />
      {isAllMenus && (
        <div className="flex-1 flex justify-center">
          <MonthNavigator />
        </div>
      )}
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </header>
  )
}
