import {
  Drill,
  Handshake,
  Microscope,
  Mountain,
} from 'lucide-react'

const solutions = [
  {
    icon: Mountain,
    title: 'Geological Survey',
    text: 'Scientific site analysis to map underground water potential before any drilling begins.',
  },
  {
    icon: Microscope,
    title: 'Expert Analysis',
    text: 'Local hydrogeology experts review data to pinpoint the most promising borewell locations.',
  },
  {
    icon: Drill,
    title: 'Accurate Drilling',
    text: 'Precise guidance so every drill hits where water still exists — saving time and cost.',
  },
  {
    icon: Handshake,
    title: 'Post Drilling Support',
    text: 'Ongoing guidance after drilling so your borewell keeps delivering for seasons to come.',
  },
]

export default function Solution() {
  return (
    <section id="services" className="relative bg-forest pt-20 pb-28 sm:pt-24 sm:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="max-w-lg">
          <p className="text-sm font-bold tracking-[0.16em] text-mint uppercase">
            Our Solution
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.55rem]">
            Smart Technology.
            <br />
            Local Expertise.
            <br />
            Better Results.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-[17px]">
            Jaladhaara Groundwater Pvt Ltd a start up company combines modern water detection tools with on-ground
            experience so farmers don&apos;t gamble on a dry well. We find the
            point. You drill with confidence.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {solutions.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-forest-soft/80 p-5 transition hover:border-mint/30 hover:bg-forest-soft sm:p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint/15 text-mint">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
