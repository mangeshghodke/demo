import { useState } from 'react'
import RippleButton from './RippleButton'
import BlurText from './reactbits/BlurText'
import CustomSelect from './CustomSelect'

export default function Contact() {
  const [interest, setInterest] = useState('')
  return (
    <section id="contact" className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <h2 className="inline-block text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            <BlurText text="Get In Touch" animateBy="words" delay={150} direction="top" className="text-3xl sm:text-4xl font-extrabold" />
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Reach out for inquiries, quotes, or custom signage — we're open 7 days a week.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400">Owner</p>
                  <p className="font-semibold text-gray-900 dark:text-white">Alok Indi</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">Marketing Manager</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400">Address</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Shop No. 31, Hutatma Smruti Mandir Shopping Centre,<br />
                    Railway Lines (Bhaiya Chowk Road),<br />
                    Solapur, Maharashtra - 413001
                  </p>
                  <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">0.8 km from Solapur Railway Station</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400">Call / WhatsApp</p>
                  <p className="font-semibold text-gray-900 dark:text-white">+91 98908 66229</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">WhatsApp: +91 92170 02598</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400">Business Hours</p>
                  <p className="font-semibold text-gray-900 dark:text-white">9:00 AM – 9:00 PM</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Open 7 days a week</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400">Ratings & Reviews</p>
                  <p className="font-semibold text-gray-900 dark:text-white">4.9 ⭐ on magicpin (502 reviews)</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">4.6 ⭐ on JustDial (111 ratings) · Verified Business</p>
                  <p className="text-xs text-gray-400 mt-1 dark:text-gray-500">168+ people recently enquired</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800 lg:col-span-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Send us a message</h3>
            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Your Name" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400" />
                <input type="email" placeholder="Your Email" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400" />
              </div>
              <input type="tel" placeholder="Phone Number" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400" />
              <CustomSelect value={interest} onChange={setInterest} />
              <textarea rows={4} placeholder="Tell us about your requirements..." className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400" />
              <RippleButton className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-light">
                Send Message
              </RippleButton>
            </form>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+919890866229"
                className="inline-flex items-center gap-2 rounded-full bg-green-50 px-5 py-2.5 text-sm font-semibold text-green-700 transition hover:bg-green-100 dark:bg-green-500/10 dark:text-green-400 dark:hover:bg-green-500/20"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <a
                href="https://wa.me/919217002598"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="https://www.justdial.com/Solapur/Mayur-Art-Park-Chowk-Near-Shubhray-Art-Gallary-Railway-Lines/9999PX217-X217-140528141801-I5L2_BZDET"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                View on JustDial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
