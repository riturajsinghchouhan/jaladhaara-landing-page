import { MapPin, Smile, Trophy, Users } from 'lucide-react'

const stats = [
  { icon: Users, value: '1200+', label: 'Successful Borewells' },
  { icon: MapPin, value: '8+', label: 'Districts Served' },
  { icon: Trophy, value: '98%', label: 'Success Rate' },
  { icon: Smile, value: '1000+', label: 'Happy Customers' },
]

export default function StatsBar() {
  return (
    <section id="areas" className="relative z-10 -mt-10 bg-transparent px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white px-4 py-8 shadow-[0_20px_60px_rgba(6,44,43,0.12)] ring-1 ring-forest/5 sm:px-8">
        <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <li
              key={label}
              className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:gap-3 sm:text-left lg:justify-center"
            >
              <span className="mb-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint/15 text-forest sm:mb-0">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div>
                <p className="text-xl font-extrabold text-forest sm:text-2xl">{value}</p>
                <p className="text-xs font-medium text-muted sm:text-sm">{label}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
