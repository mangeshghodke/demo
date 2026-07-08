import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RotatingText from './reactbits/RotatingText'
import RippleButton from './RippleButton'
import Particles from './reactbits/Particles'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section id="home" className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-primary to-primary-light">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.15),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.05),transparent_50%)]" />
      <div className="absolute inset-0">
        <Particles
          particleColors={['#ffffff', '#f59e0b', '#fbbf24']}
          particleCount={isMobile ? 60 : 150}
          particleSpread={isMobile ? 8 : 15}
          speed={0.08}
          particleBaseSize={isMobile ? 40 : 60}
          sizeRandomness={0.5}
          alphaParticles
          className="h-full w-full"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-sm text-amber-300 whitespace-nowrap">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            Est. 2017 — Manufacturer & Supplier, Solapur
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-tight">
            Premium Sign Boards &{' '}
            <span className="inline-block text-amber-400">
              <RotatingText
                texts={['Glow Sign Boards', 'LED Sign Boards', 'SS Letters', 'Acrylic Name Plates', 'Vehicle Wraps', 'HSRP Number Plates']}
                rotationInterval={2500}
                splitBy="words"
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
            Manufacturer & supplier of LED sign boards, stainless steel letters, acrylic nameplates, neon signs, vinyl signs, vehicle wrapping, laser cutting, and more. Quality craftsmanship since 2017.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/products">
              <RippleButton className="rounded-full bg-amber-400 px-8 py-3.5 text-sm font-bold text-gray-900 shadow-lg shadow-amber-400/30 transition hover:bg-amber-300">
                Explore Products
              </RippleButton>
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Get a Quote
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span><span className="font-bold text-white">4.9</span> (502 reviews) — 4.6 on JustDial (111 ratings)</span>
            </div>
            <span className="hidden sm:inline">·</span>
            <span>0.8 km from Solapur Railway Station</span>
          </div>
        </div>
      </div>
    </section>
  )
}
