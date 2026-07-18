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
      <span className="leading-tight">
        <span
          className={`block text-lg font-extrabold tracking-tight ${light ? 'text-white' : 'text-forest'
            }`}
        >
          Jaladhaara Groundwater Pvt Ltd a start up company
        </span>
        {!compact && (
          <span
            className={`block text-[11px] font-medium ${light ? 'text-white/70' : 'text-muted'
              }`}
          >
            Har Boond, Har Khet
          </span>
        )}
      </span>
    </a>
  )
}
