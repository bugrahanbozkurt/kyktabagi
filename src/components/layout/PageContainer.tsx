import clsx from 'clsx'

interface PageContainerProps {
  children: React.ReactNode
  className?: string
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={clsx('mx-auto max-w-5xl w-full', className)}>
      {children}
    </div>
  )
}
