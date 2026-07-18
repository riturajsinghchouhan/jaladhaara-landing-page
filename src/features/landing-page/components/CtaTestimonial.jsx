import { ArrowRight, Phone, Quote } from 'lucide-react'
import Button from '../../../components/ui/Button'

const FIELD_IMAGE =
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80'

const FARMER_IMAGE =
  'https://images.unsplash.com/photo-1595278069441-2a64bc23e4b4?auto=format&fit=crop&w=800&q=80'

export default function CtaTestimonial() {
  return (
    <section id="reviews" className="relative overflow-hidden py-16 sm:py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${FIELD_IMAGE})` }}
      />
      <div className="absolute inset-0 bg-forest/75 backdrop-blur-[2px]" />

      <div className="relative mx-auto grid max-w-7xl items-end gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6 lg:px-8">
        <div className="max-w-md rounded-3xl bg-forest/90 p-7 shadow-2xl ring-1 ring-white/10 sm:p-9">
          <p className="text-xs font-bold tracking-[0.16em] text-mint uppercase">
            Ready to find water
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-[2.1rem]">
            Let&apos;s find water where it matters.
          </h2>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href="#request" className="px-6 py-3">
              Request Borewell
              <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2.5 rounded-full bg-forest-soft px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-forest"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mint/20 text-mint">
                <Phone className="h-4 w-4" />
              </span>
              +91 98765 43210
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex justify-center lg:mx-0">
          <div className="relative h-72 w-56 overflow-hidden rounded-t-[8rem] rounded-b-3xl bg-forest-soft shadow-2xl sm:h-80 sm:w-64">
            <img
              src={FARMER_IMAGE}
              alt="Happy farmer who found water with Jaladhaara Groundwater Pvt Ltd a start up company"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <blockquote className="relative max-w-md rounded-3xl bg-forest p-7 shadow-2xl ring-1 ring-white/10 sm:p-8 lg:justify-self-end">
          <Quote className="absolute top-5 right-6 h-10 w-10 text-mint/40" />
          <p className="relative text-[15px] leading-relaxed text-white/90 sm:text-base">
            &ldquo;Jaladhaara Groundwater Pvt Ltd a start up company saved me from wasting money on a dry borewell. They
            found water in the first attempt — something I never expected in my
            village.&rdquo;
          </p>
          <footer className="mt-5 text-sm font-semibold text-mint">
            — Ramesh Patel, Farmer, Dewas
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
