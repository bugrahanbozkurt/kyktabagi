import { Link } from 'react-router-dom'
import { PageContainer } from '../../components/layout/PageContainer'

export function NotFoundPage() {
  return (
    <PageContainer>
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p
          className="mb-4 font-display text-8xl font-extrabold"
          style={{ color: 'var(--color-accent)', fontFamily: 'Manrope, system-ui, sans-serif' }}
        >
          404
        </p>
        <h1
          className="mb-2 font-display text-2xl font-bold"
          style={{ color: 'var(--color-text-primary)', fontFamily: 'Manrope, system-ui, sans-serif' }}
        >
          Sayfa Bulunamadı
        </h1>
        <p className="mb-8 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <Link
          to="/"
          className="focus-ring inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors duration-150"
          style={{
            backgroundColor: 'var(--color-accent)',
            color: 'var(--color-accent-text)',
          }}
        >
          Anasayfaya Dön
        </Link>
      </div>
    </PageContainer>
  )
}
