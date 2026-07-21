import { Droplets } from 'lucide-react'

export default function Logo({ light = false, compact = false }) {
  return (
    <a href="#home" className="group flex items-center gap-2.5">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full ${light ? 'bg-mint/20 text-mint' : 'bg-forest text-mint'
          }`}
      >
        <Droplets className="h-5 w-5" strokeWidth={2.2} />
      </span>
      <span className="leading-tight flex flex-col justify-center">
        <span
          className="block text-lg font-extrabold tracking-tight text-[var(--color-text-primary)] truncate max-w-[200px] sm:max-w-none"
        >
          Jaladhaara <span className="hidden sm:inline">Groundwater Survey Pvt Ltd</span>
        </span>
        {!compact && (
          <span
            className="block text-[11px] font-medium text-[var(--color-text-secondary)]"
          >

          </span>
        )}
      </span>
    </a>
  )
}
