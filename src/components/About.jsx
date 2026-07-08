import SplitText from './reactbits/SplitText'

const highlights = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Est. 2017 · 8+ Years',
    desc: 'Proprietorship firm with a strong reputation in sign board manufacturing, vehicle wrapping, and more.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Manufacturer & Supplier',
    desc: 'Specializing in LED sign boards, neon signs, vinyl signs, glow sign boards, SS letters, acrylic nameplates, caution signs, and PVC nameplates.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Additional Services',
    desc: 'Vehicle wrapping (car & bike), glass etching, lamination, laser cutting, HSRP number plates, maintenance & installation.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Led by Alok Indi (Owner)',
    desc: 'Deep expertise in signage, vehicle wrapping, and custom fabrication. Known for creativity and dedication to quality.',
  },
]

const services = [
  'LED & Neon Signages', 'Vinyl Sign Shop', 'Vehicle Wrapping', 'HSRP Number Plates',
  'Glass Etching', 'Laser Cutting', 'Lamination Service', 'Caution Signs',
  'Acrylic Nameplates', 'Stainless Steel Letters', 'Maintenance & Installation',
]

export default function About() {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <h2 className="inline-block text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            <SplitText text="About Mayur Art" splitType="words" delay={80} tag="span" className="text-3xl sm:text-4xl font-extrabold" />
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Mayur Art is a Proprietorship firm established in 2017, engaged in manufacturing, retailing, and wholesaling
            top-quality signage, nameplates, vehicle wraps, and custom fabrication. Under the guidance of Alok Indi (Owner),
            we serve clients across Maharashtra with 19+ products and a wide range of value-added services.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 text-center transition hover:border-primary/20 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light">
                {h.icon}
              </div>
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">{h.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{h.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-center text-xl font-bold text-gray-900 dark:text-white">Services We Offer</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {services.map((s, i) => (
              <span key={i} className="rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm transition hover:border-primary/40 hover:shadow dark:border-primary/30 dark:bg-gray-800 dark:text-primary-light">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
