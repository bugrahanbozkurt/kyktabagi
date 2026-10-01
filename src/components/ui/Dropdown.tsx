import { useRef, useEffect } from 'react'
import clsx from 'clsx'

interface DropdownProps {
  open: boolean
  onClose: () => void
  trigger: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function Dropdown({ open, onClose, trigger, children, className }: DropdownProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose()
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  return (
    <div ref={ref} className={clsx('relative', className)}>
      {trigger}
      {open && (
        <div
          className="absolute left-0 top-full z-50 mt-2 min-w-[180px] overflow-hidden rounded-xl border shadow-xl"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
          role="listbox"
        >
          {children}
        </div>
      )}
    </div>
  )
}
