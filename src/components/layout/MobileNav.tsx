import { LayoutGrid, CalendarDays, Info } from 'lucide-react'
import { NavPill } from '../nav/NavPill'

export function MobileNav() {
  return (
    <nav
      className="flex items-center gap-2 overflow-x-auto border-b px-4 py-3 md:hidden"
      style={{
        backgroundColor: 'var(--color-sidebar-bg)',
        borderColor: 'var(--color-border)',
      }}
    >
      <NavPill to="/" icon={<LayoutGrid size={13} />} label="Tüm Menüler" />
      <NavPill to="/gunun-menusu" icon={<CalendarDays size={13} />} label="Günün Menüsü" />
      <NavPill to="/hakkinda" icon={<Info size={13} />} label="Hakkında" />
    </nav>
  )
}
