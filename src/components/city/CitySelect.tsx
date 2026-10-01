import { useState } from 'react'
import { MapPin, ChevronDown, Check } from 'lucide-react'
import { Dropdown } from '../ui/Dropdown'
import { useCityStore } from '../../store/useCityStore'
import { CITIES } from '../../mocks/cities'

export function CitySelect() {
  const [open, setOpen] = useState(false)
  const { city, setCity } = useCityStore()

  return (
    <Dropdown
      open={open}
      onClose={() => setOpen(false)}
      trigger={
        <button
          onClick={() => setOpen((o) => !o)}
          className="focus-ring flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-colors duration-150"
          style={{
            backgroundColor: 'var(--color-surface)',
            color: 'var(--color-text-primary)',
            border: '1px solid var(--color-border)',
          }}
          aria-label="Şehir seç"
          aria-expanded={open}
          aria-haspopup="listbox"
        >
          <MapPin size={14} style={{ color: 'var(--color-accent)' }} />
          <span className="max-w-[120px] truncate">{city}</span>
          <ChevronDown
            size={14}
            className={`ml-auto transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            style={{ color: 'var(--color-text-faint)' }}
          />
        </button>
      }
    >
      <div className="max-h-64 overflow-y-auto py-1">
        {CITIES.map((c) => (
          <button
            key={c}
            role="option"
            aria-selected={c === city}
            onClick={() => {
              setCity(c)
              setOpen(false)
            }}
            className="focus-ring flex w-full items-center gap-2 px-4 py-2 text-left text-sm transition-colors duration-100"
            style={{
              color: c === city ? 'var(--color-accent)' : 'var(--color-text-primary)',
              backgroundColor: c === city ? 'var(--color-accent-soft)' : 'transparent',
            }}
            onMouseEnter={(e) => {
              if (c !== city) (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-surface-alt)'
            }}
            onMouseLeave={(e) => {
              if (c !== city) (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
            }}
          >
            <span className="flex-1">{c}</span>
            {c === city && <Check size={14} />}
          </button>
        ))}
      </div>
    </Dropdown>
  )
}
