import {
  ArrowRight,
  Droplets,
  Play,
  Radar,
  TrendingUp,
  Users,
} from 'lucide-react'
import Button from '../../../components/ui/Button'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1920&q=80'

const pills = [
  { icon: Droplets, label: 'Find Water in Tough Areas' },
  { icon: Radar, label: 'Advanced Detection' },
  { icon: Users, label: 'Trusted by 1000+ Farmers' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-forest pt-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/92 to-forest/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-forest/40" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
        <div className="max-w-xl">
          <p className="animate-fade-up text-xs font-bold tracking-[0.18em] text-gold uppercase sm:text-[13px]">
            Water is precious. Let&apos;s find it together.
          </p>

          <h1 className="animate-fade-up-delay-1 mt-4 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
            Find Borewell{' '}
            <span className="text-mint">Where Water</span> Still Exists.
          </h1>

          <p className="animate-fade-up-delay-2 mt-5 max-w-md text-base leading-relaxed text-white/80 sm:text-[17px]">
            We help farmers and communities discover the perfect borewell point
            — even in the toughest water-scarce areas — using smart technology
            and local expertise.
          </p>

          <ul className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
            {pills.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-white/90"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mint/15 text-mint">
                  <Icon className="h-4 w-4" />
                </span>
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#request" className="px-6 py-3 text-[15px]">
              Find Borewell Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative hidden min-h-[420px] lg:block">
          <div className="animate-float absolute top-8 right-8 flex h-36 w-36 flex-col items-center justify-center rounded-full border border-white/20 bg-forest/70 text-center shadow-xl backdrop-blur-sm">
            <Droplets className="mb-2 h-7 w-7 text-mint" />
            <p className="px-4 text-sm font-bold leading-snug text-white">
              Every Drop
              <br />
              Counts
            </p>
          </div>

          <div className="absolute right-0 bottom-10 w-[280px] rounded-2xl border border-white/10 bg-forest/85 p-5 shadow-2xl backdrop-blur-md">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint/20 text-mint">
                <TrendingUp className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-white/70">Successful Borewells</p>
                <p className="text-2xl font-extrabold text-white">1200+</p>
                <p className="mt-0.5 text-sm text-mint">Across 8+ Districts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
