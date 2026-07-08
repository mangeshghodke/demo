import { useState, useRef, useEffect } from 'react'

const options = [
  { value: '', label: "I'm interested in..." },
  { value: 'LED Sign Board', label: 'LED Sign Board' },
  { value: 'Stainless Steel Sign / Letter', label: 'Stainless Steel Sign / Letter' },
  { value: 'Acrylic Name Plate', label: 'Acrylic Name Plate' },
  { value: 'Vehicle Wrapping', label: 'Vehicle Wrapping' },
  { value: 'HSRP Number Plate', label: 'HSRP Number Plate' },
  { value: 'Neon / Vinyl Sign', label: 'Neon / Vinyl Sign' },
  { value: 'Laser Cutting / Glass Etching', label: 'Laser Cutting / Glass Etching' },
  { value: 'Other', label: 'Other (please specify)' },
]

export default function CustomSelect({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const selected = options.find(o => o.value === value) || options[0]

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('touchstart', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('touchstart', handleClick)
    }
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={`w-full rounded-lg border px-4 py-3 text-left text-base outline-none transition bg-white dark:bg-gray-700
          ${open ? 'border-primary ring-1 ring-primary' : 'border-gray-300 dark:border-gray-600'}
          ${value ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}
      >
        <span className="block truncate">{selected.label}</span>
        <svg className={`pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 transition ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul className="absolute left-0 right-0 z-50 mt-1 max-h-56 overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-700">
          {options.map((opt) => (
            <li key={opt.value}>
              <button
                type="button"
                disabled={!opt.value}
                onClick={() => { onChange(opt.value); setOpen(false) }}
                className={`w-full px-4 py-2.5 text-left text-base transition
                  ${!opt.value ? 'text-gray-400 cursor-default dark:text-gray-500' : 'text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600'}
                  ${value === opt.value ? 'bg-primary/10 font-medium text-primary dark:bg-primary/20 dark:text-primary-light' : ''}`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
