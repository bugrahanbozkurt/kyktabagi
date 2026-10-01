import { PageContainer } from '../../components/layout/PageContainer'

export function AboutPage() {
  return (
    <PageContainer>
      <div className="max-w-2xl">
        <h1
          className="mb-2 font-display text-2xl font-extrabold"
          style={{ color: 'var(--color-text-primary)', fontFamily: 'Manrope, system-ui, sans-serif' }}
        >
          Hakkında
        </h1>
        <p className="mb-8 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          KYK Tabağı hakkında bilgi ve iletişim.
        </p>

        <div
          className="space-y-6 rounded-2xl border p-6"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <section>
            <h2
              className="mb-2 font-display text-base font-bold"
              style={{ color: 'var(--color-text-primary)', fontFamily: 'Manrope, system-ui, sans-serif' }}
            >
              Proje Nedir?
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              KYK Tabağı, Kredi ve Yurtlar Kurumu (KYK) yurtlarında kalan öğrencilerin
              şehir bazlı günlük ve aylık yemek menülerini kolayca takip edebilmesi için
              geliştirilmiş bir web uygulamasıdır. Sabah kahvaltısı ve akşam yemeği
              içerikleri, kalori bilgileri ve ay bazlı takvim görünümüyle menüleri
              önceden planlayabilirsiniz.
            </p>
          </section>

          <div className="h-px" style={{ backgroundColor: 'var(--color-border-soft)' }} />

          <section>
            <h2
              className="mb-2 font-display text-base font-bold"
              style={{ color: 'var(--color-text-primary)', fontFamily: 'Manrope, system-ui, sans-serif' }}
            >
              Özellikler
            </h2>
            <ul className="space-y-2">
              {[
                '🏙️ 15 farklı şehir desteği',
                '📅 Ay bazlı takvim navigasyonu',
                '🍳 Sabah kahvaltısı ve akşam yemeği ayrımı',
                '🔥 Kalori bilgisi ve içerik listesi',
                '🌙 Koyu / Açık tema desteği',
                '📱 Mobil uyumlu tasarım',
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="h-px" style={{ backgroundColor: 'var(--color-border-soft)' }} />

          <section>
            <h2
              className="mb-2 font-display text-base font-bold"
              style={{ color: 'var(--color-text-primary)', fontFamily: 'Manrope, system-ui, sans-serif' }}
            >
              Not
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              Bu uygulama <strong style={{ color: 'var(--color-text-primary)' }}>demo amaçlıdır</strong>;
              gösterilen menüler örnek verilerdir. Güncel menü bilgisi için lütfen yurdunuzun yönetimiyle iletişime geçin.
            </p>
          </section>

          <div className="h-px" style={{ backgroundColor: 'var(--color-border-soft)' }} />

          <section>
            <p className="text-xs" style={{ color: 'var(--color-text-faint)' }}>
              Sürüm 1.0.0 · React 18 + TypeScript + Vite + Tailwind CSS · © 2026
            </p>
          </section>
        </div>
      </div>
    </PageContainer>
  )
}
