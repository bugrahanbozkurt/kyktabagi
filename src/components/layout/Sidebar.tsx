import { UtensilsCrossed } from 'lucide-react'
import { NavItem } from '../nav/NavItem'
import { LayoutGrid, CalendarDays, Info } from 'lucide-react'

export function Sidebar() {
  return (
    <aside
      className="fixed left-0 top-0 hidden h-full w-60 flex-col border-r md:flex transition-colors duration-300"
      style={{
        backgroundColor: 'var(--color-sidebar-bg)',
        borderColor: 'var(--color-border)',
      }}
    >
      {/* Logo */}
      <div
        className="flex items-center gap-3 border-b px-5 py-5"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <div
          className="flex h-9 w-9 items-center justify-center rounded-xl"
          style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-text)' }}
        >
          <UtensilsCrossed size={18} />
        </div>
        <div>
          <p className="font-display text-sm leading-tight" style={{ color: 'var(--color-text-primary)', fontWeight: 700 }}>
            KYK Tabağı
          </p>
          <p className="text-xs" style={{ color: 'var(--color-text-faint)' }}>
            Yurt Menü Takibi
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4">
        <NavItem to="/" icon={<LayoutGrid size={16} />} label="Tüm Menüler" />
        <NavItem to="/gunun-menusu" icon={<CalendarDays size={16} />} label="Günün Menüsü" />
        <NavItem to="/hakkinda" icon={<Info size={16} />} label="Hakkında" />
      </nav>

      {/* Footer */}
      <div className="px-5 py-4">
        <p className="text-xs" style={{ color: 'var(--color-text-faint)' }}>
          © 2026 KYK Tabağı
        </p>
      </div>
    </aside>
  )
}
