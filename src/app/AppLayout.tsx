import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/layout/Sidebar'
import { MobileNav } from '../components/layout/MobileNav'
import { Header } from '../components/layout/Header'

export function AppLayout() {
  return (
    <div
      className="flex min-h-screen transition-colors duration-300"
      style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text-primary)' }}
    >
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex min-w-0 flex-1 flex-col md:ml-60">
        <Header />
        <MobileNav />
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
