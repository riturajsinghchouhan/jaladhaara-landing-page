import { Coins, Crosshair, Droplets } from 'lucide-react'

const problems = [
  {
    icon: Droplets,
    title: 'Water Scarcity',
    text: 'Groundwater levels are dropping every year, making it harder to find reliable water sources.',
  },
  {
    icon: Crosshair,
    title: 'Wrong Guesswork',
    text: 'Random drilling without proper survey often leads to dry borewells and wasted effort.',
  },
  {
    icon: Coins,
    title: 'Financial Loss',
    text: 'Failed borewells cost farmers lakhs — money that could have fed their families instead.',
  },
]

export default function Problem() {
  return (
    <section id="why-us" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="max-w-md lg:pt-6">
          <p className="text-sm font-bold tracking-[0.16em] text-mint-bright uppercase">
            The Problem
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-forest sm:text-4xl lg:text-[2.6rem]">
            Water is getting{' '}
            <span className="hand-underline">harder</span> to find.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-[17px]">
            Farmers across India face the same struggle — digging blindly,
            losing money, and still walking away without water. Guesswork is
            expensive. Precision is the only way forward.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {problems.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="flex gap-4 rounded-2xl bg-white p-5 shadow-[0_8px_30px_rgba(6,44,43,0.06)] ring-1 ring-forest/5 transition hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(6,44,43,0.1)] sm:p-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mint/15 text-forest">
                <Icon className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="text-lg font-bold text-forest">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted sm:text-[15px]">
                  {text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
